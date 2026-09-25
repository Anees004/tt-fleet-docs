#!/usr/bin/env node
/**
 * Builds the site and prints /print/ to public/titan-fleet-operator-help.pdf
 * Flattens annotated screenshots to bitmaps so iOS PDF viewers don't glitch
 * on CSS overlays / transforms.
 */
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { mkdir, writeFile } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const outPdf = path.join(root, "public", "titan-fleet-operator-help.pdf");
const outDistPdf = path.join(dist, "titan-fleet-operator-help.pdf");
const outRootCopy = path.join(root, "titan-fleet-operator-help-2.pdf");

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd: root, stdio: "inherit", shell: true });
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`)),
    );
  });
}

async function ensureBuild() {
  console.log("Building site for PDF…");
  await run("npm", ["run", "build"]);
}

function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".css")) return "text/css";
  if (file.endsWith(".js")) return "text/javascript";
  if (file.endsWith(".png")) return "image/png";
  if (file.endsWith(".jpg") || file.endsWith(".jpeg")) return "image/jpeg";
  if (file.endsWith(".svg")) return "image/svg+xml";
  if (file.endsWith(".woff2")) return "font/woff2";
  return "application/octet-stream";
}

function startStaticServer(dir) {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
        if (urlPath.endsWith("/")) urlPath += "index.html";
        const filePath = path.join(dir, urlPath);
        if (!filePath.startsWith(dir)) {
          res.writeHead(403);
          res.end();
          return;
        }
        if (!existsSync(filePath)) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        res.writeHead(200, { "Content-Type": contentType(filePath) });
        createReadStream(filePath).pipe(res);
      } catch (e) {
        res.writeHead(500);
        res.end(String(e));
      }
    });
    server.listen(0, "127.0.0.1", () => {
      const addr = server.address();
      const port = typeof addr === "object" && addr ? addr.port : 0;
      resolve({ server, port });
    });
  });
}

async function waitForAssets(page) {
  await page.evaluate(async () => {
    document.querySelectorAll("img[loading='lazy']").forEach((img) => {
      img.setAttribute("loading", "eager");
    });
    const imgs = [...document.images];
    await Promise.all(
      imgs.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete && img.naturalWidth > 0) {
              resolve();
              return;
            }
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
            const src = img.currentSrc || img.src;
            if (src) img.src = src;
          }),
      ),
    );
    if (document.fonts?.ready) await document.fonts.ready;
    await new Promise((r) => setTimeout(r, 300));
  });
}

/**
 * Replace each .annotated-media (image + CSS highlight layers) with a single
 * PNG. iOS PDFKit often glitches on absolute overlays / transforms / shadows.
 */
async function flattenAnnotatedShots(page) {
  const count = await page.$$eval(".annotated-media", (els) => els.length);
  console.log(`Flattening ${count} annotated screenshots…`);

  for (let i = 0; i < count; i++) {
    const handle = await page.$(".annotated-media");
    if (!handle) break;

    // Scroll into view so layout/paint is correct before capture
    await handle.evaluate((el) => {
      el.scrollIntoView({ block: "center", inline: "nearest" });
    });

    const b64 = await handle.screenshot({
      encoding: "base64",
      type: "png",
      omitBackground: false,
    });

    await handle.evaluate((el, dataUrl) => {
      const prev = el.querySelector("img");
      const img = document.createElement("img");
      img.src = dataUrl;
      img.alt = prev?.alt || "";
      img.decoding = "sync";
      img.loading = "eager";
      img.className = "pdf-flat-shot";
      img.style.cssText =
        "display:block;width:100%;height:auto;border-radius:10px;border:1px solid #c0cbb5;background:#fff;";
      const wrap = document.createElement("div");
      wrap.className = "annotated-media is-flat";
      wrap.appendChild(img);
      el.replaceWith(wrap);
    }, `data:image/png;base64,${b64}`);

    await handle.dispose();
  }

  await page.evaluate(async () => {
    document.body.classList.add("pdf-flat");
    await Promise.all(
      [...document.images]
        .filter((img) => img.classList.contains("pdf-flat-shot"))
        .map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete && img.naturalWidth > 0) resolve();
              else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              }
            }),
        ),
    );
    window.scrollTo(0, 0);
  });
}

async function main() {
  await ensureBuild();
  const { server, port } = await startStaticServer(dist);
  const url = `http://127.0.0.1:${port}/print/`;
  console.log(`Printing ${url}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: "networkidle0", timeout: 180000 });
    await page.emulateMediaType("print");
    await waitForAssets(page);

    const missing = await page.evaluate(() =>
      [...document.images]
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.src),
    );
    if (missing.length) {
      console.warn(`Warning: ${missing.length} images still unloaded`, missing.slice(0, 5));
    } else {
      console.log(`All ${await page.evaluate(() => document.images.length)} images ready`);
    }

    await flattenAnnotatedShots(page);

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: false,
      margin: { top: "12mm", bottom: "16mm", left: "12mm", right: "12mm" },
      displayHeaderFooter: true,
      headerTemplate: "<div></div>",
      footerTemplate:
        '<div style="font-size:8px;width:100%;padding:0 12mm;color:#6b7564;display:flex;justify-content:space-between;font-family:system-ui,sans-serif;"><span>Titan Fleet · Operator help · Doc v1.1.0</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>',
    });

    await mkdir(path.dirname(outPdf), { recursive: true });
    await writeFile(outPdf, pdf);
    await writeFile(outDistPdf, pdf);
    await writeFile(outRootCopy, pdf);
    console.log(`Wrote ${outPdf}`);
    console.log(`Wrote ${outDistPdf}`);
    console.log(`Wrote ${outRootCopy}`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
