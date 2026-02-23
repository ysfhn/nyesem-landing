# Nyesem — Landing Page Design Brief for Stitch

## 🎯 Project Overview
Design a modern, premium landing page for **Nyesem** — a gastronomy social platform mobile app. The page is in **Turkish language**. It should feel like a high-end tech startup landing page (think: Linear, Raycast, Arc Browser aesthetic). Default theme is **DARK**.

---

## 🎨 Design System

### Brand Colors
- **Primary (Brand Gold):** #F4C724
- **Brand Gradient:** linear-gradient(135deg, #F4C724, #FF8C42) — gold to warm orange
- **Blue Gradient:** linear-gradient(135deg, #3B82F6, #8B5CF6) — blue to purple

### Dark Theme (Default)
- Background Primary: #0D1117 (very dark navy-black)
- Background Secondary: #151A25
- Background Tertiary: #1E2330
- Card Background: rgba(30, 35, 48, 0.6) with backdrop-blur (glassmorphism)
- Text Primary: #FFFFFF
- Text Secondary: #E8EAF0
- Text Muted: #9FA5C0
- Text Faint: #687076
- Borders: rgba(255, 255, 255, 0.08)
- Grid Pattern: subtle dot/line grid at 2% white opacity over backgrounds

### Typography
- **Headings:** Plus Jakarta Sans — extrabold (800), tight tracking
- **Body:** Inter — regular/medium
- **Hero H1:** 4.5rem (72px) desktop, bold, line-height 1.05
- **Section H2:** 3rem (48px) desktop
- **Body text:** 1.125rem (18px), text-muted color, relaxed line-height

### Visual Effects
- **Glassmorphism cards:** semi-transparent backgrounds with backdrop-blur-xl, subtle white/5 borders
- **Gradient text:** Brand gradient applied to key words in headings (bg-clip-text)
- **Floating animation:** Phone mockups gently float up/down (6s cycle)
- **Section dividers:** Subtle horizontal gradient lines between sections (brand gold with transparency)
- **Rounded corners:** 1.5rem (24px) for cards, 1rem (16px) for smaller elements

---

## 📱 Page Structure — 15 Sections (Top to Bottom)

### 1. NAVBAR (Fixed, Glassmorphism)
- Left: Logo icon (🍽️ in a gold gradient rounded square) + "Nyesem" text
- Center: Navigation links — Özellikler, Nasıl Çalışır, Ekranlar, SSS
- Right: Theme toggle (sun/moon) + "İndir" CTA button (gold gradient, rounded-full)
- Glassmorphism background on scroll (backdrop-blur)
- Mobile: Hamburger menu

### 2. HERO SECTION
- **Layout:** 2-column grid. Left = text, Right = phone mockup
- **Badge:** Pill badge — green dot + "Gastronomi dünyasına yeni bir bakış"
- **H1:** "Yemeği **Keşfet**" (line break) "Deneyimi **Paylaş**" — gradient on Keşfet and Paylaş
- **Subtitle:** "Restoranları keşfet, AI ile menüleri analiz et, gurme seviyeni yükselt ve arkadaşlarınla unutulmaz yemek deneyimleri yaşa. **Gastronomi sosyal platformu.**"
- **CTA Buttons:** 
  - App Store (gold gradient, Apple icon, "Yakında / App Store")
  - Google Play (glass/outline, Play icon, "Yakında / Google Play")
- **Social Proof:** 5 avatar circles (overlapping, initials: AY, MK, SE, DB, +) + "Erken erişim açık" + "iOS & Android için yakında"
- **Phone Mockup (right):** Dark phone frame showing app screen with:
  - "Merhaba 👋" / "Ne yemek istersin?"
  - Search bar: "Restoran ara..."
  - Category pills: 🍔 Burger, ☕ Kahve, 🍕 Pizza, 🍣 Sushi
  - Restaurant card: "Lezzet Durağı" — İstanbul • 0.8 km — ★ 4.8
  - Bottom nav: 🏠 ❤️ 📅 👤
- **Background:** Gradient fade to dark at bottom

### 3. LOGO BAR (City Marquee)
- Label: "DÜNYA GENELİNDE GASTRONOMİ KEŞFİ" (uppercase, tracking-widest, muted)
- Infinite horizontal scroll marquee of city pills:
  - 🏙️ İstanbul, 🇩🇪 Berlin, 🇫🇷 Paris, 🇬🇧 Londra, 🇮🇹 Roma, 🇯🇵 Tokyo, 🇦🇪 Dubai, 🇪🇸 Barcelona, 🇳🇱 Amsterdam, 🇦🇹 Viyana, 🏛️ Ankara, 🌊 İzmir
- Each city in a glass pill with emoji + name
- Left/right fade gradients to blend into background

### 4. FEATURES GRID (9 Feature Cards)
- **Header Badge:** "Her şey tek uygulamada"
- **H2:** "Gastronomi için **ihtiyacın olan her şey**" (gradient)
- **Subtitle:** "Restoran keşfinden AI menü analizine, sosyal buluşmalardan gurme seviye sistemine — yemek deneyimini bir üst seviyeye taşı."
- **3-column grid** of 9 glassmorphism cards, each with:
  - Emoji icon in colored bg circle
  - Tag pill (top-right area)
  - Title + description
  - Cards:
    1. 🤖 AI Menü Analizi — "AI Destekli" — "Yapay zeka ile menüleri tara, yemekleri tanı, alerjen uyarılarını gör..." (blue accent)
    2. 🗺️ Restoran Keşfi — "Konum Bazlı" — "Konumuna göre en yakın restoranları bul..." (green accent)
    3. ⭐ Gurme Seviye Sistemi — "Oyunlaştırma" — "Restoran ziyaretlerin ve deneyimlerin ile XP kazan..." (gold accent)
    4. 🍽️ Co-Dining & Buluşmalar — "Sosyal" — "Arkadaşlarınla ortak yemek odaları oluştur..." (purple accent)
    5. 🎮 Kör Tadım Meydan Okuması — "Oyun" — "Yemek bilgi yarışmasıyla eğlen!..." (red accent)
    6. 🧑‍🍳 Tarifler & Mutfak Atölyesi — "Yaratıcı" — "Yemek tarifleri paylaş ve keşfet..." (teal accent)
    7. ✈️ Gastronomi Seyahat Planlayıcı — "Seyahat" — "Gastronomik gezi planla..." (sky accent)
    8. 💰 Fiyat Karşılaştırma — "Akıllı" — "Aynı yemeği farklı restoranlarda karşılaştır..." (emerald accent)
    9. 📅 Etkinlikler & Özel Günler — "Etkinlik" — "Restoran açılışları, yemek festivalleri..." (pink accent)

### 5. FEATURE SHOWCASE 1: AI Menu Analysis
- **Layout:** 2-column. Left = text, Right = app mockup card
- **Badge:** 🤖 "Yapay Zeka" (blue pill)
- **H3:** "AI ile Menüleri **Anında Analiz Et**" (blue gradient)
- **Description:** "Restoran menüsünü kamerandan tara, yapay zeka yemekleri tanısın. Bilinmeyen yemeklerin açıklamaları, çevirileri, alerjen uyarıları ve içerik bilgileri saniyeler içinde ekranında."
- **4 mini features:** 🔍 Otomatik Menü Tarama, 🌍 Çoklu Dil Çevirisi, ⚠️ Alerjen Uyarıları, 📋 İçerik Detayları
- **Mockup (right):** Glass card showing "AI Menü Analizi" screen with 3 analyzed food items:
  - İskender Kebap (650 kcal, 🥛 Süt, 🌾 Gluten)
  - Künefe (420 kcal, 🥛 Süt, 🌾 Gluten, 🥜 Fıstık)
  - Ayran (80 kcal, 🥛 Süt)

### 6. FEATURE SHOWCASE 2: Gourmet Level System
- **Layout:** 2-column. Left = app mockup, Right = text (reversed)
- **Badge:** 🏆 "Oyunlaştırma" (gold pill)
- **H3:** "Gurme Seviyeni **Yükselt**" (gold gradient)
- **Description:** "Her restoran ziyareti, her değerlendirme ve her keşif seni bir adım öne taşır..."
- **4 mini features:** ⚡ XP & Seviye Sistemi, 🏅 Başarım Rozetleri, 🎯 Günlük Görevler, 💫 Paylaşılabilir Kartlar
- **Mockup (left):** Glass card showing level system:
  - Level 2: Kaşif (🧭) — 195/300 XP progress bar (purple-blue gradient)
  - Mini stats: 47 Ziyaret 🍽️, 8 Şehir 🏙️, 12 Rozet 🏅
  - Level progress icons: 🌱 🧭 🍷 ⭐ 🏆

### 7. TRAVEL SHOWCASE
- **Badge:** ✈️ "Gastronomi Seyahat" (sky blue pill)
- **H2:** "Dünyayı **Tadarak Keşfet**" (blue gradient)
- **Subtitle:** "Gastronomi odaklı seyahat planla..."
- **Destination selector buttons** (horizontal pills): 🇯🇵 Tokyo, 🇮🇹 Roma, 🇹🇷 İstanbul, 🇫🇷 Paris, 🇪🇸 Barcelona, 🇹🇭 Bangkok
- **2-column layout:** Left = destination info card, Right = phone mockup
- Each destination shows: name, country, rating, description, top dishes, tags

### 8. EVENTS SHOWCASE
- **Badge:** 📅 "Etkinlikler & Özel Günler" (pink pill)
- **H2:** "Her Anı **Özel Kıl**" (pink-rose-purple gradient)
- **Two sub-sections:**
  - **Special Days:** Selector buttons — 🎂 Doğum Günü, 💍 Yıldönümü, ❤️ Sevgililer Günü, 👩‍👧 Anneler Günü, 🎓 Mezuniyet, 💐 Evlilik Teklifi
  - **Events Hub:** Cards — 🍴 Restoran Açılışları, 🎪 Yemek Festivalleri, 👨‍🍳 Şef Atölyeleri, 🍷 Tadım Etkinlikleri, 🏆 Yarışmalar, 📸 Food Tour

### 9. RESTAURANT BUSINESS (B2B Section)
- Separate section targeting restaurant owners
- **H2:** "Restoranınızı **Büyütün**" (gold gradient)
- Dashboard mockup showing analytics: revenue, customer stats, ratings
- Features for restaurants: QR Menü, Analitik Panel, Online Sipariş, CRM

### 10. HOW IT WORKS (4 Steps)
- **Badge:** "4 adımda başla" (purple pill)
- **H2:** "Nasıl **çalışır?**" (blue gradient)
- **4-column layout** with connecting line:
  1. 👤 Hesabını Oluştur (gold badge) — E-posta, Şehir, Mutfak, Diyet
  2. 🔍 Restoran Keşfet (blue badge) — Konum, Kategori, AI menü, Fiyat
  3. 📸 Deneyimle & Paylaş (purple badge) — Fiş, Fotoğraf, Değerlendirme, Sosyal
  4. 🏆 Seviye Atla & Eğlen (amber badge) — XP, Başarım, Kör Tadım, Kartlar

### 11. SCREENSHOTS (Tab-Based App Previews)
- Tab navigation for different app screens
- Phone mockups showing actual app screens
- Each tab shows a different feature of the app

### 12. STATS (Animated Counters)
- **H2:** "Rakamlarla **Nyesem**" (gold gradient)
- **Subtitle:** "Büyüyen topluluğumuz ve genişleyen gastronomi ağımız"
- **4-column stat cards:**
  - 👥 10.000+ Aktif Kullanıcı — "Gastronomi tutkunu" (gold gradient number)
  - 🍽️ 5.000+ Restoran — "Kayıtlı mekan" (blue gradient number)
  - ⭐ 50.000+ Değerlendirme — "Kullanıcı yorumu" (purple gradient number)
  - 🌍 20+ Ülke — "Global erişim" (green gradient number)

### 13. TESTIMONIALS (6 Review Cards)
- **Badge:** "Kullanıcı yorumları" (green pill)
- **H2:** "Gurmelerin **tercihi**" (gold gradient)
- **3-column grid** of 6 testimonial cards:
  1. Ayşe Yılmaz — Gastronomi Blogger — İstanbul — "AI menü analizi harika çalışıyor!..." (blue accent)
  2. Mehmet Kaya — Yazılım Mühendisi — Ankara — "Gurme seviye sistemi beni restoranlara gitmeye teşvik ediyor..." (gold accent)
  3. Zeynep Arslan — Fotoğrafçı — İzmir — "Ziyaret albümleri ve paylaşılabilir kartlar muhteşem..." (purple accent)
  4. Can Demir — Üniversite Öğrencisi — Eskişehir — "Fiyat karşılaştırma özelliği..." (green accent)
  5. Elif Şahin — Şef — Gaziantep — "Mutfak atölyesi platformu harika..." (orange accent)
  6. Ali Öztürk — Seyahat Tutkunu — Berlin — "Gastronomi seyahat planlayıcısı sayesinde..." (sky accent)
  - Each card: 5 gold stars, quote text, avatar emoji, name, role, city, tag pill

### 14. FAQ (Accordion)
- **Badge:** "Merak edilenler"
- **H2:** "Sıkça Sorulan **Sorular**" (gold gradient)
- **8 accordion items:**
  1. Nyesem nedir ve nasıl çalışır?
  2. AI menü analizi nasıl çalışıyor?
  3. Uygulama ücretsiz mi?
  4. Hangi ülkelerde kullanabilirim?
  5. Gurme seviye sistemi nasıl işler?
  6. Co-Dining odaları nedir?
  7. Verilerim güvende mi?
  8. Uygulama hangi platformlarda mevcut?

### 15. CTA (Download Section)
- Centered glass card with large border-radius
- 🍽️ icon in gold gradient square
- **H2:** "Gastronomi yolculuğuna **başla**" (gold gradient)
- **Subtitle:** "Binlerce gurme kullanıcıya katıl..."
- **Same download buttons** as hero (App Store gold + Google Play outline)
- **Trust badges:** ✅ Güvenli & Şifreli, 💰 Ücretsiz Başlangıç, ⚡ Hızlı Kurulum

### 16. FOOTER
- **Logo + tagline:** "Gastronomi tutkunları için tasarlanmış sosyal platform. Keşfet, paylaş, birlikte yaşa."
- **Social icons:** Twitter/X, Instagram, LinkedIn, YouTube
- **4 link columns:**
  - Ürün: Özellikler, Nasıl Çalışır, Ekranlar, SSS, Restoranlar İçin, İndir
  - Özellikler: AI Menü Analizi, Gurme Seviye, Co-Dining, Tarifler, Seyahat Planlayıcı
  - Şirket: Hakkımızda, Blog, Kariyer, İletişim, Basın
  - Yasal: Gizlilik Politikası, Kullanım Şartları, Çerez Politikası, KVKK
- **Bottom bar:** © 2026 Nyesem + Gizlilik / Şartlar / Çerezler + 🇹🇷 Türkiye'de ❤️ ile yapıldı

---

## 🖼️ Design Notes for Stitch

1. **Aesthetic:** Premium dark-mode tech startup. Think Linear.app, Raycast.com, or Vercel.com landing pages
2. **Glassmorphism everywhere:** Cards have semi-transparent backgrounds with blur, subtle white borders
3. **Gradient accents:** Gold brand gradient on CTAs and highlighted text; blue gradient as secondary
4. **Phone mockups:** Show dark-themed app screens inside realistic phone frames
5. **Spacing:** Generous — sections have 96-128px vertical padding, 64px between content groups
6. **Animations (implied):** Scroll-triggered fade-up for each section, floating phone mockups
7. **Background pattern:** Subtle grid/dot pattern (2% opacity) behind sections, alternating warm/cool tinted backgrounds
8. **Responsive:** Mobile-first. 2-col grids become stacked on mobile. Phone mockups center below text.
9. **Language:** ALL text is in Turkish. Do not translate or change any text content.
10. **Section background alternation:**
    - Dark (#0D1117): Hero, Features grid, FAQ, Testimonials
    - Warm tint (#151A25 → #0D1117 gradient): LogoBar, Stats, CTA, Events
    - Cool tint (#1E2330 → #16213e): HowItWorks, FeatureShowcase

---

## 📐 Layout Specs
- Max content width: 1280px (max-w-7xl), centered
- Padding: 16px mobile, 24px tablet, 32px desktop (px-4 sm:px-6 lg:px-8)
- Card border-radius: 24px (rounded-3xl)
- Button border-radius: 16px (rounded-2xl)
- Badge/pill border-radius: full (rounded-full)

Design all 15+ sections as a single continuous scrolling page. Make it visually stunning, modern, and premium.
