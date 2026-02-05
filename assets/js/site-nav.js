async function buildSiteNav() {
  const mount = document.querySelector("[data-site-nav]");
  if (!mount) return;

  const res = await fetch("/bellbrook/assets/data/nav.json", { cache: "no-store" });
  const nav = await res.json();

  mount.innerHTML = `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="${nav.brand?.href || "/bellbrook/"}">
          ${nav.brand?.label || "Site"}
        </a>

        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>

        <nav class="site-nav" aria-label="Primary navigation">
          <ul class="nav-list">
            ${renderItems(nav.items || [])}
          </ul>

          ${nav.cta ? `<a class="nav-cta" href="${nav.cta.href}">${nav.cta.label}</a>` : ""}
        </nav>
      </div>
    </header>
  `;

  // mobile toggle
  const header = mount.querySelector(".site-header");
  const toggle = mount.querySelector(".nav-toggle");
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // close on outside click (mobile)
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function renderItems(items) {
  return items
    .map((item) => {
      if (item.children?.length) {
        const id = "dd_" + Math.random().toString(16).slice(2);
        return `
          <li class="nav-item nav-item--dropdown">
            <button class="dropdown-btn" aria-expanded="false" aria-controls="${id}">
              ${escapeHtml(item.label)} <span class="caret">▾</span>
            </button>
            <ul class="dropdown" id="${id}">
              ${item.children
                .map(
                  (c) => `
                    <li><a href="${c.href}">${escapeHtml(c.label)}</a></li>
                  `
                )
                .join("")}
            </ul>
          </li>
        `;
      }
      return `
        <li class="nav-item">
          <a class="nav-link" href="${item.href}">${escapeHtml(item.label)}</a>
        </li>
      `;
    })
    .join("");
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

buildSiteNav();
