// ===============================================================
//  بيانات منيو مطعم ومقهى ليالي بسمة  |  Laialy Basma — Menu Data
//  متعدد اللغات: العربية / English / עברית
// ===============================================================

const IMG_BASE = "https://pub-46e3f6d0418445008538f5ef3fde06fa.r2.dev/images/";
const img = (f) => IMG_BASE + f;

// name/desc: { ar, en, he }  |  price  |  img  |  soldOut
const MENU = [
  {
    id: "new",
    name: { ar: "جديد", en: "New", he: "חדש" },
    items: [
      { name: { ar: "رقبة خروف محشيه", en: "Stuffed Lamb Neck", he: "צוואר כבש ממולא" }, desc: { ar: "رقبة محشية أرز ولحم مفروم مع بهارات ومكسرات، تكفي شخصين، مع خضار مطهوة بمرق أحمر.", en: "Lamb neck stuffed with rice and minced meat, spices and nuts; serves two; with vegetables cooked in red broth.", he: "צוואר כבש ממולא אורז ובשר טחון, תבלינים ואגוזים; מספיק לשניים; עם ירקות מבושלים בציר אדום." }, price: 260, img: img("1770241366474-thumb-1770241366020-oaipfq.webp") },
      { name: { ar: "موزة خروف مطمورة", en: "Lamb Shank", he: "שוק טלה" }, desc: { ar: "تشمل طبق رز ولبن مطبوخ", en: "Includes a plate of cooked rice and yoghurt", he: "כולל צלחת אורז מבושל ויוגורט" }, price: 149, img: img("1792096115437-thumb-1792096114866-ry8p2g.webp") },
      { name: { ar: "قشطوطة", en: "Qashtota Cake", he: "עוגת קשטוטה" }, desc: { ar: "كعكة القشطوطة كعكة خفيفه مشربه بالحليب يمكنك طلبها بطعم الاوريو او الفراوله او الكندر او البلوبيري او السنكرز او الشوكلاته نكهات لذيذه", en: "A light cake soaked in milk. Order it in Oreo, strawberry, Kinder, blueberry, Snickers, or chocolate flavor. Delicious flavors.", he: "עוגה קלה ספוגה בחלב. ניתן להזמין בטעם אוראו, תות, קינדר, אוכמניות, סניקרס, או שוקולד. טעמים טעימים." }, price: 40, img: img("1793200015327-thumb-1793200014888-kcjm1.webp") },
      { name: { ar: "سوشي كريب", en: "Sushi Crepe", he: "קרפ סושי" }, desc: { ar: "كريب محشي ببسكويت الاوريو ومقطع على شكل السوشي", en: "Crepe stuffed with Oreo cookies and cut into sushi shape", he: "קרפ ממולא בעוגיות אוראו וחתוך לצורת סושי" }, price: 40, img: img("1792094378378-thumb-1792094377931-norhbb.webp") },
      { name: { ar: "صينية كفته بالفرن", en: "Oven Kofta Tray", he: "מגש קופטה לתנור" }, desc: { ar: "صينية كفته بالطحينية او بالبندوره تقدم ساخنه وتكفي لشخص واحد", en: "A tray of kofta with tahini or tomatoes, served hot and enough for one person", he: "מגש קופטה עם טחינה או עגבניות, מוגש חם ומספיק לאדם אחד" }, price: 69, img: img("1792103727418-thumb-1792103726983-3jkvl9.webp") },
      { name: { ar: "قص خروف محشي دوالي", en: "Stuffed Lamb with Grape Leaves", he: "נתח טלה ממולא בעלי גפן" }, desc: { ar: "تقدم مع رز ولبن وتكفي ل 4 اشخاص", en: "Served with rice and milk, enough for 4 people", he: "מוגש עם אורז וחלב, מספיק ל-4 אנשים" }, price: 440, img: img("1770242413476-apply-1770242413476.webp") },
    ],
  },
  {
    id: "offers",
    name: { ar: "العروض المتوفرة", en: "Available Offers", he: "הצעות זמינות" },
    items: [
      { name: { ar: "عرض ليالي بسمة", en: "Laialy Basma Offer", he: "הצעת ליאלי בסמה" }, desc: { ar: "تشمل: كيلو مشاوي مشكّل + بيتزا + إبريق ليمون + 10 أنواع سلطة مجانًا", en: "Includes: 1kg mixed grills + pizza + lemonade pitcher + 10 free salads", he: "כולל: קילו בשרים מעורבים על האש + פיצה + קנקן לימונדה + 10 סוגי סלט חינם" }, price: 350, img: img("1770905631746-thumb-1770905631255-4iema6.webp") },
      { name: { ar: "عرض بحري بسمه", en: "Basma Seafood Offer", he: "מבצע פירות ים בסמה" }, desc: { ar: "يحتوي على صدف وكلماري وشريمس مطبوخ وشريمس وكلماري مقلي وفليه سلمون و 10 انواع سلطات مشكل ونوعين سلطه فرش", en: "Contains seashells, calamari, cooked shrimp, fried shrimp and calamari, salmon fillet, 10 types of mixed salads, and two types of fresh salad.", he: "מכיל צדפים, קלמרי, שרימפס מבושל, שרימפס וקלמרי מטוגן, פילה סלמון, 10 סוגי סלטים מעורבים ושני סוגי סלט טרי." }, price: 380, img: img("1792095664449-thumb-1792095663662-jwwc5.webp") },
    ],
  },
  {
    id: "breakfast",
    name: { ar: "صباح بسمه", en: "Basma Morning", he: "בוקר בסמה" },
    items: [
      { name: { ar: "افطار ملوكي زوجي", en: "Royal Breakfast (For Two)", he: "ארוחת בוקר מלכותית לזוג" }, desc: { ar: "يُقدَّم على الطاولة: 12 نوع مقبلات، خبز فوكاشيا، منقوشة جبنة مشكلة، عجة حسب الاختيار، شكشوكة طماطم، جبنة مقلية؛ لكل شخص سلطة (أوراق خضراء أو عربية) ومشروب (ليمونادة، عصير برتقال، قهوة بالحليب، إسبرسو، شاي).", en: "Served to the table: 12 appetizers, focaccia, mixed-cheese manakish, omelet of choice, tomato shakshuka, fried cheese; per person a salad (greens or Arabic) and one drink (lemonade, orange juice, cafe au lait, espresso, tea).", he: "מוגש לשולחן: 12 סוגי מנות פתיחה, לחם פוקאצ'ה, מנקיש גבינות, חביתה לבחירה, שקשוקת עגבניות, גבינה מטוגנת; לכל סועד סלט (עלים ירוקים או ערבי) ומשקה לבחירה (לימונדה, מיץ תפוזים, קפה בחלב, אספרסו, תה)." }, price: 125, img: img("1770242206737-thumb-1770242206316-srdki.webp") },
      { name: { ar: "افطار فردي", en: "Royal Breakfast (Single)", he: "ארוחת בוקר מלכותית ליחיד" }, desc: { ar: "بيضتان حسب الاختيار (عيون، أومليت، مسلوق، عجة)، مع 7 أنواع مقبلات، سلطة صغيرة، خبز ساخن، سلطة (أوراق خضراء أو مقطعة)، ومشروب واحد (ليمونادة، عصير برتقال، قهوة بالحليب، إسبرسو، شاي).", en: "Two eggs your way (sunny side, omelet, boiled, or scrambled), 7 appetizers, a small salad, hot bread, a salad (greens or chopped), and one drink (lemonade, orange juice, cafe au lait, espresso, tea).", he: "שתי ביצים לבחירה (עין, אומלט, מבושל, חביתה), עם 7 סוגי מנות פתיחה, סלט קטן, לחם חם, סלט (עלים ירוקים או קצוץ) ומשקה אחד לבחירה (לימונדה, מיץ תפוזים, קפה בחלב, אספרסו, תה)." }, price: 68, img: img("1770242179765-thumb-1770242179409-mm5cjt.webp") },
      { name: { ar: "حمص باللحمه", en: "Hummus with Meat", he: "חומוס עם בשר" }, desc: { ar: "حمص مع لحم ضأن ولية بزيت الزيتون.", en: "Hummus with lamb and lamb tail fat, finished with olive oil.", he: "חומוס עם בשר כבש ושומן זנב כבש, בשמן זית." }, price: 54, img: img("1770239668969-thumb-1770239668538-4yabth.webp") },
      { name: { ar: "شكشوكه", en: "Shakshuka", he: "שקשוקה" }, desc: { ar: "طماطم مطبوخة بالثوم والفلفل مع بيضتين، تُقدَّم مع سلطة صغيرة، 4 أنواع مقبلات، وخبز ساخن.", en: "Tomatoes cooked with garlic and peppers, with two eggs; served with a small salad, 4 appetizers, and hot bread.", he: "עגבניות מבושלות עם שום ופלפלים ושתי ביצים, מוגש עם סלט קטן, 4 מנות פתיחה ולחם חם." }, price: 50, img: img("1770245731086-thumb-1770245730410-omnrom.webp") },
    ],
  },
  {
    id: "salads",
    name: { ar: "سلطات بسمه", en: "Basma Salads", he: "סלטים בסמה" },
    items: [
      { name: { ar: "سلطة صدر دجاج", en: "Chicken Breast Salad", he: "סלט חזה עוף" }, desc: { ar: "أوراق خضراء، بصل أحمر وأخضر، طماطم، براعم، وصدر دجاج مشوي بصلصة البيستو.", en: "Mixed greens with red and green onion, tomatoes, sprouts, and grilled chicken breast with pesto.", he: "עלים ירוקים עם בצל אדום וירוק, עגבניות, נבטים וחזה עוף צלוי ברוטב פסטו." }, price: 35, img: img("1770238829046-thumb-1770238828530-mabdg.webp") },
      { name: { ar: "سلطة فتوش", en: "Fattoush Salad", he: "סלט פטוש" }, desc: { ar: "طماطم، خيار، خس، بصل أحمر وأخضر، نعناع، خبز محمّص، دبس رمان، وجبن مفتت.", en: "Tomato, cucumber, lettuce, red and green onion, mint, toasted bread, pomegranate molasses, and crumbled cheese.", he: "עגבנייה, מלפפון, חסה, בצל אדום וירוק, נענע, לחם קלוי, רכז רימונים וגבינה מפוררת." }, price: 30, img: img("1770239507623-thumb-1770239507147-l4xn23.webp") },
      { name: { ar: "سلطة يونانيه", en: "Greek Salad", he: "סלט יווני" }, desc: { ar: "طماطم، بصل أحمر وأخضر، خيار، زيتون كالاماتا، فليفلة، كبّار، طماطم مجففة، جبنة فيتا، وزيت زيتون مع ليمون.", en: "Tomato, red and green onion, cucumber, Kalamata olives, pepper, capers, sun-dried tomatoes, feta, with olive oil and lemon.", he: "עגבנייה, בצל אדום וירוק, מלפפון, זיתי קלמטה, פלפל, צלפים, עגבניות מיובשות, גבינת פטה, עם שמן זית ולימון." }, price: 25, img: img("1770239456048-thumb-1770239455563-6pmwuh.webp") },
      { name: { ar: "سلطة تبولة", en: "Tabbouleh", he: "טאבולה" }, desc: { ar: "بقدونس، برغل، بصل أخضر، نعناع، ليمون وزيت زيتون، وتُقدَّم على طبقة لبنة وخس.", en: "Parsley, bulgur, green onion, mint, lemon and olive oil, served over labneh and lettuce.", he: "פטרוזיליה, בורגול, בצל ירוק, נענע, לימון ושמן זית, מוגש על שכבת לבנה וחסה." }, price: 25, img: img("1770239421317-thumb-1770239420826-ubvb6j.webp") },
      { name: { ar: "سلطة حلومي", en: "Halloumi Salad", he: "סלט חלומי" }, desc: { ar: "خليط خضار (أوراق خضراء، ملفوف أحمر، تفاح، جزر، فطر، جوز)، مع حلومي مقلية وصوص حمضيات.", en: "Mixed vegetables (greens, red cabbage, apple, carrot, mushrooms, walnuts) with fried halloumi and citrus dressing.", he: "מיקס ירקות (עלים ירוקים, כרוב אדום, תפוח, גזר, פטריות, אגוזים) עם חלומי מטוגן ורוטב הדרים." }, price: 30, img: img("1770239378786-thumb-1770239378156-pbk2p8.webp") },
      { name: { ar: "سلطة عربيه", en: "Arabic Salad", he: "סלט ערבי" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770247334731-thumb-1770247334387-3cktac.webp") },
      { name: { ar: "سلطة جرجير", en: "Arugula Salad", he: "סלט רוקט" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770247302468-thumb-1770247301952-l9ok1f.webp") },
      { name: { ar: "سلطة تونة", en: "Tuna Salad", he: "סלט טונה" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770247369199-thumb-1770247368901-jta3.webp") },
    ],
  },
  {
    id: "appetizers",
    name: { ar: "مقبلات", en: "Appetizers", he: "מנות פתיחה" },
    items: [
      { name: { ar: "كبه", en: "Kibbeh", he: "קובה" }, desc: { ar: "", en: "", he: "" }, price: 35, img: img("1770242671285-thumb-1770242671043-1zqrep.webp") },
      { name: { ar: "اصابع جبنه", en: "Cheese Sticks", he: "מקלות גבינה" }, desc: { ar: "", en: "", he: "" }, price: 35, img: img("1770247465578-thumb-1770247464779-cwx3i6.webp") },
      { name: { ar: "صحن حمص", en: "Hummus Plate", he: "צלחת חומוס" }, desc: { ar: "", en: "", he: "" }, price: 18, img: img("thumb-3d6bef69-e299-4cf9-9869-4ae7066321e9-1770237994985.webp") },
      { name: { ar: "بطاطا مقليه", en: "Fries", he: "צ'יפס" }, desc: { ar: "بطاطا مقطعة سميكة مع مايونيز وكاتشب.", en: "Thick-cut fries with mayonnaise and ketchup.", he: "צ'יפס חתוך עבה עם מיונז וקטשופ." }, price: 15, img: img("1770240017394-thumb-1770240016954-7jqeqm.webp") },
      { name: { ar: "اجنحة دجاج", en: "Chicken Wings", he: "כנפיים" }, desc: { ar: "12 قطعة أجنحة مقلية مع اختيار صوص (شيلي حلو أو ترياكي).", en: "12 fried wings with a choice of sauce (sweet chili or teriyaki).", he: "12 כנפיים מטוגנות עם בחירת רוטב (צ'ילי מתוק או טריאקי)." }, price: 35, img: img("1770240097867-thumb-1770240097437-a4nap.webp") },
      { name: { ar: "مكس مقالي", en: "Mixed Fried Platter", he: "פלטת מטוגנים מעורבת" }, desc: { ar: "", en: "", he: "" }, price: 50, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "خبز مثوم", en: "Garlic Bread", he: "לחם שום" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770247855616-thumb-1770247855192-xieb38.webp") },
    ],
  },
  {
    id: "meats",
    name: { ar: "وجبات اللحوم", en: "Meat Meals", he: "מנות בשר" },
    items: [
      { name: { ar: "صدر دجاج مشوي", en: "Grilled Chicken Breast", he: "חזה עוף צלוי" }, desc: { ar: "240غ صدر دجاج مشوي مع بطاطس مهروسة وخضار سوتيه.", en: "240g grilled chicken breast with mashed potatoes and sautéed vegetables.", he: "חזה עוף צלוי 240 גרם עם פירה ותערובת ירקות מוקפצים." }, price: 60, img: img("1770240162924-thumb-1770240162454-7bqop.webp") },
      { name: { ar: "انتريكوت (٣٠٠)", en: "Entrecote (300g)", he: "אנטריקוט (300 גרם)" }, desc: { ar: "ستيك انتريكوت 300غ مع بطاطس مهروسة كريمية وخضار.", en: "300g entrecote steak with creamy mashed potatoes and vegetables.", he: "אנטריקוט 300 גרם עם פירה קרמי וירקות." }, price: 95, img: img("1770240214548-thumb-1770240214092-8n8yl.webp") },
      { name: { ar: "انتريكوت ٦٠٠ غرام", en: "Entrecote 600g", he: "אנטריקוט 600 גרם" }, desc: { ar: "", en: "", he: "" }, price: 250, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "ريش خروف", en: "Lamb Ribs", he: "צלעות כבש" }, desc: { ar: "300غ ريش خروف مشوي على الفحم مع بصل وطماطم مشوية وبطاطا.", en: "300g charcoal-grilled lamb ribs with grilled onion and tomatoes, plus potatoes.", he: "צלעות כבש 300 גרם על הגחלים עם בצל ועגבניות צלויות ותפוחי אדמה." }, price: 110, img: img("1770240281198-thumb-1770240280539-h9j68.webp") },
      { name: { ar: "وجبة برجيت", en: "Chicken Thigh (Pargit) Meal", he: "מנת פרגית" }, desc: { ar: "3 اسياخ برجيت متبّلان على الفحم مع بصل وطماطم وبطاطا.", en: "3 marinated pargit skewers over charcoal with onions, tomatoes and potatoes.", he: "3 שיפודי פרגית במרינדה על פחמים עם בצל, עגבניות ותפוחי אדמה." }, price: 60, img: img("1770240362675-thumb-1770240362124-talbip.webp") },
      { name: { ar: "سياخ خروف", en: "Lamb Skewers", he: "שיפודי כבש" }, desc: { ar: "3 اسياخ خروف على الفحم مع بصل وطماطم وبطاطا.", en: "3 skewers of lamb on charcoal with onions, tomatoes and potatoes.", he: "3 שיפודי טלה על פחמים עם בצל, עגבניות ותפוחי אדמה." }, price: 110, img: img("1770240493619-thumb-1770240493152-5c97n.webp") },
      { name: { ar: "وجبة كباب", en: "Kebab Meal", he: "מנת קבב" }, desc: { ar: "", en: "", he: "" }, price: 60, img: img("1770247918237-thumb-1770247917835-8a2n0e.webp") },
      { name: { ar: "فيليه عجل", en: "Veal Fillet", he: "פילה עגל" }, desc: { ar: "240غ فيليه عجل مشوي مع بطاطس مهروسة وخضار.", en: "240g grilled veal fillet with mashed potatoes and vegetables.", he: "פילה עגל 240 גרם צלוי עם פירה וירקות." }, price: 110, img: img("1770240525168-thumb-1770240524693-jqmk5i.webp") },
      { name: { ar: "مكس لحوم ٢٥٠ غم", en: "Mixed Meat Platter 250g", he: "מנת בשרים מעורבים 250 גרם" }, desc: { ar: "ثلاث سياخ مشكل مع بطاطا مقليه", en: "Three mixed skewers with french fries", he: "שלושה שיפודים מעורבים עם צ'יפס" }, price: 80, img: img("thumb-06ab5096-58f7-405c-93d5-8cb552f72520-1770238239792.webp") },
      { name: { ar: "مكس لحوم ٥٠٠ غم", en: "Mixed Meat Platter 500g", he: "מנת בשרים מעורבים 500 גרם" }, desc: { ar: "ستة سياخ مشكل مع بطاطا مقليه و ٥ انواع سلطه مجانيه", en: "Six mixed skewers with french fries and 5 types of free salad", he: "שישה שיפודים מעורבים עם צ'יפס ו-5 סוגי סלט חינם" }, price: 150, img: img("1770245592081-thumb-1770245591450-b03l1f.webp") },
      { name: { ar: "شنيتسل", en: "Schnitzel", he: "שניצל" }, desc: { ar: "يقدم مع بطاطا مقليه", en: "Served with french fries", he: "מוגש עם צ'יפס" }, price: 50, img: img("1770241265762-thumb-1770241265145-4y1gtg.webp") },
    ],
  },
  {
    id: "fish",
    name: { ar: "اسماك", en: "Seafood", he: "דגים" },
    items: [
      { name: { ar: "جمبري مقلي", en: "Fried Shrimp", he: "שרימפס מטוגן" }, desc: { ar: "١٠ حبات جمبري مقلي او مطبوخ مع صلصة الثوم والليمون", en: "10 fried or cooked shrimp with garlic and lemon sauce", he: "10 שרימפס מטוגנים או מבושלים ברוטב שום ולימון" }, price: 75, img: img("1770245010961-thumb-1770245010427-mba1fyc.webp") },
      { name: { ar: "كلماري مقلي", en: "Fried Calamari", he: "קלמארי מטוגן" }, desc: { ar: "كلماري مقلي او مطبوخ مع صلصة الثوم والليمون", en: "Fried or cooked calamari with garlic and lemon sauce", he: "קלמרי מטוגן או מבושל ברוטב שום ולימון" }, price: 75, img: img("1770240060519-thumb-1770240060033-1xrtj7.webp") },
      { name: { ar: "جمبري كلماري", en: "Shrimp & Calamari", he: "שרימפס וקלמארי" }, desc: { ar: "مزيج روبيان وكلماري مقلي او مطبوخ مع صلصة الثوم والليمون", en: "A mixture of fried or cooked shrimp and calamari with garlic and lemon sauce", he: "תערובת של שרימפס וקלמרי מטוגנים או מבושלים ברוטב שום ולימון" }, price: 75, img: img("1770240650460-thumb-1770240649965-ghcqq9.webp") },
      { name: { ar: "دنيس مقلي", en: "Fried Sea Bream", he: "דניס מטוגן" }, desc: { ar: "", en: "", he: "" }, price: 80, img: img("1770248350077-thumb-1770248349649-jptid.webp") },
      { name: { ar: "سمك لبراك", en: "Sea Bass", he: "לברק" }, desc: { ar: "", en: "", he: "" }, price: 80, img: img("1770248410120-thumb-1770248409823-dymcfw.webp") },
      { name: { ar: "مكس فواكه البحر", en: "Mixed Seafood Platter", he: "מיקס פירות ים" }, desc: { ar: "روبيان، كلماري، بلح البحر، أخطبوط، وسكالوب مع ثوم وزبدة وليمون.", en: "Shrimp, calamari, mussels, octopus, and scallops with garlic, butter, and lemon.", he: "שרימפס, קלמארי, מולים, תמנון וסקאלופ עם שום, חמאה ולימון." }, price: 245, img: img("1770244275971-thumb-1770244275476-g4hwv93.webp") },
      { name: { ar: "سلمون", en: "Salmon", he: "סלמון" }, desc: { ar: "فيليه سلمون بالفرن مع صلصة كريمية، شبت وثوم، مع بطاطا مخبوزة وبروكلي.", en: "Oven-baked salmon fillet with a creamy dill-garlic sauce, served with baked potato and broccoli.", he: "פילה סלמון בתנור עם רוטב שמנתי, שמיר ושום, מוגש עם תפוח אדמה אפוי וברוקולי." }, price: 78, img: img("1770240677813-thumb-1770240677352-7xpbxm.webp") },
    ],
  },
  {
    id: "kids",
    name: { ar: "اطفال", en: "Kids", he: "ילדים" },
    items: [
      { name: { ar: "همبرجر اطفال", en: "Kids Hamburger", he: "המבורגר ילדים" }, desc: { ar: "يقدم مع بطاطا مقليه", en: "Served with french fries", he: "מוגש עם צ'יפס" }, price: 35, img: img("1770240712491-thumb-1770240712066-l76lqa.webp") },
      { name: { ar: "شنيتسل اطفال", en: "Kids Schnitzel", he: "שניצל ילדים" }, desc: { ar: "يقدم مع بطاطا مقليه", en: "Served with french fries", he: "מוגש עם צ'יפס" }, price: 35, img: img("1770240825580-thumb-1770240823585-o4hry.webp") },
      { name: { ar: "اسباغتي بالطماطم", en: "Spaghetti with Tomato", he: "ספגטי ברוטב עגבניות" }, desc: { ar: "صلصة طماطم إيطالية مع ريحان وثوم وبارميزان.", en: "Italian tomato sauce with basil, garlic, and parmesan.", he: "רוטב עגבניות איטלקי עם בזיליקום, שום ופרמזן." }, price: 40, img: img("1770241399227-thumb-1770241398798-twgpd.webp") },
    ],
  },
  {
    id: "special-dishes",
    name: { ar: "اطباق خاصه", en: "Special Dishes", he: "מנות מיוחדות" },
    items: [
      { name: { ar: "كتف خروف محشي", en: "Stuffed Lamb Shoulder", he: "כתף כבש ממולאת" }, desc: { ar: "كتف محشي أرز ولحم مفروم مع بهارات ومكسرات، يكفي 4 أشخاص، مع خضار مطهوة بمرق طماطم.", en: "Lamb shoulder stuffed with rice and minced meat, spices and nuts; serves 4; with vegetables cooked in tomato broth.", he: "כתף כבש ממולאת אורז ובשר טחון, תבלינים ואגוזים; מספיק ל-4 סועדים; עם ירקות מבושלים בציר עגבניות." }, price: 550, img: img("1770241332944-thumb-1770241332457-fc6u5.webp") },
    ],
  },
  {
    id: "pasta-pizza",
    name: { ar: "باستا و بيتزا", en: "Pasta & Pizza", he: "פסטה ופיצה" },
    items: [
      { name: { ar: "رافيولي بالجبن", en: "Cheese Ravioli", he: "רביולי גבינה" }, desc: { ar: "معكرونة محشوة بخليط جبن وقشدة وفطر، مع بارميزان وبروكلي وبازيلاء.", en: "Stuffed pasta with a cheese, cream, and mushroom filling, with parmesan, broccoli, and peas.", he: "פסטה ממולאת בתערובת גבינות, שמנת ופטריות, עם פרמזן, ברוקולי ואפונה." }, price: 50, img: img("1770241542645-thumb-1770241542115-fdn8dv.webp") },
      { name: { ar: "رافيولي بطاطا حلوه", en: "Sweet Potato Ravioli", he: "רביולי בטטה" }, desc: { ar: "معكرونة محشوة بخليط البطاطا الحلوه وقشدة وفطر، مع بارميزان .", en: "Pasta stuffed with a mixture of sweet potatoes, cream and mushrooms, with parmesan.", he: "פסטה ממולאת בתערובת בטטה, שמנת ופטריות, עם פרמזן." }, price: 50, img: img("1770241576165-thumb-1770241575691-ni46ld.webp") },
      { name: { ar: "باستا بيني", en: "Penne Pasta", he: "פסטה פנה" }, desc: { ar: "", en: "", he: "" }, price: 50, img: img("1770294933283-thumb-1770294932787-w84o.webp") },
      { name: { ar: "باستا فوتتشيني", en: "Fettuccine Pasta", he: "פטוצ'יני" }, desc: { ar: "معكرونة طازجة بصلصة كريمة مع فطر وشرائح صدر دجاج، مع بارميزان.", en: "Fresh pasta in a creamy sauce with mushrooms and sliced chicken breast, finished with parmesan.", he: "פסטה טרייה ברוטב שמנת עם פטריות ופרוסות חזה עוף, עם פרמזן." }, price: 45, img: img("1770294980943-thumb-1770294980645-k9kgxg.webp") },
      { name: { ar: "فوتتشيني مع صدر دجاج", en: "Fettuccine with Chicken", he: "פטוצ'יני עם עוף" }, desc: { ar: "معكرونة طازجة بصلصة كريمة مع فطر وشرائح صدر دجاج، مع بارميزان.", en: "Fresh pasta in a creamy sauce with mushrooms and sliced chicken breast, finished with parmesan.", he: "פסטה טרייה ברוטב שמנת עם פטריות ופרוסות חזה עוף, עם פרמזן." }, price: 55, img: img("1770241614623-thumb-1770241614170-u9h0m.webp") },
      { name: { ar: "سباغيتي بالطماطم", en: "Spaghetti with Tomato", he: "ספגטי ברוטב עגבניות" }, desc: { ar: "صلصة طماطم إيطالية مع ريحان وثوم وبارميزان.", en: "Italian tomato sauce with basil, garlic, and parmesan.", he: "רוטב עגבניות איטלקי עם בזיליקום, שום ופרמזן." }, price: 40, img: img("1770295090146-thumb-1770295089800-3wbwr9.webp") },
      { name: { ar: "بيتزا", en: "Pizza", he: "פיצה" }, desc: { ar: "صلصة طماطم إيطالية مع موزاريلا وبارميزان وزيت زيتون وريحان، وإضافات اختيارية: زيتون، تونة، خضار، ذرة.", en: "Italian tomato sauce with mozzarella, parmesan, olive oil, and basil; optional add-ons: olives, tuna, vegetables, corn.", he: "רוטב עגבניות איטלקי עם מוצרלה, פרמזן, שמן זית ובזיליקום; תוספות לבחירה: זיתים, טונה, ירקות, תירס." }, price: 55, img: img("1770244323650-thumb-1770244322985-n7wbbe.webp") },
    ],
  },
  {
    id: "sandwiches",
    name: { ar: "سندويشات", en: "Sandwiches", he: "סנדוויצ'ים" },
    items: [
      { name: { ar: "باجيت شنيتسيل", en: "Schnitzel Baguette", he: "באגט שניצל" }, desc: { ar: "يقدم مع بطاطا مقليه", en: "Served with french fries", he: "מוגש עם צ'יפס" }, price: 38, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "تورتيا ليالي بسمه", en: "Laialy Basma Tortilla", he: "טורטייה ליאלי בסמה" }, desc: { ar: "يقدم مع بطاطا مقليه", en: "Served with french fries", he: "מוגש עם צ'יפס" }, price: 40, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "تورتيا انتريكوت", en: "Entrecote Tortilla", he: "טורטייה אנטריקוט" }, desc: { ar: "يقدم مع بطاطا مقليه", en: "Served with french fries", he: "מוגש עם צ'יפס" }, price: 55, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "تورتيا كباب", en: "Kebab Tortilla", he: "טורטייה קבב" }, desc: { ar: "يقدم مع بطاطا مقليه", en: "Served with french fries", he: "מוגש עם צ'יפס" }, price: 40, img: img("1770242413476-apply-1770242413476.webp") },
    ],
  },
  {
    id: "natural-drinks",
    name: { ar: "مشروبات طبيعية", en: "Natural Drinks", he: "משקאות טבעיים" },
    items: [
      { name: { ar: "عصير برتقال", en: "Orange Juice", he: "מיץ תפוזים" }, desc: { ar: "", en: "", he: "" }, price: 19, img: img("1770295150626-thumb-1770295150327-syxvih.webp") },
      { name: { ar: "عصير جزر", en: "Carrot Juice", he: "מיץ גזר" }, desc: { ar: "", en: "", he: "" }, price: 18, img: img("1770295345961-thumb-1770295345619-89azui.webp") },
      { name: { ar: "ليمون ونعنع", en: "Lemon & Mint", he: "לימון ונענע" }, desc: { ar: "", en: "", he: "" }, price: 18, img: img("1770295400984-thumb-1770295400583-olwbge.webp") },
      { name: { ar: "ليمون", en: "Lemonade", he: "לימונדה" }, desc: { ar: "", en: "", he: "" }, price: 17, img: img("1770295424254-thumb-1770295423916-ujquch.webp") },
      { name: { ar: "جزر وبرتقال", en: "Carrot & Orange", he: "גזר ותפוז" }, desc: { ar: "", en: "", he: "" }, price: 18, img: img("1770295440109-thumb-1770295439566-rfc3o4.webp") },
    ],
  },
  {
    id: "milkshake",
    name: { ar: "ميلك شيك", en: "Milkshakes", he: "מילקשייק" },
    items: [
      { name: { ar: "فانيلا", en: "Vanilla Milkshake", he: "מילקשייק וניל" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770295469023-thumb-1770295467874-chu2k8.webp") },
      { name: { ar: "فيريرو", en: "Ferrero Milkshake", he: "מילקשייק פררו" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770295560316-thumb-1770295559813-20fgn6.webp") },
      { name: { ar: "لوتوس", en: "Lotus Milkshake", he: "מילקשייק לוטוס" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770295582992-thumb-1770295582601-sbf1d8.webp") },
      { name: { ar: "اوريو", en: "Oreo Milkshake", he: "מילקשייק אוראו" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770295606937-thumb-1770295606501-wlymaq.webp") },
      { name: { ar: "نوتيلا", en: "Nutella Milkshake", he: "מילקשייק נוטלה" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770295631280-thumb-1770295630786-cpemwj.webp") },
      { name: { ar: "كيندر", en: "Kinder Milkshake", he: "מילקשייק קינדר" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770295664348-thumb-1770295664024-e4zv0j.webp") },
      { name: { ar: "فراوله", en: "Strawberry Milkshake", he: "מילקשייק תות" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770295771089-thumb-1770295770575-85gso.webp") },
      { name: { ar: "بلوبيري", en: "Blueberry Milkshake", he: "מילקשייק אוכמניות" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770296169367-thumb-1770296168832-tmp5wj.webp") },
      { name: { ar: "بستاشيو", en: "Pistachio Milkshake", he: "מילקשייק פיסטוק" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770296201159-thumb-1770296200815-s1qz9n.webp") },
      { name: { ar: "بزوكا", en: "Bazooka", he: "בזוקה" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770418714676-thumb-1770418713702-xqt7jj.webp") },
    ],
  },
  {
    id: "smoothie",
    name: { ar: "مشروبات سموذي", en: "Smoothies", he: "סמוזי" },
    items: [
      { name: { ar: "سموذي فراوله", en: "Strawberry Smoothie", he: "סמוזי תות" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770296648187-thumb-1770296647900-sqo70r.webp") },
      { name: { ar: "سموذي انناس", en: "Pineapple Smoothie", he: "סמוזי אננס" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770296517786-thumb-1770296517355-9b9e8.webp") },
      { name: { ar: "سموذي مانجو", en: "Mango Smoothie", he: "סמוזי מנגו" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770296694329-thumb-1770296693602-xusuyi.webp") },
      { name: { ar: "سموذي بسفلورا", en: "Passion Fruit Smoothie", he: "סמוזי פסיפלורה" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770297908247-thumb-1770297907549-tpr7kh.webp") },
      { name: { ar: "سموذي فراوله وليمون", en: "Strawberry & Lemon Smoothie", he: "סמוזי תות ולימון" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770296758702-thumb-1770296758191-juicno.webp") },
      { name: { ar: "مكس بسفلورا ومنجا وانناس", en: "Passion Fruit + Mango + Pineapple Mix", he: "מיקס פסיפלורה-מנגו-אננס" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770296776271-thumb-1770296775638-td4j2p.webp") },
    ],
  },
  {
    id: "pitchers",
    name: { ar: "إبريق المشروبات", en: "Drink Pitchers", he: "קנקנים" },
    items: [
      { name: { ar: "ابريق ليمون", en: "Lemon Pitcher", he: "קנקן לימון" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "ابريق برتقال", en: "Orange Pitcher", he: "קנקן תפוזים" }, desc: { ar: "", en: "", he: "" }, price: 40, img: img("1770316430925-thumb-1770316430316-6p44fj.webp") },
      { name: { ar: "ابريق ليمون ونعناع", en: "Lemon & Mint Pitcher", he: "קנקן לימון ונענע" }, desc: { ar: "", en: "", he: "" }, price: 32, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "ابريق مانجا", en: "Mango Pitcher", he: "קנקן מנגו" }, desc: { ar: "", en: "", he: "" }, price: 40, img: img("1770242413476-apply-1770242413476.webp") },
    ],
  },
  {
    id: "basma-burger",
    name: { ar: "بسمه برجر", en: "Basma Burger", he: "בורגר בסמה" },
    items: [
      { name: { ar: "برجر ١٦٠ غرام", en: "Burger 160g", he: "המבורגר 160 גרם" }, desc: { ar: "لحم مشوي مع طماطم وبصل أحمر وخس وبطاطا، وإضافات اختيارية: شيدر، بيضة، بصل مكرمل، موزاريلا مقلية.", en: "Grilled beef with tomato, red onion, lettuce, and fries; optional add-ons: cheddar, egg, caramelized onion, fried mozzarella.", he: "בשר צלוי עם עגבנייה, בצל אדום, חסה וצ'יפס; תוספות לבחירה: צ'דר, ביצה, בצל מקורמל, מוצרלה מטוגנת." }, price: 48, img: img("1770239591694-thumb-1770239591215-cwzrg.webp") },
      { name: { ar: "برجر دبل", en: "Double Burger", he: "המבורגר כפול" }, desc: { ar: "قطعتين لحم مشوي مع طماطم وبصل أحمر وخس وبطاطا، وإضافات اختيارية: شيدر، بيضة، بصل مكرمل، موزاريلا مقلية.", en: "Two grilled beef patties with tomato, red onion, lettuce, and fries; optional add-ons: cheddar, egg, caramelized onion, fried mozzarella.", he: "שתי נתחי בשר בגריל עם עגבניות, בצל אדום, חסה, צ'יפס ותוספות לבחירה: צ'דר, ביצה, בצל מקורמל, מוצרלה מטוגנת." }, price: 65, img: img("1770239604082-thumb-1770239603675-0q9lbe.webp") },
    ],
  },
  {
    id: "mojito",
    name: { ar: "موهيتو بسمه", en: "Basma Mojito", he: "מוחיטו בסמה" },
    items: [
      { name: { ar: "بارادايس", en: "Paradise Mojito", he: "מוחיטו פרדייס" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770315171910-thumb-1770315171466-ji9g0k.webp") },
      { name: { ar: "موهيتو نعناع", en: "Mint Mojito", he: "מוחיטו נענע" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770315214872-thumb-1770315214378-jja24g.webp") },
      { name: { ar: "موهيتو بطيخ", en: "Watermelon Mojito", he: "מוחיטו אבטיח" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770315242432-thumb-1770315241852-dhuqq.webp") },
      { name: { ar: "موهيتو بلوبيري", en: "Blueberry Mojito", he: "מוחיטו אוכמניות" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770315277320-thumb-1770315276867-gj381k.webp") },
      { name: { ar: "موهيتو فراوله", en: "Strawberry Mojito", he: "מוחיטו תות" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770315582347-thumb-1770315581925-yzmhe.webp") },
      { name: { ar: "موهيتو مكس بيري", en: "Mixed Berry Mojito", he: "מוחיטו מיקס ברי" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770315314196-thumb-1770315313792-hxjrnq.webp") },
      { name: { ar: "موهيتو هاواي", en: "Hawaii Mojito", he: "מוחיטו הוואי" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "ايس كافيه", en: "Iced Coffee", he: "אייס קפה" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770315618036-thumb-1770315617468-13q2ic.webp") },
      { name: { ar: "كافيه كار", en: "Cafe Car", he: "קפה קאר" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770315649759-thumb-1770315649372-q3t2qp.webp") },
      { name: { ar: "كيوي", en: "Kiwi", he: "קיווי" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770323893378-thumb-1770323892749-efai8.webp") },
    ],
  },
  {
    id: "hot-drinks",
    name: { ar: "مشروبات ساخنه", en: "Hot Drinks", he: "משקאות חמים" },
    items: [
      { name: { ar: "اسبرسو", en: "Espresso", he: "אספרסו" }, desc: { ar: "", en: "", he: "" }, price: 7, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "اسبرسو كفول", en: "Double Espresso", he: "אספרסו כפול" }, desc: { ar: "", en: "", he: "" }, price: 9, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "هفوخ", en: "Hafuch", he: "הפוך" }, desc: { ar: "", en: "", he: "" }, price: 12, img: img("1770315882473-thumb-1770315879079-2l2v5m.webp") },
      { name: { ar: "افوكاتو", en: "Affogato", he: "אפוגטו" }, desc: { ar: "", en: "", he: "" }, price: 14, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "شاي اخضر", en: "Green Tea", he: "תה ירוק" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "شوكو", en: "Hot Cocoa", he: "שוקו" }, desc: { ar: "", en: "", he: "" }, price: 12, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "نسكافيه", en: "Nescafe", he: "נס קפה" }, desc: { ar: "", en: "", he: "" }, price: 12, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "غلاية قهوة عربيه", en: "Arabic Coffee Kettle", he: "קומקום קפה ערבי" }, desc: { ar: "", en: "", he: "" }, price: 15, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "شاي بالنعناع", en: "Mint Tea", he: "תה נענע" }, desc: { ar: "", en: "", he: "" }, price: 10, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "هوت شوكلت", en: "Hot Chocolate", he: "הוט שוקולד" }, desc: { ar: "", en: "", he: "" }, price: 14, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "سحلب", en: "Hot Sahlab", he: "סחלב חם" }, desc: { ar: "", en: "", he: "" }, price: 14, img: img("1770315801296-thumb-1770315799565-q7ifel.webp") },
      { name: { ar: "خلطه خماسيه", en: "Five Mix", he: "חליטה חמישייה" }, desc: { ar: "نعنع قرفه ليمون زنجبيل عسل", en: "Mint, cinnamon, lemon, ginger, honey", he: "נענע, קינמון, לימון, ג'ינג'ר, דבש" }, price: 12, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "هوت كندر", en: "Hot Kinder", he: "הוט קינדר" }, desc: { ar: "", en: "", he: "" }, price: 15, img: img("1770244621435-thumb-1770244620893-qswy8m.webp") },
      { name: { ar: "هوت لوتوس", en: "Hot Lotus", he: "הוט לוטוס" }, desc: { ar: "", en: "", he: "" }, price: 15, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "هوت شوكليت ايطالي", en: "Italian Hot Chocolate", he: "הוט שוקולד איטלקי" }, desc: { ar: "", en: "", he: "" }, price: 14, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "بريق شاي", en: "Tea Pitcher", he: "קנקן תה" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770243116709-apply-1770243116709.webp") },
    ],
  },
  {
    id: "soft-drinks",
    name: { ar: "مشروبات غازيه وعصائر", en: "Soft Drinks & Juices", he: "שתייה קלה ומיצים" },
    items: [
      { name: { ar: "كولا", en: "Cola", he: "קולה" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "سبرايت", en: "Sprite", he: "ספרייט" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "كولا دايت", en: "Diet Cola", he: "קולה דיאט" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "فانتا", en: "Fanta", he: "פנטה" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "صودا", en: "Soda Water", he: "סודה" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "اكس ال", en: "XL", he: "XL" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "اكس ال دايت", en: "XL Diet", he: "XL דיאט" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "بلو داي", en: "Blu Day", he: "בלו דיי" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "بلو", en: "Blu", he: "בלו" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "بلو نعنع", en: "Blu Mint", he: "בלו נענע" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "عصير عنب", en: "Grape Juice", he: "מיץ ענבים" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "عصير برتقال", en: "Orange Juice", he: "מיץ תפוזים" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "عصير توت وموز", en: "Berry & Banana Juice", he: "מיץ פירות יער ובננה" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "مياه معدنيه كبير", en: "Mineral Water (Large)", he: "מים מינרליים (גדול)" }, desc: { ar: "", en: "", he: "" }, price: 10, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "مياه معدنيه صغير", en: "Mineral Water (Small)", he: "מים מינרליים (קטן)" }, desc: { ar: "", en: "", he: "" }, price: 8, img: img("1770242413476-apply-1770242413476.webp") },
    ],
  },
  {
    id: "desserts",
    name: { ar: "تحلايتنا", en: "Our Desserts", he: "הקינוחים שלנו" },
    items: [
      { name: { ar: "كعكة جبنه", en: "Cheesecake", he: "עוגת גבינה" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770241654855-thumb-1770241654404-pyk5wg.webp"), soldOut: true },
      { name: { ar: "سوفليه شوكلاته", en: "Chocolate Souffle", he: "סופלה שוקולד" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770241769797-thumb-1770241769281-xd3cba.webp"), soldOut: true },
      { name: { ar: "كعكة اوريو", en: "Oreo Cake", he: "עוגת אוראו" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770241811753-thumb-1770241811292-toopau.webp"), soldOut: true },
      { name: { ar: "سوفليه كبير شوكلاته", en: "Large Chocolate Souffle", he: "סופלה שוקולד גדול" }, desc: { ar: "", en: "", he: "" }, price: 40, img: img("1770243925202-thumb-1770243924590-snpufx.webp"), soldOut: true },
      { name: { ar: "ألفاخوس", en: "Alfajores", he: "אלפחורס" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770244008501-thumb-1770244008084-l7z4zm.webp"), soldOut: true },
      { name: { ar: "سنيكرز", en: "Snickers Dessert", he: "קינוח סניקרס" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770241949342-thumb-1770241948841-3zz3q.webp"), soldOut: true },
      { name: { ar: "كعكة سويسرية", en: "Swiss Cake", he: "עוגה שוויצרית" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770242109597-thumb-1770242106004-2xmmep.webp"), soldOut: true },
      { name: { ar: "سبرينو", en: "Sbrino", he: "סברינו" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770242004007-thumb-1770241999544-3f65m5.webp"), soldOut: true },
      { name: { ar: "سوشي اوريو", en: "Oreo Sushi", he: "סושי אוראו" }, desc: { ar: "", en: "", he: "" }, price: 40, img: img("1770242146457-thumb-1770242145949-t8fj2b.webp") },
    ],
  },
  {
    id: "special-basma",
    name: { ar: "سبيشل بسمه", en: "Basma Special", he: "ספיישל בסמה" },
    items: [
      { name: { ar: "صحن كنافه", en: "Kunafa Plate", he: "צלחת כנאפה" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770242413476-apply-1770242413476.webp"), soldOut: true },
      { name: { ar: "بان كيك", en: "Pancakes", he: "פנקייק" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770297140161-thumb-1770297137539-k1x31f.webp") },
      { name: { ar: "وافل بلجيكي", en: "Belgian Waffle", he: "וופל בלגי" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770297348435-thumb-1770297347921-ekup6.webp") },
      { name: { ar: "كريب فرنسي", en: "French Crepe", he: "קרפ צרפתי" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770297565932-thumb-1770297565564-7pe56.webp") },
      { name: { ar: "كريب دبي", en: "Dubai Crepe", he: "קרפ דובאי" }, desc: { ar: "", en: "", he: "" }, price: 35, img: img("1770297529410-thumb-1770297528994-nhwyhh.webp") },
      { name: { ar: "فشافيش", en: "Fshafesh", he: "פשאפש" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770297593364-thumb-1770297593000-15c21p.webp") },
      { name: { ar: "طبق فواكه موسميه", en: "Seasonal Fruit Plate", he: "צלחת פירות עונתית" }, desc: { ar: "", en: "", he: "" }, price: 55, img: img("1770316753305-thumb-1770316752619-m6lwd.webp") },
      { name: { ar: "طبق مكسرات", en: "Nuts Plate", he: "צלחת אגוזים" }, desc: { ar: "", en: "", he: "" }, price: 17, img: img("1770323941614-thumb-1770323940957-be72x.webp") },
      { name: { ar: "مكس حلو ١٥٠", en: "Dessert Mix 150", he: "מיקס קינוחים 150" }, desc: { ar: "", en: "", he: "" }, price: 150, img: img("1770316666977-thumb-1770316666540-o8q77e.webp") },
      { name: { ar: "مكس حلو ٢٥٠", en: "Dessert Mix 250", he: "מיקס קינוחים 250" }, desc: { ar: "", en: "", he: "" }, price: 250, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "طبق ايس كريم فاخر", en: "Premium Ice Cream Plate", he: "צלחת גלידה פרימיום" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "طبق ادمامي", en: "Edamame Plate", he: "צלחת אדממה" }, desc: { ar: "", en: "", he: "" }, price: 35, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "كعكة عيد ميلاد", en: "Birthday Cake", he: "עוגת יום הולדת" }, desc: { ar: "", en: "", he: "" }, price: 100, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "زينه", en: "Decoration", he: "קישוט" }, desc: { ar: "", en: "", he: "" }, price: 200, img: img("1770242413476-apply-1770242413476.webp") },
    ],
  },
  {
    id: "shisha-flavors",
    name: { ar: "نكهات أراجيل", en: "Hookah Flavors", he: "טעמי נרגילה" },
    items: [
      { name: { ar: "ليالي بسمه", en: "Laialy Basma", he: "ליאלי בסמה" }, desc: { ar: "", en: "", he: "" }, price: 45, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "تفاحتين فاخر", en: "Double Apple (Al Fakher)", he: "תפוחים כפול (אל פאכר)" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "تفاحتين نخله", en: "Double Apple (Nakhla)", he: "תפוחים כפול (נחלה)" }, desc: { ar: "", en: "", he: "" }, price: 35, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "Love 66", en: "Love 66", he: "Love 66" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "بلوبيري", en: "Blueberry", he: "אוכמניות" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "خلطة شاميه", en: "Shami Mix", he: "מיקס שאמי" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "ليمون ونعناع", en: "Lemon & Mint", he: "לימון ונענע" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "بطيخ ونعناع", en: "Watermelon & Mint", he: "אבטיח ונענע" }, desc: { ar: "", en: "", he: "" }, price: 30, img: img("1770242413476-apply-1770242413476.webp") },
    ],
  },
  {
    id: "fresh",
    name: { ar: "فرش", en: "Fresh Hookah", he: "פרש" },
    items: [
      { name: { ar: "فرش تفاحتين", en: "Fresh Double Apple", he: "פרש תפוחים כפול" }, desc: { ar: "", en: "", he: "" }, price: 45, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "فرش برتقال", en: "Fresh Orange", he: "פרש תפוז" }, desc: { ar: "", en: "", he: "" }, price: 45, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "فرش انناس", en: "Fresh Pineapple", he: "פרש אננס" }, desc: { ar: "", en: "", he: "" }, price: 75, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "فرش بوملي", en: "Fresh Pomelo", he: "פרש פומלו" }, desc: { ar: "", en: "", he: "" }, price: 65, img: img("1770242413476-apply-1770242413476.webp") },
    ],
  },
  {
    id: "shisha-services",
    name: { ar: "خدمات الأرجيلة", en: "Hookah Services", he: "שירותי נרגילה" },
    items: [
      { name: { ar: "خلطة vip ليالي بسمه", en: "VIP Hookah (Laialy Basma)", he: "נרגילה VIP (ליאלי בסמה)" }, desc: { ar: "", en: "", he: "" }, price: 150, img: img("1770297425454-thumb-1770297424817-v3745.webp") },
      { name: { ar: "تجديد راس عادي", en: "Regular Head Refill", he: "חידוש ראש רגיל" }, desc: { ar: "", en: "", he: "" }, price: 20, img: img("1770243116709-apply-1770243116709.webp") },
      { name: { ar: "تجديد راس ليالي بسمه", en: "Laialy Basma Head Refill", he: "חידוש ראש ליאלי בסמה" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770242413476-apply-1770242413476.webp") },
    ],
  },
  {
    id: "cocktails",
    name: { ar: "كوكتيلات مذاق عالي", en: "Premium Cocktails", he: "קוקטיילים פרימיום" },
    items: [
      { name: { ar: "شهر العسل", en: "Honeymoon Cocktail", he: "קוקטייל ירח דבש" }, desc: { ar: "", en: "", he: "" }, price: 32, img: img("1770296944502-thumb-1770296943708-5vtb9.webp") },
      { name: { ar: "موز وفراوله", en: "Banana & Strawberry", he: "בננה ותות" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770296992411-thumb-1770296991897-hwt9hi.webp") },
      { name: { ar: "ليالي بسمه", en: "Laialy Basma Cocktail", he: "קוקטייל ליאלי בסמה" }, desc: { ar: "", en: "", he: "" }, price: 40, img: img("1770242413476-apply-1770242413476.webp") },
      { name: { ar: "موز وحليب", en: "Banana & Milk", he: "בננה וחלב" }, desc: { ar: "", en: "", he: "" }, price: 25, img: img("1770297048753-thumb-1770297048369-u6q4q.webp") },
      { name: { ar: "فخفخينا", en: "Fakhfakhina", he: "פחפחינה" }, desc: { ar: "", en: "", he: "" }, price: 22, img: img("1770297078619-thumb-1770297076801-q6f2rj.webp") },
    ],
  },
];

// ---- اللغات / Languages ----
const LANGS = {
  ar: { label: "العربية", dir: "rtl", brand: "ليالي بسمة" },
  en: { label: "English", dir: "ltr", brand: "Laialy Basma" },
  he: { label: "עברית",  dir: "rtl", brand: "ליאלי בסמה" },
};
const LANG_ORDER = ["ar", "en", "he"];

// ---- نصوص الواجهة / UI strings ----
const UI = {
  ar: { tagline: "✦ مطعم ومقهى ✦", sections: "الأقسام", soldOut: "نفذت الكمية", igTitle: "تابعنا على إنستغرام", igChips: ["فعاليات خاصة", "أطباق موسمية", "عروض يومية"], follow: "متابعة", skip: "تخطي", footerFollow: "تابعونا على إنستغرام", rights: "جميع الحقوق محفوظة", toTop: "للأعلى" },
  en: { tagline: "✦ CAFE & RESTAURANT ✦", sections: "Categories", soldOut: "Sold Out", igTitle: "Follow us on Instagram", igChips: ["Special events", "Seasonal dishes", "Daily offers"], follow: "Follow", skip: "Skip", footerFollow: "Follow us on Instagram", rights: "All rights reserved", toTop: "Top" },
  he: { tagline: "✦ מסעדה ובית קפה ✦", sections: "קטגוריות", soldOut: "אזל מהמלאי", igTitle: "עקבו אחרינו באינסטגרם", igChips: ["אירועים מיוחדים", "מנות עונתיות", "מבצעים יומיים"], follow: "עקבו", skip: "דלג", footerFollow: "עקבו אחרינו באינסטגרם", rights: "כל הזכויות שמורות", toTop: "למעלה" },
};

const RESTAURANT = {
  instagram: "laialybasma",
  instagramUrl: "https://instagram.com/laialybasma",
  currency: "₪",
};

// ---- مجموعات علوية / Top-level groups ----
const GROUPS = [
  { id: "all",      label: { ar: "الكل",     en: "All",      he: "הכל" } },
  { id: "offers",   label: { ar: "عروض",     en: "Offers",   he: "הצעות" } },
  { id: "food",     label: { ar: "طعام",     en: "Food",     he: "אוכל" } },
  { id: "drinks",   label: { ar: "مشروبات",  en: "Drinks",   he: "משקאות" } },
  { id: "desserts", label: { ar: "حلويات",   en: "Desserts", he: "קינוחים" } },
  { id: "hookah",   label: { ar: "أراجيل",   en: "Hookah",   he: "נרגילה" } },
];

// category id -> group id  (null = only appears under "الكل")
const CATEGORY_GROUP = {
  "new": null,
  "offers": "offers",
  "breakfast": "food", "salads": "food", "appetizers": "food", "meats": "food",
  "fish": "food", "kids": "food", "special-dishes": "food", "pasta-pizza": "food",
  "sandwiches": "food", "basma-burger": "food",
  "natural-drinks": "drinks", "milkshake": "drinks", "smoothie": "drinks",
  "pitchers": "drinks", "mojito": "drinks", "hot-drinks": "drinks",
  "soft-drinks": "drinks", "cocktails": "drinks",
  "desserts": "desserts", "special-basma": "desserts",
  "shisha-flavors": "hookah", "fresh": "hookah", "shisha-services": "hookah",
};

// search placeholder per language
const SEARCH_PH = { ar: "ابحث في القائمة...", en: "Search the menu...", he: "חיפוש בתפריט..." };
const NO_RESULTS = { ar: "لا توجد نتائج", en: "No results found", he: "לא נמצאו תוצאות" };
