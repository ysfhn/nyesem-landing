'use client';

import AnimateOnScroll from './AnimateOnScroll';

const testimonials = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Gastronomi Blogger',
    avatar: '👩‍🍳',
    rating: 5,
    text: 'AI menü analizi harika çalışıyor! Yurtdışı gezilerimde bilinmeyen yemeklerin alerjen bilgilerini anında görmek hayat kurtarıcı.',
    tag: 'AI Menü',
    city: 'İstanbul',
    accent: 'from-blue-500/20 to-cyan-500/10',
    accentBorder: 'hover:border-blue-500/20',
  },
  {
    name: 'Mehmet Kaya',
    role: 'Yazılım Mühendisi',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Gurme seviye sistemi beni restoranlara gitmeye teşvik ediyor. Arkadaşlarla kimin daha yüksek seviyede olduğunu yarıştırıyoruz!',
    tag: 'Oyunlaştırma',
    city: 'Ankara',
    accent: 'from-brand-400/20 to-amber-500/10',
    accentBorder: 'hover:border-brand-400/20',
  },
  {
    name: 'Zeynep Arslan',
    role: 'Fotoğrafçı',
    avatar: '📸',
    rating: 5,
    text: 'Ziyaret albümleri ve paylaşılabilir kartlar muhteşem. Yemek deneyimlerimi sosyal medyada paylaşmak artık çok kolay ve şık.',
    tag: 'Paylaşım',
    city: 'İzmir',
    accent: 'from-purple-500/20 to-violet-500/10',
    accentBorder: 'hover:border-purple-500/20',
  },
  {
    name: 'Can Demir',
    role: 'Üniversite Öğrencisi',
    avatar: '🧑‍🎓',
    rating: 5,
    text: 'Fiyat karşılaştırma özelliği öğrenci bütçemle uyumlu mekanları bulmamı kolaylaştırdı. Kör tadım oyunu da çok eğlenceli!',
    tag: 'Fiyat',
    city: 'Eskişehir',
    accent: 'from-green-500/20 to-emerald-500/10',
    accentBorder: 'hover:border-green-500/20',
  },
  {
    name: 'Elif Şahin',
    role: 'Şef',
    avatar: '👩‍🍳',
    rating: 5,
    text: 'Mutfak atölyesi platformu harika. Kendi tariflerimi paylaşıp diğer şeflerle etkileşime geçebiliyorum. Topluluk çok destekleyici.',
    tag: 'Atölye',
    city: 'Gaziantep',
    accent: 'from-orange-500/20 to-red-500/10',
    accentBorder: 'hover:border-orange-500/20',
  },
  {
    name: 'Ali Öztürk',
    role: 'Seyahat Tutkunu',
    avatar: '✈️',
    rating: 5,
    text: 'Gastronomi seyahat planlayıcısı sayesinde Berlin\'deki en iyi Türk restoranlarını bile keşfedebildim. Harita özelliği de çok başarılı.',
    tag: 'Seyahat',
    city: 'Berlin',
    accent: 'from-sky-500/20 to-blue-500/10',
    accentBorder: 'hover:border-sky-500/20',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-blue" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 mb-6">
            <span className="text-sm text-dark-200">Kullanıcı yorumları</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Gurmelerin{' '}
            <span className="gradient-text">tercihi</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Binlerce kullanıcının gastronomi deneyimini nasıl dönüştürdüğünü keşfedin.
          </p>
        </AnimateOnScroll>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <AnimateOnScroll key={t.name} animation="fade-up" delay={index * 80}>
              <div
                className={`testimonial-card glass rounded-3xl p-7 border border-white/5 ${t.accentBorder} transition-all duration-300 group h-full relative overflow-hidden`}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 relative z-10" role="img" aria-label={`${t.rating} üzerinden 5 yıldız`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-brand-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-dark-200 text-sm leading-relaxed mb-6 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                      <p className="text-xs text-dark-400">
                        {t.role} • {t.city}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-dark-400">
                    {t.tag}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
