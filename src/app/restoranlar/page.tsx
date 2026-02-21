'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import ThemeToggle from '@/components/ThemeToggle';

/* ─── DATA ─── */
const benefits = [
  {
    icon: '📊',
    title: 'Detaylı Analitik Paneli',
    description: 'Görüntülenme, favori eklenme, ziyaret oranları ve müşteri demografisi. Haftalık ve aylık trend raporları.',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: '⭐',
    title: 'Değerlendirme & Yorum Yönetimi',
    description: 'Verified receipt ile doğrulanmış yorumları görün, yanıtlayın. Sahte yorumları otomatik filtreleyin.',
    gradient: 'from-brand-400/20 to-amber-500/10',
    border: 'border-brand-400/20',
  },
  {
    icon: '🤖',
    title: 'AI Menü Entegrasyonu',
    description: 'Kullanıcılar menünüzü AI ile tarasın. Yemeklerinizin alerjen bilgileri, çevirileri ve açıklamaları otomatik oluşsun.',
    gradient: 'from-purple-500/20 to-violet-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: '📍',
    title: 'Konum Bazlı Keşif',
    description: 'Yakınındaki kullanıcılara öncelikli gösterilme. Kategori, mutfak ve mesafe filtrelerinde üst sıralarda yer alın.',
    gradient: 'from-green-500/20 to-emerald-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: '📅',
    title: 'Etkinlik & Kampanya',
    description: 'Açılış duyuruları, şef atölyeleri, tadım etkinlikleri ve özel gün kampanyaları oluşturun.',
    gradient: 'from-pink-500/20 to-rose-500/10',
    border: 'border-pink-500/20',
  },
  {
    icon: '🍽️',
    title: 'Co-Dining & Buluşmalar',
    description: 'Grup buluşma anketlerinde önerilecek restoran olun. Özel gün menüleri ile fark yaratın.',
    gradient: 'from-orange-500/20 to-amber-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: '💰',
    title: 'Fiyat Karşılaştırma Listesi',
    description: 'Fiyat karşılaştırma özelliğinde yer alarak rekabetçi avantaj kazanın.',
    gradient: 'from-emerald-500/20 to-green-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: '✈️',
    title: 'Seyahat Rehberi Entegrasyonu',
    description: 'Turistik nokta rehberlerinde restoranınız önerilsin. Uluslararası misafirlere ulaşın.',
    gradient: 'from-sky-500/20 to-blue-500/10',
    border: 'border-sky-500/20',
  },
  {
    icon: '🏆',
    title: 'Gurme Rozet Programı',
    description: 'Kullanıcıların gurme seviye hedeflerinde yer alarak organik ziyaretçi çekin.',
    gradient: 'from-amber-500/20 to-yellow-500/10',
    border: 'border-amber-500/20',
  },
];

const pricingPlans = [
  {
    name: 'Başlangıç',
    price: 'Ücretsiz',
    period: 'Sonsuza kadar',
    description: 'Küçük restoranlar için temel özellikler',
    features: [
      'Restoran profil sayfası',
      'Menü yönetimi',
      'Temel analitik',
      'Yorum görüntüleme',
      'Haritada görünürlük',
      'Co-dining görünürlüğü',
    ],
    cta: 'Ücretsiz Başla',
    highlight: false,
    border: 'border-white/10',
  },
  {
    name: 'Profesyonel',
    price: '₺499',
    period: '/ay',
    description: 'Büyüyen restoranlar için gelişmiş araçlar',
    features: [
      'Başlangıç planının tüm özellikleri',
      'Detaylı analitik & raporlar',
      'Yorum yanıtlama',
      'AI menü entegrasyonu',
      'Etkinlik oluşturma',
      'Özel gün menü önerileri',
      'Öncelikli destek',
    ],
    cta: 'Profesyonel Başla',
    highlight: true,
    border: 'border-brand-400/30',
  },
  {
    name: 'Kurumsal',
    price: 'Özel',
    period: 'Teklif alın',
    description: 'Restoran zincirleri için özel çözümler',
    features: [
      'Profesyonel planın tüm özellikleri',
      'Çoklu şube yönetimi',
      'API erişimi',
      'Özel marka sayfası',
      'Reklam & sponsorlu görünürlük',
      'Seyahat rehberi entegrasyonu',
      'Kişisel hesap yöneticisi',
    ],
    cta: 'İletişime Geçin',
    highlight: false,
    border: 'border-white/10',
  },
];

