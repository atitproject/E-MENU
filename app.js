// ============================================================
//  ليالي بسمة — Laialy Basma  |  Menu rendering & interactions
// ============================================================

(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  };

  // ---- Fill brand text ----
  $("#tagline").textContent = RESTAURANT.tagline;
  $("#brandName").textContent = RESTAURANT.nameAr;
  $("#year").textContent = new Date().getFullYear();
  $("#igHandle").textContent = "@" + RESTAURANT.instagram;
  $("#igFollow").href = RESTAURANT.instagramUrl;
  const igFooter = $("#igFooter");
  igFooter.textContent = "@" + RESTAURANT.instagram;
  igFooter.href = RESTAURANT.instagramUrl;

  // ---- Build category rail + drawer ----
  const catRail = $("#catRail");
  const drawerList = $("#drawerList");
  const menuRoot = $("#menuRoot");

  MENU.forEach((cat, i) => {
    // pill
    const pill = el("button", "cat-pill" + (i === 0 ? " active" : ""));
    pill.textContent = cat.name;
    pill.dataset.target = cat.id;
    pill.addEventListener("click", () => scrollToSection(cat.id));
    catRail.appendChild(pill);

    // drawer item
    const d = el("button");
    d.innerHTML = `<span>${cat.name}</span><span class="count">${cat.items.length}</span>`;
    d.addEventListener("click", () => {
      scrollToSection(cat.id);
      closeDrawer();
    });
    drawerList.appendChild(d);

    // section
    const section = el("section");
    section.id = "sec-" + cat.id;

    const head = el("div", "section-head");
    head.innerHTML =
      `<div class="section-bar"></div>` +
      `<h2>${cat.name}</h2>` +
      `<span class="section-count">(${cat.items.length})</span>`;
    section.appendChild(head);

    const cards = el("div", "cards");
    cat.items.forEach((item) => cards.appendChild(renderItem(item)));
    section.appendChild(cards);

    menuRoot.appendChild(section);
  });

  function renderItem(item) {
    const row = el("div", "item");

    const imgWrap = el("div", "item-img");
    const im = el("img");
    im.src = item.img;
    im.alt = item.name;
    im.loading = "lazy";
    im.decoding = "async";
    im.addEventListener("error", () => {
      im.style.display = "none";
    });
    imgWrap.appendChild(im);
    if (item.soldOut) {
      const b = el("span", "sold-badge");
      b.textContent = "نفذت الكمية";
      imgWrap.appendChild(b);
    }

    const body = el("div", "item-body");
    const top = el("div");
    const h = el("h3");
    h.textContent = item.name;
    top.appendChild(h);
    if (item.desc) {
      const p = el("p", "desc");
      p.textContent = item.desc;
      top.appendChild(p);
    }
    body.appendChild(top);

    const price = el("div", "price");
    price.innerHTML =
      `<span class="amount">${item.price}</span>` +
      `<span class="cur">${RESTAURANT.currency}</span>`;
    body.appendChild(price);

    row.appendChild(imgWrap);
    row.appendChild(body);
    return row;
  }

  // ---- Scroll to section ----
  function scrollToSection(id) {
    const sec = document.getElementById("sec-" + id);
    if (!sec) return;
    const head = sec.querySelector(".section-head");
    (head || sec).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---- Scroll-spy: highlight active pill ----
  const pills = Array.from(catRail.querySelectorAll(".cat-pill"));
  const sections = MENU.map((c) => document.getElementById("sec-" + c.id));

  const spy = () => {
    const y = window.scrollY + 160;
    let activeId = MENU[0].id;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].offsetTop <= y) activeId = MENU[i].id;
    }
    pills.forEach((p) => {
      const on = p.dataset.target === activeId;
      p.classList.toggle("active", on);
      if (on) {
        p.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });
  };
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        spy();
        toggleToTop();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ---- Language dropdown ----
  const langBtn = $("#langBtn");
  const langMenu = $("#langMenu");
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("open");
  });
  document.addEventListener("click", () => langMenu.classList.remove("open"));

  // ---- Drawer ----
  const drawer = $("#drawer");
  const drawerOverlay = $("#drawerOverlay");
  function openDrawer() {
    drawer.classList.add("open");
    drawerOverlay.classList.add("open");
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    drawerOverlay.classList.remove("open");
  }
  $("#menuBtn").addEventListener("click", openDrawer);
  $("#drawerClose").addEventListener("click", closeDrawer);
  drawerOverlay.addEventListener("click", closeDrawer);

  // ---- Scroll to top button ----
  const toTop = $("#toTop");
  function toggleToTop() {
    toTop.classList.toggle("show", window.scrollY > 500);
  }
  toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // ---- Instagram modal (once per session) ----
  const igOverlay = $("#igOverlay");
  const showIG = () => igOverlay.classList.add("open");
  const hideIG = () => igOverlay.classList.remove("open");
  $("#igSkip").addEventListener("click", hideIG);
  $("#igFollow").addEventListener("click", hideIG);
  igOverlay.addEventListener("click", (e) => {
    if (e.target === igOverlay) hideIG();
  });

  try {
    if (!sessionStorage.getItem("ig_shown")) {
      setTimeout(() => {
        showIG();
        sessionStorage.setItem("ig_shown", "1");
      }, 2500);
    }
  } catch (_) {
    setTimeout(showIG, 2500);
  }

  // initial spy
  spy();
})();
