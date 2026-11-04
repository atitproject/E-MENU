-- ============================================================
--  منيو مطعم — Supabase schema
--  شغّل هذا الملف كاملًا في: Supabase → SQL Editor → New query → Run
--  آمن للتشغيل أكثر من مرة (idempotent).
-- ============================================================

-- ---------- الجداول / Tables ----------

-- إعدادات المطعم (صف واحد فقط)
create table if not exists public.settings (
  id           int primary key default 1,
  name_ar      text,
  name_en      text,
  name_he      text,
  tagline_ar   text,
  tagline_en   text,
  tagline_he   text,
  phone        text,
  maps_url     text,
  facebook_url text,
  instagram_url text,
  tiktok_url   text,
  logo_url     text,
  currency     text default '₪',
  updated_at   timestamptz default now(),
  constraint settings_singleton check (id = 1)
);

-- المجموعات العلوية (الكل / عروض / طعام / مشروبات / حلويات / أراجيل)
create table if not exists public.groups (
  id         uuid primary key default gen_random_uuid(),
  slug       text unique not null,
  name_ar    text,
  name_en    text,
  name_he    text,
  sort       int default 0,
  created_at timestamptz default now()
);

-- الأقسام
create table if not exists public.categories (
  id         uuid primary key default gen_random_uuid(),
  slug       text,
  name_ar    text,
  name_en    text,
  name_he    text,
  group_id   uuid references public.groups(id) on delete set null,
  sort       int default 0,
  created_at timestamptz default now()
);

-- الأصناف
create table if not exists public.items (
  id          uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete cascade,
  name_ar     text,
  name_en     text,
  name_he     text,
  desc_ar     text,
  desc_en     text,
  desc_he     text,
  price       numeric,
  image_url   text,
  sold_out    boolean default false,
  available   boolean default true,
  sort        int default 0,
  created_at  timestamptz default now()
);

create index if not exists items_category_idx on public.items(category_id);
create index if not exists categories_group_idx on public.categories(group_id);

-- ---------- حماية الصفوف / Row Level Security ----------
alter table public.settings   enable row level security;
alter table public.groups     enable row level security;
alter table public.categories enable row level security;
alter table public.items      enable row level security;

-- الجمهور: قراءة فقط
drop policy if exists "public read settings"   on public.settings;
drop policy if exists "public read groups"     on public.groups;
drop policy if exists "public read categories" on public.categories;
drop policy if exists "public read items"      on public.items;
create policy "public read settings"   on public.settings   for select using (true);
create policy "public read groups"     on public.groups     for select using (true);
create policy "public read categories" on public.categories for select using (true);
create policy "public read items"      on public.items      for select using (true);

-- المالك المسجّل دخوله: إضافة/تعديل/حذف
drop policy if exists "auth write settings"   on public.settings;
drop policy if exists "auth write groups"     on public.groups;
drop policy if exists "auth write categories" on public.categories;
drop policy if exists "auth write items"      on public.items;
create policy "auth write settings"   on public.settings   for all to authenticated using (true) with check (true);
create policy "auth write groups"     on public.groups     for all to authenticated using (true) with check (true);
create policy "auth write categories" on public.categories for all to authenticated using (true) with check (true);
create policy "auth write items"      on public.items      for all to authenticated using (true) with check (true);

-- ---------- تخزين الصور / Storage ----------
insert into storage.buckets (id, name, public)
values ('menu-images', 'menu-images', true)
on conflict (id) do nothing;

drop policy if exists "public read images"  on storage.objects;
drop policy if exists "auth upload images"  on storage.objects;
drop policy if exists "auth update images"  on storage.objects;
drop policy if exists "auth delete images"  on storage.objects;
create policy "public read images" on storage.objects
  for select using (bucket_id = 'menu-images');
create policy "auth upload images" on storage.objects
  for insert to authenticated with check (bucket_id = 'menu-images');
create policy "auth update images" on storage.objects
  for update to authenticated using (bucket_id = 'menu-images');
create policy "auth delete images" on storage.objects
  for delete to authenticated using (bucket_id = 'menu-images');

-- ---------- صف الإعدادات الافتراضي ----------
insert into public.settings (id, name_ar, name_en, name_he, tagline_ar, tagline_en, tagline_he, phone, maps_url, facebook_url, instagram_url, tiktok_url, currency)
values (1, 'منيو مطعم', 'Restaurant Menu', 'תפריט מסעדה', 'مطعم ومقهى', 'Cafe & Restaurant', 'מסעדה ובית קפה', '050-000-0000', '#', '#', '#', '#', '₪')
on conflict (id) do nothing;

-- تم. الخطوة التالية: أنشئ مستخدم المالك من Authentication → Users → Add user.