const testimonials = [
  {
    name: 'Ahmet Y.',
    role: 'Restoran Sahibi',
    restaurant: 'Kebap Evi, İstanbul',
    avatar: '👨‍🍳',
    text: 'Nyesem sayesinde günlük müşteri sayımız %30 arttı. Analitik panel ile hangi yemeklerimizin daha popüler olduğunu görebiliyoruz.',
    rating: 5,
  },
  {
    name: 'Zeynep K.',
    role: 'Kafe Yöneticisi',
    restaurant: 'Kahve & Tatlı, Ankara',
    avatar: '👩',
    text: 'AI menü entegrasyonu harika! Müşteriler menümüzü taradığında yemeklerimizin detaylı açıklamalarını görebiliyorlar.',
    rating: 5,
  },
  {
    name: 'Mehmet B.',
    role: 'Şef & İşletmeci',
    restaurant: 'Fine Dining, İzmir',
    avatar: '🧑‍🍳',
    text: 'Etkinlik özelliği ile şef atölyelerimize Nyesem üzerinden 50+ katılımcı çektik. Mükemmel bir platform.',
    rating: 5,
  },
];

const howItWorks = [
  { step: '01', icon: '📝', title: 'Kayıt Olun', description: 'E-posta adresiniz ve restoran bilgilerinizle 2 dakikada kaydolun.' },
  { step: '02', icon: '🏪', title: 'Profilinizi Oluşturun', description: 'Menünüzü, fotoğraflarınızı ve çalışma saatlerinizi ekleyin.' },
  { step: '03', icon: '🚀', title: 'Kullanıcılara Ulaşın', description: 'Binlerce gurme kullanıcının keşif sayfasında yer alın.' },
  { step: '04', icon: '📊', title: 'Analiz & Büyüme', description: 'Verilerinizi takip edin, stratejinizi optimize edin, büyüyün.' },
];

