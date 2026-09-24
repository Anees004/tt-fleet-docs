#!/usr/bin/env node
/**
 * Builds the site (if needed) and prints /print/ to public/titan-fleet-operator-help.pdf
 */
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { mkdir, writeFile, access } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const outPdf = path.join(root, "public", "titan-fleet-operator-help.pdf");
const outDistPdf = path.join(dist, "titan-fleet-operator-help.pdf");

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd: root, stdio: "inherit", shell: true });
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`)),
    );
  });
}

async function ensureBuild() {
  const printPage = path.join(dist, "print", "index.html");
  try {
    await access(printPage);
  } catch {
    console.log("Building site…");
    await run("npm", ["run", "build"]);
  }
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

async function main() {
  await ensureBuild();
  const { server, port } = await startStaticServer(dist);
  const url = `http://127.0.0.1:${port}/print/`;
  console.log(`Printing ${url}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });
    await page.emulateMediaType("print");

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "14mm", bottom: "16mm", left: "12mm", right: "12mm" },
      displayHeaderFooter: true,
      headerTemplate: "<div></div>",
      footerTemplate:
        '<div style="font-size:8px;width:100%;padding:0 12mm;color:#6b7564;display:flex;justify-content:space-between;"><span>Titan Fleet · Operator help</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>',
    });

    await mkdir(path.dirname(outPdf), { recursive: true });
    await writeFile(outPdf, pdf);
    await writeFile(outDistPdf, pdf);
    console.log(`Wrote ${outPdf}`);
    console.log(`Wrote ${outDistPdf}`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
