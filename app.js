// ============================================================
//  ليالي بسمة — Laialy Basma  |  Menu rendering & interactions
//  Trilingual (ar / en / he) + smooth category scroll-spy
// ============================================================

(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  };

  // ---------- State ----------
  let lang = "ar";
  try {
    const saved = localStorage.getItem("lb_lang");
    if (saved && LANGS[saved]) lang = saved;
  } catch (_) {}

  const htmlEl = document.documentElement;
  const catRail = $("#catRail");
  const drawerList = $("#drawerList");
  const menuRoot = $("#menuRoot");

  let pills = [];
  let sections = [];
  let activeId = null;

  // ---------- Build language dropdown ----------
  const langMenu = $("#langMenu");
  function buildLangMenu() {
    langMenu.innerHTML = "";
    LANG_ORDER.forEach((code) => {
      const b = el("button", code === lang ? "active" : "");
      b.textContent = LANGS[code].label;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        langMenu.classList.remove("open");
        if (code !== lang) setLang(code);
      });
      langMenu.appendChild(b);
    });
  }

  // ---------- Render menu in current language ----------
  function render() {
    const t = UI[lang];
    catRail.innerHTML = "";
    drawerList.innerHTML = "";
    menuRoot.innerHTML = "";

    MENU.forEach((cat, i) => {
      const catName = cat.name[lang] || cat.name.ar;

      // pill
      const pill = el("button", "cat-pill" + (i === 0 ? " active" : ""));
      pill.textContent = catName;
      pill.dataset.target = cat.id;
      pill.addEventListener("click", () => scrollToSection(cat.id));
      catRail.appendChild(pill);

      // drawer entry
      const d = el("button");
      const nameSpan = el("span");
      nameSpan.textContent = catName;
      const cnt = el("span", "count");
      cnt.textContent = cat.items.length;
      d.appendChild(nameSpan);
      d.appendChild(cnt);
      d.addEventListener("click", () => {
        scrollToSection(cat.id);
        closeDrawer();
      });
      drawerList.appendChild(d);

      // section
      const section = el("section");
      section.id = "sec-" + cat.id;

      const head = el("div", "section-head");
      const bar = el("div", "section-bar");
      const h2 = el("h2");
      h2.textContent = catName;
      const count = el("span", "section-count");
      count.textContent = "(" + cat.items.length + ")";
      head.appendChild(bar);
      head.appendChild(h2);
      head.appendChild(count);
      section.appendChild(head);

      const cards = el("div", "cards");
      cat.items.forEach((item) => cards.appendChild(renderItem(item, t)));
      section.appendChild(cards);

      menuRoot.appendChild(section);
    });

    pills = Array.from(catRail.querySelectorAll(".cat-pill"));
    sections = MENU.map((c) => document.getElementById("sec-" + c.id));
    activeId = null;
    measureSticky();
    spy(true);
  }

  function renderItem(item, t) {
    const row = el("div", "item");

    const imgWrap = el("div", "item-img");
    const im = el("img");
    im.src = item.img;
    im.alt = item.name[lang] || item.name.ar;
    im.loading = "lazy";
    im.decoding = "async";
    im.addEventListener("error", () => { imgWrap.classList.add("no-img"); im.remove(); });
    imgWrap.appendChild(im);
    if (item.soldOut) {
      const b = el("span", "sold-badge");
      b.textContent = t.soldOut;
      imgWrap.appendChild(b);
    }

    const body = el("div", "item-body");
    const top = el("div");
    const h = el("h3");
    h.textContent = item.name[lang] || item.name.ar;
    top.appendChild(h);
    const descTxt = (item.desc && (item.desc[lang] || "")) || "";
    if (descTxt) {
      const p = el("p", "desc");
      p.textContent = descTxt;
      top.appendChild(p);
    }
    body.appendChild(top);

    const price = el("div", "price");
    const amount = el("span", "amount");
    amount.textContent = item.price;
    const cur = el("span", "cur");
    cur.textContent = RESTAURANT.currency;
    price.appendChild(amount);
    price.appendChild(cur);
    body.appendChild(price);

    row.appendChild(imgWrap);
    row.appendChild(body);
    return row;
  }

  // ---------- Apply language (dir, fonts, texts) ----------
  function setLang(code) {
    lang = code;
    try { localStorage.setItem("lb_lang", code); } catch (_) {}
    applyLangChrome();
    buildLangMenu();
    render();
  }

  function applyLangChrome() {
    const t = UI[lang];
    const L = LANGS[lang];
    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", L.dir);

    $("#tagline").textContent = t.tagline;
    $("#brandName").textContent = L.brand;
    $("#langBtnLabel").textContent = L.label;
    $("#year").textContent = new Date().getFullYear();

    // footer
    $("#igFooter").textContent = "@" + RESTAURANT.instagram;
    $("#igFooter").href = RESTAURANT.instagramUrl;
    $("#footerFollow").firstChild.textContent = t.footerFollow + " ";
    $("#rights").textContent = t.rights;

    // instagram modal
    $("#igHandle").textContent = "@" + RESTAURANT.instagram;
    $("#igFollow").href = RESTAURANT.instagramUrl;
    $("#igFollow").textContent = t.follow;
    $("#igSkip").textContent = t.skip;
    $("#igTitle").textContent = t.igTitle;
    const chipEls = document.querySelectorAll("#igChips .chip");
    t.igChips.forEach((c, i) => { if (chipEls[i]) chipEls[i].textContent = c; });

    // drawer title
    $("#drawerTitle").textContent = t.sections;
    $("#toTop").setAttribute("aria-label", t.toTop);
  }

  // ---------- Sticky offset measurement ----------
  function measureSticky() {
    const header = $(".site-header");
    const rail = $(".cat-rail-outer");
    const hh = header ? header.offsetHeight : 72;
    const rh = rail ? rail.offsetHeight : 56;
    htmlEl.style.setProperty("--header-h", hh + "px");
    htmlEl.style.setProperty("--rail-h", rh + "px");
  }

  // ---------- Scroll to a section ----------
  function scrollToSection(id) {
    const sec = document.getElementById("sec-" + id);
    if (!sec) return;
    sec.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---------- Scroll-spy (smooth: only acts on change) ----------
  function currentStick() {
    const hh = parseInt(getComputedStyle(htmlEl).getPropertyValue("--header-h")) || 72;
    const rh = parseInt(getComputedStyle(htmlEl).getPropertyValue("--rail-h")) || 56;
    return hh + rh + 10;
  }

  function spy(force) {
    if (!sections.length) return;
    const stick = currentStick();
    let newActive = MENU[0].id;
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      if (s && s.getBoundingClientRect().top <= stick) newActive = MENU[i].id;
    }
    if (newActive === activeId && !force) return;
    activeId = newActive;

    for (let i = 0; i < pills.length; i++) {
      const on = pills[i].dataset.target === activeId;
      if (on) {
        if (!pills[i].classList.contains("active")) pills[i].classList.add("active");
        // center the active pill inside the rail only (never scrolls the page)
        pills[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } else {
        pills[i].classList.remove("active");
      }
    }
  }

  function toggleToTop() {
    $("#toTop").classList.toggle("show", window.scrollY > 500);
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          spy(false);
          toggleToTop();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", () => { measureSticky(); });

  // ---------- Language dropdown toggle ----------
  const langBtn = $("#langBtn");
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("open");
  });
  document.addEventListener("click", () => langMenu.classList.remove("open"));

  // ---------- Drawer ----------
  const drawer = $("#drawer");
  const drawerOverlay = $("#drawerOverlay");
  function closeDrawer() {
    drawer.classList.remove("open");
    drawerOverlay.classList.remove("open");
  }
  $("#menuBtn").addEventListener("click", () => {
    drawer.classList.add("open");
    drawerOverlay.classList.add("open");
  });
  $("#drawerClose").addEventListener("click", closeDrawer);
  drawerOverlay.addEventListener("click", closeDrawer);

  // ---------- Scroll to top ----------
  $("#toTop").addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // ---------- Instagram modal (once per session) ----------
  const igOverlay = $("#igOverlay");
  const hideIG = () => igOverlay.classList.remove("open");
  $("#igSkip").addEventListener("click", hideIG);
  $("#igFollow").addEventListener("click", hideIG);
  igOverlay.addEventListener("click", (e) => { if (e.target === igOverlay) hideIG(); });
  try {
    if (!sessionStorage.getItem("ig_shown")) {
      setTimeout(() => { igOverlay.classList.add("open"); sessionStorage.setItem("ig_shown", "1"); }, 2500);
    }
  } catch (_) {
    setTimeout(() => igOverlay.classList.add("open"), 2500);
  }

  // ---------- Init ----------
  buildLangMenu();
  applyLangChrome();
  render();
  // re-measure after fonts load (avoids sticky offset drift)
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureSticky);
  window.addEventListener("load", measureSticky);
})();
