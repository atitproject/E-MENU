// ============================================================
//  Public menu data loader
//  Renders INSTANTLY from a cached snapshot (or the static
//  fallback in menu-data.js), then quietly refreshes from
//  Supabase once the live data arrives — so the menu never
//  shows a blank page while waiting for the database.
// ============================================================

(function () {
  "use strict";

  var CACHE_KEY = "lb_menu_cache_v1";

  function boot() {
    if (window.bootMenu) window.bootMenu();
  }

  // Map raw Supabase rows into the global structures the UI reads.
  // Returns true only when there is real data (at least one category).
  function applyData(settings, groups, cats, items) {
    if (!cats || !cats.length) return false;

    if (settings) {
      if (settings.name_ar) LANGS.ar.brand = settings.name_ar;
      if (settings.name_en) LANGS.en.brand = settings.name_en;
      if (settings.name_he) LANGS.he.brand = settings.name_he;
      if (settings.tagline_ar) { UI.ar.tagline = "✦ " + settings.tagline_ar + " ✦"; UI.ar.subtitle = settings.tagline_ar; }
      if (settings.tagline_en) { UI.en.tagline = "✦ " + settings.tagline_en + " ✦"; UI.en.subtitle = settings.tagline_en; }
      if (settings.tagline_he) { UI.he.tagline = "✦ " + settings.tagline_he + " ✦"; UI.he.subtitle = settings.tagline_he; }
      RESTAURANT = {
        phone: settings.phone || "",
        mapsUrl: settings.maps_url || "#",
        instagram: "",
        instagramUrl: settings.instagram_url || "#",
        facebookUrl: settings.facebook_url || "#",
        tiktokUrl: settings.tiktok_url || "#",
        currency: settings.currency || "₪",
      };
    }

    GROUPS = [{ id: "all", label: { ar: "الكل", en: "All", he: "הכל" } }].concat(
      (groups || []).map((g) => ({ id: g.id, label: { ar: g.name_ar, en: g.name_en, he: g.name_he } }))
    );

    CATEGORY_GROUP = {};
    cats.forEach((c) => { CATEGORY_GROUP[c.id] = c.group_id || null; });

    const byCat = {};
    (items || []).forEach((it) => { (byCat[it.category_id] = byCat[it.category_id] || []).push(it); });

    MENU = cats.map((c) => ({
      id: c.id,
      name: { ar: c.name_ar, en: c.name_en, he: c.name_he },
      items: (byCat[c.id] || []).map((it) => ({
        name: { ar: it.name_ar, en: it.name_en, he: it.name_he },
        desc: { ar: it.desc_ar || "", en: it.desc_en || "", he: it.desc_he || "" },
        price: it.price,
        img: it.image_url || NO_IMG,
        soldOut: !!it.sold_out,
      })),
    }));

    return true;
  }

  // 1) INSTANT PAINT — use the last cached snapshot if we have one, so
  //    returning visitors see the real (last-known) menu immediately.
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
    if (cached) applyData(cached.settings, cached.groups, cached.cats, cached.items);
  } catch (_) {}

  boot(); // renders now — from cache, else the static fallback in menu-data.js

  // No SDK / config available? The instant render is all we can do.
  if (typeof supabase === "undefined" || typeof SUPABASE_URL === "undefined") return;

  const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  // 2) FETCH LIVE DATA in the background, then quietly refresh the view.
  (async function () {
    try {
      const [settingsRes, groupsRes, catsRes, itemsRes] = await Promise.all([
        sb.from("settings").select("*").eq("id", 1).maybeSingle(),
        sb.from("groups").select("*").order("sort", { ascending: true }),
        sb.from("categories").select("*").order("sort", { ascending: true }),
        sb.from("items").select("*").order("sort", { ascending: true }),
      ]);

      const settings = settingsRes.data;
      const groups = groupsRes.data || [];
      const cats = catsRes.data || [];
      const items = itemsRes.data || [];

      if (applyData(settings, groups, cats, items)) {
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ settings, groups, cats, items }));
        } catch (_) {}
        if (window.refreshMenu) window.refreshMenu();
      }
    } catch (e) {
      console.warn("Supabase load failed — using cached/static menu.", e);
    }
  })();
})();
