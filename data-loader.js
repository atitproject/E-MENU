// ============================================================
//  Public menu data loader
//  Pulls live data from Supabase; if the DB is empty or offline,
//  the static data from menu-data.js is used as a fallback.
// ============================================================

(function () {
  "use strict";

  function boot() {
    if (window.bootMenu) window.bootMenu();
  }

  // No SDK/config? just render the static fallback.
  if (typeof supabase === "undefined" || typeof SUPABASE_URL === "undefined") {
    boot();
    return;
  }

  const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  (async function () {
    try {
      const [settingsRes, groupsRes, catsRes, itemsRes] = await Promise.all([
        sb.from("settings").select("*").eq("id", 1).maybeSingle(),
        sb.from("groups").select("*").order("sort", { ascending: true }),
        sb.from("categories").select("*").order("sort", { ascending: true }),
        sb.from("items").select("*").order("sort", { ascending: true }),
      ]);

      const cats = catsRes.data || [];
      const items = itemsRes.data || [];
      const groups = groupsRes.data || [];
      const settings = settingsRes.data;

      // Only switch to DB data if there is at least one category.
      if (cats.length) {
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
          groups.map((g) => ({ id: g.id, label: { ar: g.name_ar, en: g.name_en, he: g.name_he } }))
        );

        CATEGORY_GROUP = {};
        cats.forEach((c) => { CATEGORY_GROUP[c.id] = c.group_id || null; });

        const byCat = {};
        items.forEach((it) => { (byCat[it.category_id] = byCat[it.category_id] || []).push(it); });

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
      }
    } catch (e) {
      console.warn("Supabase load failed — using static menu.", e);
    }
    boot();
  })();
})();