/* ─── COMPONENT ─── */
export default function RestoranlarPage() {

  return (
    <main className="min-h-screen bg-dark-900">
      {/* Navbar */}
      <nav aria-label="Restoranlar navigasyon" className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-amber-500 flex items-center justify-center shadow-lg shadow-brand-400/20">
                <span className="text-lg">🍽️</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Nyesem
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 font-medium border border-orange-500/20">
                İşletme
              </span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {[
                { href: '#features', label: 'Özellikler' },
                { href: '#pricing', label: 'Fiyatlandırma' },
                { href: '#how-it-works', label: 'Nasıl Çalışır' },
                { href: '#testimonials', label: 'Yorumlar' },
                { href: '#get-started', label: 'Başlayın' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-dark-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#get-started"
                className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-brand-400 text-dark-900 font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Ücretsiz Başla
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="fade-right">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/20 mb-6">
                  <span className="text-sm">🏪</span>
                  <span className="text-sm text-orange-300">Restoranlar İçin Nyesem</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
                  Restoranınızı{' '}
                  <span className="bg-gradient-to-r from-orange-400 via-brand-400 to-amber-400 bg-clip-text text-transparent">
                    Binlerce Gurmede
                  </span>{' '}
                  Öne Çıkarın
                </h1>
                <p className="text-lg md:text-xl text-dark-300 mb-8 leading-relaxed max-w-lg">
                  10.000+ aktif gastronomi tutkununa ulaşın. Detaylı analitik, AI menü
                  entegrasyonu, etkinlik yönetimi ve daha fazlası ile restoranınızı büyütün.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="#get-started"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-brand-400 text-dark-900 font-bold text-lg rounded-2xl hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Ücretsiz Başla
                    <span>→</span>
                  </a>
                  <a
                    href="#features"
                    className="flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                  >
                    Özellikleri İncele
                  </a>
                </div>
                <div className="flex items-center gap-6 flex-wrap">
                  {[
                    { icon: '✓', text: 'Ücretsiz başlangıç' },
                    { icon: '✓', text: '2 dakikada kayıt' },
                    { icon: '✓', text: 'Kredi kartı gerekmez' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-dark-400">
                      <span className="text-green-400 font-bold">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Hero Dashboard Preview */}
            <AnimateOnScroll animation="fade-left" className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="glass rounded-3xl p-6 relative z-10 border border-orange-500/10 max-w-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-brand-400/20 flex items-center justify-center">
                      <span className="text-xl">🏪</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">İşletme Paneli</p>
                      <p className="text-[10px] text-dark-400">Nyesem Business Dashboard</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[9px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full">● Aktif</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { label: 'Bu Ay Görüntülenme', value: '12.4K', change: '+23%', positive: true },
                      { label: 'Yeni Favoriler', value: '342', change: '+15%', positive: true },
                      { label: 'Yorum Puanı', value: '4.8', change: '+0.2', positive: true },
                      { label: 'Etkinlik Katılımı', value: '89', change: '+45%', positive: true },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <p className="text-[8px] text-dark-500 mb-1">{s.label}</p>
                        <div className="flex items-end gap-1.5">
                          <span className="text-white font-bold text-lg">{s.value}</span>
                          <span className={`text-[9px] font-medium ${s.positive ? 'text-green-400' : 'text-red-400'}`}>
                            {s.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 mb-3">
                    <p className="text-[10px] text-dark-400 mb-2">📈 Haftalık Trend</p>
                    <div className="flex items-end gap-1 h-12">
                      {[30, 45, 35, 55, 50, 70, 85].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-t ${i >= 5 ? 'bg-gradient-to-t from-orange-500/80 to-brand-400' : 'bg-white/10'}`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 py-2 bg-orange-500/20 rounded-xl text-center">
                      <span className="text-[10px] text-orange-300 font-medium">Menü Düzenle</span>
                    </div>
                    <div className="flex-1 py-2 bg-white/5 rounded-xl text-center">
                      <span className="text-[10px] text-dark-300">Yorumlar</span>
                    </div>
                    <div className="flex-1 py-2 bg-white/5 rounded-xl text-center">
                      <span className="text-[10px] text-dark-300">Etkinlik</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section id="features" className="relative py-24 md:py-32 bg-dark-800/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
              Restoranınız İçin{' '}
              <span className="gradient-text">Güçlü Araçlar</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Müşteri kazanımından analiz paneline kadar ihtiyacınız olan her şey tek platformda.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} animation="fade-up" delay={i * 80}>
                <div className={`glass rounded-2xl p-6 border ${b.border} group hover:scale-[1.02] transition-all duration-300 h-full`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    {b.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-dark-400 leading-relaxed">{b.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-400/20 mb-6">
              <span className="text-sm">🚀</span>
              <span className="text-sm text-brand-300">Kolay Başlangıç</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
              4 Adımda{' '}
              <span className="gradient-text">Hemen Başlayın</span>
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <AnimateOnScroll key={step.step} animation="fade-up" delay={i * 120}>
                <div className="relative glass rounded-2xl p-6 border border-white/5 text-center group hover:border-brand-400/20 transition-all">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-brand-400 flex items-center justify-center text-dark-900 font-bold text-xs shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mx-auto mt-4 mb-4 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-dark-400">{step.description}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-dark-600 text-xl">→</div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="relative py-24 md:py-32 bg-dark-800/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 mb-6">
              <span className="text-sm">💎</span>
              <span className="text-sm text-emerald-300">Fiyatlandırma</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
              İşletmenize Uygun{' '}
              <span className="gradient-text">Plan Seçin</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Ücretsiz başlayın, büyüdükçe yükseltin. Taahhüt yok, istediğiniz zaman iptal.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimateOnScroll key={plan.name} animation="fade-up" delay={i * 100}>
                <div
                  className={`relative glass rounded-3xl p-8 border ${plan.border} h-full flex flex-col ${
                    plan.highlight ? 'ring-2 ring-brand-400/30 scale-[1.02]' : ''
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-brand-400 rounded-full text-dark-900 text-xs font-bold">
                      En Popüler
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                    <p className="text-sm text-dark-400 mb-4">{plan.description}</p>
                    <div className="flex items-end gap-1">
                      <span className="text-3xl md:text-4xl font-display font-extrabold text-white">{plan.price}</span>
                      <span className="text-dark-400 text-sm mb-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-dark-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#get-started"
                    className={`block w-full py-3 rounded-xl text-center font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-orange-500 to-brand-400 text-dark-900 hover:shadow-lg hover:shadow-brand-400/20'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
              İşletme Sahipleri{' '}
              <span className="gradient-text">Ne Diyor?</span>
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} animation="fade-up" delay={i * 100}>
                <div className="glass rounded-2xl p-6 border border-white/5 h-full">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-brand-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-dark-300 text-sm leading-relaxed mb-6">&quot;{t.text}&quot;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-[11px] text-dark-400">{t.role} • {t.restaurant}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GET STARTED (CTA → App Login/Register) ─── */}
      <section id="get-started" className="relative py-24 md:py-32 bg-dark-800/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="zoom-in">
            <div className="glass rounded-[2rem] p-10 md:p-16 border border-brand-400/10 text-center">

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-brand-400 flex items-center justify-center text-3xl mx-auto mb-8">
                  🏪
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
                  Hemen{' '}
                  <span className="gradient-text">Başlayın</span>
                </h2>
                <p className="text-lg text-dark-300 max-w-xl mx-auto mb-10">
                  Uygulamadaki mevcut hesabınızla giriş yapın veya yeni bir hesap oluşturun.
                  Restoranınızı binlerce gurme kullanıcıya tanıtmaya hemen başlayın.
                </p>

                {/* Auth CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <a
                    href="#"
                    className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-brand-400 text-dark-900 font-bold text-lg rounded-2xl hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="text-xl">📝</span>
                    <span>Kayıt Ol</span>
                  </a>
                  <a
                    href="#"
                    className="group flex items-center justify-center gap-3 px-8 py-4 glass text-white font-bold text-lg rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-xl">🔑</span>
                    <span>Giriş Yap</span>
                  </a>
                </div>

                {/* Info note */}
                <div className="glass rounded-2xl p-5 max-w-md mx-auto border border-white/5 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">💡</span>
                    <div className="text-left">
                      <p className="text-white font-semibold text-sm mb-1">Mevcut hesabınız var mı?</p>
                      <p className="text-xs text-dark-400 leading-relaxed">
                        Nyesem uygulamasındaki mevcut e-posta ve şifrenizle giriş yapabilirsiniz.
                        Henüz hesabınız yoksa, kayıt ol butonuyla uygulamadan hızlıca oluşturun.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  {[
                    { icon: '🔒', text: 'SSL Şifreli' },
                    { icon: '🛡️', text: 'KVKK Uyumlu' },
                    { icon: '⚡', text: '7/24 Destek' },
                    { icon: '✓', text: 'Ücretsiz Başlangıç' },
                  ].map((badge) => (
                    <div key={badge.text} className="flex items-center gap-2 text-sm text-dark-400">
                      <span>{badge.icon}</span>
                      {badge.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative bg-dark-900 border-t border-white/5" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-amber-500 flex items-center justify-center shadow-lg shadow-brand-400/20">
                <span className="text-lg">🍽️</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Nyesem
              </span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-sm text-dark-400 hover:text-white transition-colors">Ana Sayfa</a>
              <a href="#features" className="text-sm text-dark-400 hover:text-white transition-colors">Özellikler</a>
              <a href="#pricing" className="text-sm text-dark-400 hover:text-white transition-colors">Fiyatlandırma</a>
              <a href="#get-started" className="text-sm text-dark-400 hover:text-white transition-colors">Başlayın</a>
            </div>
            <p className="text-sm text-dark-500">
              © {new Date().getFullYear()} Nyesem. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
