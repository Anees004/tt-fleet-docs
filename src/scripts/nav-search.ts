function closeSidebar() {
  document.body.classList.remove("sidebar-open");
  const menuToggle = document.getElementById("menu-toggle");
  const backdrop = document.getElementById("sidebar-backdrop");
  menuToggle?.setAttribute("aria-expanded", "false");
  if (backdrop) backdrop.hidden = true;
}

function openSidebar() {
  document.body.classList.add("sidebar-open");
  const menuToggle = document.getElementById("menu-toggle");
  const backdrop = document.getElementById("sidebar-backdrop");
  menuToggle?.setAttribute("aria-expanded", "true");
  if (backdrop) backdrop.hidden = false;
}

function filterNav(q: string) {
  const query = q.trim().toLowerCase();
  const nav = document.getElementById("sidebar-nav");
  const empty = document.getElementById("nav-empty");
  if (!nav) return;

  let any = false;
  nav.querySelectorAll<HTMLElement>(".nav-group").forEach((group) => {
    let groupAny = false;
    group.querySelectorAll<HTMLAnchorElement>(".nav-item").forEach((item) => {
      const hay = item.getAttribute("data-search") || "";
      const match = !query || hay.includes(query);
      item.classList.toggle("is-hidden", !match);
      if (match) groupAny = true;
    });
    group.classList.toggle("is-hidden", !groupAny);
    if (groupAny) any = true;
  });

  empty?.classList.toggle("is-visible", !any);
}

function activeGuideIdFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/guides\/([^/]+)/);
  return match ? match[1] : null;
}

function syncActiveNav() {
  const activeId = activeGuideIdFromPath(location.pathname);
  document.querySelectorAll<HTMLElement>(".nav-item").forEach((item) => {
    item.classList.toggle(
      "is-active",
      item.getAttribute("data-nav") === activeId,
    );
  });
}

function scrollMainToTop() {
  const main = document.getElementById("main");
  if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);
}

function onPageReady() {
  syncActiveNav();
  closeSidebar();
  scrollMainToTop();
}

function wireNav() {
  const w = window as Window & { __tfNavWired?: boolean };
  if (w.__tfNavWired) {
    onPageReady();
    return;
  }
  w.__tfNavWired = true;

  document.addEventListener("input", (e) => {
    const target = e.target as HTMLElement | null;
    if (target?.id === "nav-search") {
      filterNav((target as HTMLInputElement).value);
    }
  });

  document.addEventListener("click", (e) => {
    const el = e.target as HTMLElement | null;
    if (!el) return;

    if (el.closest("#menu-toggle")) {
      if (document.body.classList.contains("sidebar-open")) closeSidebar();
      else openSidebar();
      return;
    }

    if (el.closest("#sidebar-close") || el.closest("#sidebar-backdrop")) {
      closeSidebar();
      return;
    }

    if (el.closest(".nav-item") || el.closest("#nav-home")) {
      closeSidebar();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  });

  document.addEventListener("astro:page-load", onPageReady);
  onPageReady();
}

wireNav();
