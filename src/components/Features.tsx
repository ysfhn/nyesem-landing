'use client';

import AnimateOnScroll from './AnimateOnScroll';

const features = [
  {
    icon: '🤖',
    title: 'AI Menü Analizi',
    description:
      'Yapay zeka ile menüleri tara, yemekleri tanı, alerjen uyarılarını gör ve bilinmeyen yemeklerin açıklamalarını anında al.',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/10',
    iconBg: 'bg-blue-500/15',
    tag: 'AI Destekli',
  },
  {
    icon: '🗺️',
    title: 'Restoran Keşfi',
    description:
      'Konumuna göre en yakın restoranları bul, kategori, fiyat ve mesafeye göre filtrele. Harita veya liste görünümünde keşfet.',
    gradient: 'from-green-500/20 to-emerald-500/10',
    border: 'border-green-500/10',
    iconBg: 'bg-green-500/15',
    tag: 'Konum Bazlı',
  },
  {
    icon: '⭐',
    title: 'Gurme Seviye Sistemi',
    description:
      'Restoran ziyaretlerin ve deneyimlerin ile XP kazan. Yeni Başlayan\'dan Efsane\'ye yüksel, başarımlar aç ve gurme kartını paylaş.',
    gradient: 'from-brand-400/20 to-amber-500/10',
    border: 'border-brand-400/10',
    iconBg: 'bg-brand-400/15',
    tag: 'Oyunlaştırma',
  },
  {
    icon: '🍽️',
    title: 'Co-Dining & Buluşmalar',
    description:
      'Arkadaşlarınla ortak yemek odaları oluştur, buluşma planları yap, anketlerle restoran belirle ve birlikte deneyimle.',
    gradient: 'from-purple-500/20 to-violet-500/10',
    border: 'border-purple-500/10',
    iconBg: 'bg-purple-500/15',
    tag: 'Sosyal',
  },
  {
    icon: '🎮',
    title: 'Kör Tadım Meydan Okuması',
    description:
      'Yemek bilgi yarışmasıyla eğlen! Günlük meydan okumalar, farklı mutfak kategorileri ve liderlik tablosu ile rekabet et.',
    gradient: 'from-red-500/20 to-orange-500/10',
    border: 'border-red-500/10',
    iconBg: 'bg-red-500/15',
    tag: 'Oyun',
  },
  {
    icon: '🧑‍🍳',
    title: 'Tarifler & Mutfak Atölyesi',
    description:
      'Yemek tarifleri paylaş ve keşfet, AI ile tarif üret, pişirme modunda adım adım ilerle, atölyelere katıl.',
    gradient: 'from-teal-500/20 to-cyan-500/10',
    border: 'border-teal-500/10',
    iconBg: 'bg-teal-500/15',
    tag: 'Yaratıcı',
  },
  {
    icon: '✈️',
    title: 'Gastronomi Seyahat Planlayıcı',
    description:
      'Gastronomik gezi planla, şehir rehberleri ile yerel lezzetleri keşfet, uçuş & otel bağlantıları ile tatilini organize et.',
    gradient: 'from-sky-500/20 to-blue-500/10',
    border: 'border-sky-500/10',
    iconBg: 'bg-sky-500/15',
    tag: 'Seyahat',
  },
  {
    icon: '💰',
    title: 'Fiyat Karşılaştırma',
    description:
      'Aynı yemeği farklı restoranlarda karşılaştır. En uygun fiyatı ve en iyi kalite-fiyat oranını anında bul.',
    gradient: 'from-emerald-500/20 to-green-500/10',
    border: 'border-emerald-500/10',
    iconBg: 'bg-emerald-500/15',
    tag: 'Akıllı',
  },
  {
    icon: '📅',
    title: 'Etkinlikler & Özel Günler',
    description:
      'Restoran açılışları, yemek festivalleri ve şef atölyeleri gibi gastronomi etkinliklerini keşfet. Özel günlerin için hatırlatıcılar kur.',
    gradient: 'from-pink-500/20 to-rose-500/10',
    border: 'border-pink-500/10',
    iconBg: 'bg-pink-500/15',
    tag: 'Etkinlik',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-dark-900">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-15" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-warm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-400/20 mb-6">
            <span className="text-sm text-dark-200">Her şey tek uygulamada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Gastronomi için{' '}
            <span className="gradient-text">ihtiyacın olan her şey</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Restoran keşfinden AI menü analizine, sosyal buluşmalardan gurme seviye sistemine —
            yemek deneyimini bir üst seviyeye taşı.
          </p>
        </AnimateOnScroll>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimateOnScroll
              key={feature.title}
              animation="fade-up"
              delay={index * 80}
              className="h-full"
            >
              <div
                className={`feature-card h-full glass rounded-3xl p-7 ${feature.border} hover:border-white/10 group relative overflow-hidden`}
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.gradient} opacity-60`}
                />

                <div className="relative z-10">
                  {/* Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-dark-400 font-semibold px-3 py-1 rounded-full bg-white/5">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-dark-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
