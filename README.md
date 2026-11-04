# ليالي بسمة — Laialy Basma | Digital Menu

منيو إلكتروني (Digital Menu) لمطعم ومقهى **ليالي بسمة**، بنفس تصميم وألوان الموقع الأصلي
[laialybasmamenu.com](https://laialybasmamenu.com/).

An electronic / QR menu for the **Laialy Basma** restaurant & café — Arabic (RTL), mobile-first,
built as a fast static site with no build step.

## المزايا / Features

- واجهة عربية (RTL) بخط Noto Sans Arabic + Inter
- الألوان الأصلية: أخضر داكن `#1a3a32` / `#234d42` وذهبي `#d4a574`
- شريط أقسام أفقي مع تمييز القسم الحالي أثناء التمرير (scroll-spy)
- قائمة جانبية (drawer) بكل الأقسام
- بطاقات أصناف بالصور والوصف والسعر (₪) وشارة "نفذت الكمية"
- نافذة متابعة إنستغرام
- زر العودة للأعلى
- بدون أي خطوة بناء — HTML/CSS/JS فقط

## التشغيل محليًا / Run locally

```bash
python -m http.server 8777
```

ثم افتح المتصفح على: `http://localhost:8777`

أو افتح `index.html` مباشرة في المتصفح.

## البنية / Structure

| الملف | الوصف |
|------|-------|
| `index.html` | هيكل الصفحة |
| `styles.css` | التنسيقات والألوان |
| `app.js` | توليد القائمة والتفاعلات |
| `menu-data.js` | بيانات الأصناف والأقسام والأسعار |

## تعديل القائمة / Editing the menu

كل الأصناف والأقسام والأسعار موجودة في [`menu-data.js`](menu-data.js).
لإضافة أو تعديل صنف غيّر الكائن المناسب داخل مصفوفة `MENU`.

الصور مستضافة على مساحة التخزين الأصلية (Cloudflare R2).
