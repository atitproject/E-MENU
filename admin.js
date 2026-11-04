// ============================================================
//  لوحة التحكم — Admin dashboard logic (Supabase)
// ============================================================
(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const NIL = "00000000-0000-0000-0000-000000000000";
  let CACHE = { groups: [], categories: [], items: [] };

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2200);
  }
  const esc = (s) => (s == null ? "" : String(s)).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- Auth ----------
  async function refreshAuth() {
    const { data } = await sb.auth.getSession();
    if (data.session) showDash(); else showLogin();
  }
  function showLogin() { $("#loginView").classList.remove("hidden"); $("#dashView").classList.add("hidden"); }
  function showDash() { $("#loginView").classList.add("hidden"); $("#dashView").classList.remove("hidden"); loadAll(); }

  $("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    $("#loginErr").textContent = "";
    $("#loginBtn").disabled = true;
    const { error } = await sb.auth.signInWithPassword({ email: $("#email").value.trim(), password: $("#password").value });
    $("#loginBtn").disabled = false;
    if (error) { $("#loginErr").textContent = "بيانات الدخول غير صحيحة"; return; }
    showDash();
  });
  $("#logoutBtn").addEventListener("click", async () => { await sb.auth.signOut(); showLogin(); });

  // ---------- Tabs ----------
  document.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((x) => x.classList.toggle("active", x === t));
    document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.id === "panel-" + t.dataset.tab));
  }));

  // ---------- Load all ----------
  async function loadAll() {
    const [g, c, i, s] = await Promise.all([
      sb.from("groups").select("*").order("sort"),
      sb.from("categories").select("*").order("sort"),
      sb.from("items").select("*").order("sort"),
      sb.from("settings").select("*").eq("id", 1).maybeSingle(),
    ]);
    CACHE.groups = g.data || [];
    CACHE.categories = c.data || [];
    CACHE.items = i.data || [];
    renderGroups(); renderCats(); renderItems(); fillSettings(s.data); fillSelects();
  }

  const groupName = (id) => { const g = CACHE.groups.find((x) => x.id === id); return g ? g.name_ar : "—"; };
  const catName = (id) => { const c = CACHE.categories.find((x) => x.id === id); return c ? c.name_ar : "—"; };

  function fillSelects() {
    const f = $("#itemCatFilter");
    const cur = f.value;
    f.innerHTML = '<option value="">كل الأقسام</option>' + CACHE.categories.map((c) => `<option value="${c.id}">${esc(c.name_ar)}</option>`).join("");
    f.value = cur;
  }
  $("#itemCatFilter").addEventListener("change", renderItems);

  // ---------- Render lists ----------
  function renderGroups() {
    const el = $("#groupsList");
    if (!CACHE.groups.length) { el.innerHTML = '<div class="muted">لا مجموعات بعد</div>'; return; }
    el.innerHTML = CACHE.groups.map((g) => `
      <div class="row">
        <div class="info"><div class="t">${esc(g.name_ar)}</div><div class="s">${esc(g.name_en || "")} · ${esc(g.slug || "")}</div></div>
        <div class="acts">
          <button class="btn btn-sm btn-ghost" data-edit-group="${g.id}">تعديل</button>
          <button class="btn btn-sm btn-danger" data-del-group="${g.id}">حذف</button>
        </div>
      </div>`).join("");
  }
  function renderCats() {
    const el = $("#catsList");
    if (!CACHE.categories.length) { el.innerHTML = '<div class="muted">لا أقسام بعد</div>'; return; }
    el.innerHTML = CACHE.categories.map((c) => `
      <div class="row">
        <div class="info"><div class="t">${esc(c.name_ar)}</div><div class="s">المجموعة: ${esc(groupName(c.group_id))}</div></div>
        <div class="acts">
          <button class="btn btn-sm btn-ghost" data-edit-cat="${c.id}">تعديل</button>
          <button class="btn btn-sm btn-danger" data-del-cat="${c.id}">حذف</button>
        </div>
      </div>`).join("");
  }
  function renderItems() {
    const el = $("#itemsList");
    const filt = $("#itemCatFilter").value;
    let items = CACHE.items;
    if (filt) items = items.filter((i) => i.category_id === filt);
    if (!items.length) { el.innerHTML = '<div class="muted">لا أصناف</div>'; return; }
    el.innerHTML = items.map((i) => `
      <div class="row">
        <img src="${esc(i.image_url || "../no-img.jpg")}" alt="" onerror="this.src='../no-img.jpg'"/>
        <div class="info">
          <div class="t">${esc(i.name_ar)} ${i.sold_out ? '<span class="badge">نفذت</span>' : ""}</div>
          <div class="s">${esc(catName(i.category_id))} · ${esc(i.price)} </div>
        </div>
        <div class="acts">
          <button class="btn btn-sm btn-ghost" data-edit-item="${i.id}">تعديل</button>
          <button class="btn btn-sm btn-danger" data-del-item="${i.id}">حذف</button>
        </div>
      </div>`).join("");
  }

  // delegated clicks
  document.addEventListener("click", async (e) => {
    const t = e.target;
    if (t.dataset.editGroup) openGroup(CACHE.groups.find((x) => x.id === t.dataset.editGroup));
    else if (t.dataset.delGroup) delRow("groups", t.dataset.delGroup, "حذف المجموعة؟");
    else if (t.dataset.editCat) openCat(CACHE.categories.find((x) => x.id === t.dataset.editCat));
    else if (t.dataset.delCat) delRow("categories", t.dataset.delCat, "حذف القسم وكل أصنافه؟");
    else if (t.dataset.editItem) openItem(CACHE.items.find((x) => x.id === t.dataset.editItem));
    else if (t.dataset.delItem) delRow("items", t.dataset.delItem, "حذف الصنف؟");
  });

  async function delRow(table, id, msg) {
    if (!confirm(msg)) return;
    const { error } = await sb.from(table).delete().eq("id", id);
    if (error) { toast("خطأ: " + error.message); return; }
    toast("تم الحذف"); loadAll();
  }

  $("#addGroup").addEventListener("click", () => openGroup(null));
  $("#addCat").addEventListener("click", () => openCat(null));
  $("#addItem").addEventListener("click", () => openItem(null));

  // ---------- Modal plumbing ----------
  const modal = $("#modal");
  let saveHandler = null;
  function openModal(title, bodyHtml, onSave) {
    $("#modalTitle").textContent = title;
    $("#modalBody").innerHTML = bodyHtml;
    $("#modalErr").textContent = "";
    saveHandler = onSave;
    modal.classList.add("open");
  }
  function closeModal() { modal.classList.remove("open"); saveHandler = null; }
  $("#modalCancel").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  $("#modalSave").addEventListener("click", async () => {
    if (!saveHandler) return;
    $("#modalSave").disabled = true;
    try { await saveHandler(); closeModal(); loadAll(); toast("تم الحفظ"); }
    catch (err) { $("#modalErr").textContent = err.message || "خطأ"; }
    $("#modalSave").disabled = false;
  });
  const val = (id) => $("#" + id).value.trim();

  // ---------- Group form ----------
  function openGroup(rec) {
    rec = rec || {};
    openModal(rec.id ? "تعديل مجموعة" : "مجموعة جديدة", `
      <label>المعرّف (slug)</label><input id="f_slug" value="${esc(rec.slug || "")}" placeholder="food / drinks ..."/>
      <div class="grid2"><div><label>الاسم (ع)</label><input id="f_ar" value="${esc(rec.name_ar || "")}"/></div><div><label>EN</label><input id="f_en" value="${esc(rec.name_en || "")}"/></div></div>
      <label>HE</label><input id="f_he" value="${esc(rec.name_he || "")}"/>
      <label>الترتيب</label><input id="f_sort" type="number" value="${rec.sort != null ? rec.sort : CACHE.groups.length}"/>
    `, async () => {
      const payload = { slug: val("f_slug"), name_ar: val("f_ar"), name_en: val("f_en"), name_he: val("f_he"), sort: Number(val("f_sort")) || 0 };
      if (!payload.slug) throw new Error("المعرّف مطلوب");
      const q = rec.id ? sb.from("groups").update(payload).eq("id", rec.id) : sb.from("groups").insert(payload);
      const { error } = await q; if (error) throw error;
    });
  }

  // ---------- Category form ----------
  function openCat(rec) {
    rec = rec || {};
    const opts = '<option value="">— لا مجموعة (يظهر في الكل فقط) —</option>' +
      CACHE.groups.map((g) => `<option value="${g.id}" ${rec.group_id === g.id ? "selected" : ""}>${esc(g.name_ar)}</option>`).join("");
    openModal(rec.id ? "تعديل قسم" : "قسم جديد", `
      <div class="grid2"><div><label>الاسم (ع)</label><input id="f_ar" value="${esc(rec.name_ar || "")}"/></div><div><label>EN</label><input id="f_en" value="${esc(rec.name_en || "")}"/></div></div>
      <label>HE</label><input id="f_he" value="${esc(rec.name_he || "")}"/>
      <label>المجموعة</label><select id="f_group">${opts}</select>
      <label>الترتيب</label><input id="f_sort" type="number" value="${rec.sort != null ? rec.sort : CACHE.categories.length}"/>
    `, async () => {
      const payload = { name_ar: val("f_ar"), name_en: val("f_en"), name_he: val("f_he"), group_id: $("#f_group").value || null, sort: Number(val("f_sort")) || 0 };
      if (!payload.name_ar) throw new Error("الاسم العربي مطلوب");
      const q = rec.id ? sb.from("categories").update(payload).eq("id", rec.id) : sb.from("categories").insert(payload);
      const { error } = await q; if (error) throw error;
    });
  }

  // ---------- Item form ----------
  function openItem(rec) {
    rec = rec || {};
    const opts = CACHE.categories.map((c) => `<option value="${c.id}" ${rec.category_id === c.id ? "selected" : ""}>${esc(c.name_ar)}</option>`).join("");
    openModal(rec.id ? "تعديل صنف" : "صنف جديد", `
      <label>القسم</label><select id="f_cat">${opts}</select>
      <div class="grid2"><div><label>الاسم (ع)</label><input id="f_ar" value="${esc(rec.name_ar || "")}"/></div><div><label>EN</label><input id="f_en" value="${esc(rec.name_en || "")}"/></div></div>
      <label>HE</label><input id="f_he" value="${esc(rec.name_he || "")}"/>
      <label>الوصف (ع)</label><textarea id="f_dar" rows="2">${esc(rec.desc_ar || "")}</textarea>
      <div class="grid2"><div><label>Desc EN</label><textarea id="f_den" rows="2">${esc(rec.desc_en || "")}</textarea></div><div><label>Desc HE</label><textarea id="f_dhe" rows="2">${esc(rec.desc_he || "")}</textarea></div></div>
      <label>السعر</label><input id="f_price" type="number" step="0.01" value="${rec.price != null ? rec.price : ""}"/>
      <label>الصورة</label>
      <img class="thumb-prev" id="f_prev" src="${esc(rec.image_url || "../no-img.jpg")}" onerror="this.src='../no-img.jpg'"/>
      <input type="file" id="f_file" accept="image/*"/>
      <div class="chk"><input type="checkbox" id="f_sold" ${rec.sold_out ? "checked" : ""}/><label style="margin:0">نفذت الكمية</label></div>
      <label>الترتيب</label><input id="f_sort" type="number" value="${rec.sort != null ? rec.sort : 0}"/>
    `, async () => {
      let imageUrl = rec.image_url || null;
      const file = $("#f_file").files[0];
      if (file) imageUrl = await uploadImage(file);
      const payload = {
        category_id: $("#f_cat").value || null,
        name_ar: val("f_ar"), name_en: val("f_en"), name_he: val("f_he"),
        desc_ar: val("f_dar"), desc_en: val("f_den"), desc_he: val("f_dhe"),
        price: val("f_price") === "" ? null : Number(val("f_price")),
        image_url: imageUrl,
        sold_out: $("#f_sold").checked,
        sort: Number(val("f_sort")) || 0,
      };
      if (!payload.category_id) throw new Error("اختر القسم");
      if (!payload.name_ar) throw new Error("الاسم العربي مطلوب");
      const q = rec.id ? sb.from("items").update(payload).eq("id", rec.id) : sb.from("items").insert(payload);
      const { error } = await q; if (error) throw error;
    });
    // live preview
    const fileInput = $("#f_file");
    if (fileInput) fileInput.addEventListener("change", () => {
      const f = fileInput.files[0]; if (f) $("#f_prev").src = URL.createObjectURL(f);
    });
  }

  async function uploadImage(file) {
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
    const path = Date.now() + "-" + Math.random().toString(36).slice(2) + "." + ext;
    const { error } = await sb.storage.from("menu-images").upload(path, file, { cacheControl: "3600", upsert: false });
    if (error) throw new Error("فشل رفع الصورة: " + error.message);
    const { data } = sb.storage.from("menu-images").getPublicUrl(path);
    return data.publicUrl;
  }

  // ---------- Settings ----------
  function fillSettings(s) {
    s = s || {};
    $("#set_name_ar").value = s.name_ar || ""; $("#set_name_en").value = s.name_en || ""; $("#set_name_he").value = s.name_he || "";
    $("#set_tag_ar").value = s.tagline_ar || ""; $("#set_tag_en").value = s.tagline_en || ""; $("#set_tag_he").value = s.tagline_he || "";
    $("#set_phone").value = s.phone || ""; $("#set_maps").value = s.maps_url || "";
    $("#set_fb").value = s.facebook_url || ""; $("#set_ig").value = s.instagram_url || ""; $("#set_tt").value = s.tiktok_url || "";
    $("#set_currency").value = s.currency || "₪";
  }
  $("#settingsForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    $("#saveSettings").disabled = true;
    const payload = {
      id: 1,
      name_ar: val("set_name_ar"), name_en: val("set_name_en"), name_he: val("set_name_he"),
      tagline_ar: val("set_tag_ar"), tagline_en: val("set_tag_en"), tagline_he: val("set_tag_he"),
      phone: val("set_phone"), maps_url: val("set_maps"),
      facebook_url: val("set_fb"), instagram_url: val("set_ig"), tiktok_url: val("set_tt"),
      currency: val("set_currency") || "₪", updated_at: new Date().toISOString(),
    };
    const { error } = await sb.from("settings").upsert(payload);
    $("#saveSettings").disabled = false;
    toast(error ? "خطأ: " + error.message : "تم حفظ الإعدادات");
  });

  // ---------- Go ----------
  refreshAuth();
})();
