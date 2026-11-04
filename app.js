// ============================================================
//  منيو مطعم — Restaurant Menu  |  Menu rendering & interactions
//  Trilingual (ar / en / he) + groups + search + smooth scroll-spy
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
  let group = "all";
  try {
    const saved = localStorage.getItem("lb_lang");
    if (saved && LANGS[saved]) lang = saved;
  } catch (_) {}

  const htmlEl = document.documentElement;
  const catRail = $("#catRail");
  const groupTabs = $("#groupTabs");
  const menuRoot = $("#menuRoot");
  const searchInput = $("#searchInput");
  const noResults = $("#noResults");

  let pills = [];
  let sections = [];
  let itemEls = []; // itemEls[catIndex] = [row elements]
  let activeId = null;

  // ---------- Language dropdown ----------
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

  // ---------- Group tabs ----------
  function buildGroupTabs() {
    groupTabs.innerHTML = "";
    GROUPS.forEach((g) => {
      const b = el("button", "group-tab" + (g.id === group ? " active" : ""));
      b.textContent = g.label[lang] || g.label.ar;
      b.dataset.group = g.id;
      b.addEventListener("click", () => {
        if (group === g.id) return;
        group = g.id;
        groupTabs.querySelectorAll(".group-tab").forEach((x) =>
          x.classList.toggle("active", x.dataset.group === group)
        );
        applyFilter();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      groupTabs.appendChild(b);
    });
  }

  // ---------- Render menu in current language ----------
  function render() {
    catRail.innerHTML = "";
    menuRoot.innerHTML = "";
    itemEls = [];

    MENU.forEach((cat, i) => {
      const catName = cat.name[lang] || cat.name.ar;

      const pill = el("button", "cat-pill" + (i === 0 ? " active" : ""));
      pill.textContent = catName;
      pill.dataset.target = cat.id;
      pill.addEventListener("click", () => scrollToSection(cat.id));
      catRail.appendChild(pill);

      const section = el("section");
      section.id = "sec-" + cat.id;

      const head = el("div", "section-head");
      const bar = el("div", "section-bar");
      const h2 = el("h2");
      h2.textContent = catName;
      const count = el("span", "section-count");
      count.textContent = "(" + cat.items.length + ")";
      head.appendChild(bar); head.appendChild(h2); head.appendChild(count);
      section.appendChild(head);

      const cards = el("div", "cards");
      const rows = [];
      cat.items.forEach((item) => {
        const row = renderItem(item);
        rows.push(row);
        cards.appendChild(row);
      });
      itemEls.push(rows);
      section.appendChild(cards);
      menuRoot.appendChild(section);
    });

    pills = Array.from(catRail.querySelectorAll(".cat-pill"));
    sections = MENU.map((c) => document.getElementById("sec-" + c.id));
    setupReveal();
    measureSticky();
    applyFilter();
  }

  // ---------- Scroll reveal for item cards ----------
  let revealObserver = null;
  function revealAll() {
    document.querySelectorAll(".item").forEach((it) => it.classList.add("in"));
  }
  function setupReveal() {
    // IntersectionObserver is unreliable in a hidden/background tab — just show everything
    if (!("IntersectionObserver" in window) || document.visibilityState === "hidden") {
      revealAll();
      return;
    }
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          revealObserver.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    document.querySelectorAll(".item").forEach((it) => revealObserver.observe(it));
  }

  function renderItem(item) {
    const t = UI[lang];
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
    price.appendChild(amount); price.appendChild(cur);
    body.appendChild(price);

    row.appendChild(imgWrap);
    row.appendChild(body);
    row.addEventListener("click", () => openItem(item));
    return row;
  }

  // ---------- Item detail bottom-sheet ----------
  const itemModal = $("#itemModal");
  function openItem(item) {
    const t = UI[lang];
    $("#itemImg").src = item.img;
    $("#itemImg").alt = item.name[lang] || item.name.ar;
    $("#itemName").textContent = item.name[lang] || item.name.ar;
    $("#itemDesc").textContent = (item.desc && (item.desc[lang] || "")) || "";
    $("#priceLbl").textContent = t.priceLabel;
    $("#itemPrice").textContent = item.price;
    const avail = $("#itemAvail");
    if (item.soldOut) {
      avail.textContent = t.soldOut;
      avail.classList.add("sold");
    } else {
      avail.textContent = t.available;
      avail.classList.remove("sold");
    }
    itemModal.classList.add("open");
  }
  function closeItem() {
    itemModal.classList.remove("open");
    itemModal.querySelector(".sheet").scrollTop = 0;
  }
  $("#itemClose").addEventListener("click", closeItem);
  itemModal.addEventListener("click", (e) => { if (e.target === itemModal) closeItem(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeItem(); });

  // ---------- Filtering (group + search) ----------
  function applyFilter() {
    const q = (searchInput.value || "").trim().toLowerCase();
    let anyVisible = false;

    MENU.forEach((cat, i) => {
      const groupOk = group === "all" || CATEGORY_GROUP[cat.id] === group;
      let vis = 0;
      cat.items.forEach((item, idx) => {
        let match = true;
        if (q) {
          const names = [item.name.ar, item.name.en, item.name.he].join(" ").toLowerCase();
          const descs = item.desc ? [item.desc.ar, item.desc.en, item.desc.he].join(" ").toLowerCase() : "";
          match = names.indexOf(q) !== -1 || descs.indexOf(q) !== -1;
        }
        const show = groupOk && match;
        itemEls[i][idx].style.display = show ? "" : "none";
        if (show) vis++;
      });
      const secShow = groupOk && vis > 0;
      sections[i].style.display = secShow ? "" : "none";
      pills[i].style.display = secShow ? "" : "none";
      if (secShow) anyVisible = true;
    });

    noResults.hidden = anyVisible;
    if (!anyVisible) noResults.textContent = NO_RESULTS[lang];

    activeId = null;
    spy(true);
  }

  // ---------- Language chrome ----------
  function setLang(code) {
    lang = code;
    try { localStorage.setItem("lb_lang", code); } catch (_) {}
    applyLangChrome();
    buildLangMenu();
    buildGroupTabs();
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
    searchInput.placeholder = SEARCH_PH[lang];

    $("#fFb").href = RESTAURANT.facebookUrl;
    $("#fIg").href = RESTAURANT.instagramUrl;
    $("#fTt").href = RESTAURANT.tiktokUrl;
    $("#fPhone").href = "tel:" + RESTAURANT.phone;
    $("#fPhoneNum").textContent = RESTAURANT.phone;

    $("#igHandle").textContent = RESTAURANT.instagram ? "@" + RESTAURANT.instagram : "";
    $("#igFollow").href = RESTAURANT.instagramUrl;
    $("#igFollow").textContent = t.follow;
    $("#igSkip").textContent = t.skip;
    $("#igTitle").textContent = t.igTitle;
    const chipEls = document.querySelectorAll("#igChips .chip");
    t.igChips.forEach((c, i) => { if (chipEls[i]) chipEls[i].textContent = c; });

    // restaurant info popup
    $("#infoName").textContent = L.brand;
    $("#infoSub").textContent = t.subtitle;
    $("#infoCallLbl").textContent = t.callUs;
    $("#infoLocLbl").textContent = t.location;
    $("#infoPhoneNum").textContent = RESTAURANT.phone;
    $("#infoPhone").href = "tel:" + RESTAURANT.phone;
    $("#infoLoc").href = RESTAURANT.mapsUrl;
    $("#infoFb").href = RESTAURANT.facebookUrl;
    $("#infoIg").href = RESTAURANT.instagramUrl;
    $("#infoTt").href = RESTAURANT.tiktokUrl;
    $("#infoClose").textContent = t.close;

    // rate us
    $("#rateFabLbl").textContent = t.rateUs;
    $("#rateTitle").textContent = t.rateUs;
    $("#rateSub").textContent = t.rateSub;
    $("#rateComment").placeholder = t.commentPH;
    $("#rateSubmit").textContent = t.submitRating;
    $("#rateClose").textContent = t.close;

    $("#toTop").setAttribute("aria-label", t.toTop);
  }

  // ---------- Sticky offset ----------
  function measureSticky() {
    const header = $(".site-header");
    const rail = $(".cat-rail-outer");
    htmlEl.style.setProperty("--header-h", (header ? header.offsetHeight : 72) + "px");
    htmlEl.style.setProperty("--rail-h", (rail ? rail.offsetHeight : 56) + "px");
  }

  function scrollToSection(id) {
    const sec = document.getElementById("sec-" + id);
    if (!sec) return;
    const hh = parseInt(getComputedStyle(htmlEl).getPropertyValue("--header-h")) || 72;
    const rh = parseInt(getComputedStyle(htmlEl).getPropertyValue("--rail-h")) || 56;
    const y = sec.getBoundingClientRect().top + window.pageYOffset - (hh + rh + 6);
    window.scrollTo({ top: y < 0 ? 0 : y, behavior: "smooth" });
  }

  // ---------- Scroll-spy ----------
  function currentStick() {
    const hh = parseInt(getComputedStyle(htmlEl).getPropertyValue("--header-h")) || 72;
    const rh = parseInt(getComputedStyle(htmlEl).getPropertyValue("--rail-h")) || 56;
    return hh + rh + 10;
  }

  function spy(force) {
    if (!sections.length) return;
    const stick = currentStick();
    let newActive = null;
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      if (!s || s.style.display === "none") continue;
      if (newActive === null) newActive = MENU[i].id;
      if (s.getBoundingClientRect().top <= stick) newActive = MENU[i].id;
    }
    if (newActive === null) return;
    if (newActive === activeId && !force) return;
    activeId = newActive;

    for (let i = 0; i < pills.length; i++) {
      const on = pills[i].dataset.target === activeId;
      if (on) {
        pills[i].classList.add("active");
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
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => { spy(false); toggleToTop(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  window.addEventListener("resize", measureSticky);

  // ---------- Search ----------
  searchInput.addEventListener("input", applyFilter);

  // ---------- Language dropdown toggle ----------
  $("#langBtn").addEventListener("click", (e) => { e.stopPropagation(); langMenu.classList.toggle("open"); });
  document.addEventListener("click", () => langMenu.classList.remove("open"));

  // ---------- Restaurant info popup ----------
  const infoModal = $("#infoModal");
  const closeInfo = () => infoModal.classList.remove("open");
  $("#menuBtn").addEventListener("click", () => infoModal.classList.add("open"));
  $("#infoClose").addEventListener("click", closeInfo);
  infoModal.addEventListener("click", (e) => { if (e.target === infoModal) closeInfo(); });

  // ---------- Rate us ----------
  const rateModal = $("#rateModal");
  const rateStars = $("#rateStars");
  const rateSubmit = $("#rateSubmit");
  let rating = 0;
  function paintStars() {
    rateStars.querySelectorAll("button").forEach((b) =>
      b.classList.toggle("on", Number(b.dataset.v) <= rating)
    );
    rateSubmit.disabled = rating === 0;
  }
  rateStars.querySelectorAll("button").forEach((b) =>
    b.addEventListener("click", () => { rating = Number(b.dataset.v); paintStars(); })
  );
  const closeRate = () => rateModal.classList.remove("open");
  $("#rateFab").addEventListener("click", () => rateModal.classList.add("open"));
  $("#rateClose").addEventListener("click", closeRate);
  rateModal.addEventListener("click", (e) => { if (e.target === rateModal) closeRate(); });
  rateSubmit.addEventListener("click", () => {
    if (rating === 0) return;
    try {
      localStorage.setItem("lb_rating", JSON.stringify({ rating: rating, comment: $("#rateComment").value, at: Date.now() }));
    } catch (_) {}
    rateSubmit.textContent = UI[lang].thanks;
    setTimeout(() => {
      closeRate();
      rating = 0; paintStars();
      $("#rateComment").value = "";
      rateSubmit.textContent = UI[lang].submitRating;
    }, 1300);
  });

  // ---------- Scroll to top ----------
  $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

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
  document.body.classList.add("reveal-ready");
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") setupReveal();
  });
  buildLangMenu();
  buildGroupTabs();
  applyLangChrome();
  render();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureSticky);
  window.addEventListener("load", measureSticky);
})();
