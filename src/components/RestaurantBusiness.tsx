'use client';

import AnimateOnScroll from './AnimateOnScroll';

const benefits = [
  {
    icon: '📊',
    title: 'Detaylı Analitik',
    description: 'Ziyaretçi profilleri, favori yemekler, yoğun saatler ve müşteri davranış analizleri ile restoranınızı veri odaklı yönetin.',
    color: 'border-blue-500/20',
    iconBg: 'bg-blue-500/15',
  },
  {
    icon: '⭐',
    title: 'Değerlendirme & Yorum',
    description: 'Gerçek kullanıcı yorumlarını görün, yanıtlayın ve puanınızı yükseltin. Verified receipt sistemi ile sahte yorumları engelleyin.',
    color: 'border-brand-400/20',
    iconBg: 'bg-brand-400/15',
  },
  {
    icon: '📍',
    title: 'Konum Bazlı Görünürlük',
    description: 'Yakınındaki kullanıcıların keşif sayfasında öne çıkın. Kategori, mutfak ve mesafe filtrelerinde üst sıralarda yer alın.',
    color: 'border-green-500/20',
    iconBg: 'bg-green-500/15',
  },
  {
    icon: '🤖',
    title: 'AI Menü Entegrasyonu',
    description: 'Menünüzü AI ile taranabilir hale getirin. Kullanıcılar menünüzü fotoğraflasın, AI yemeklerinizi tanıtsın.',
    color: 'border-purple-500/20',
    iconBg: 'bg-purple-500/15',
  },
  {
    icon: '📅',
    title: 'Etkinlik & Atölye',
    description: 'Restoran açılışı, şef atölyesi, tadım etkinliği düzenleyin ve Nyesem kullanıcılarına ulaşın.',
    color: 'border-pink-500/20',
    iconBg: 'bg-pink-500/15',
  },
  {
    icon: '🍽️',
    title: 'Co-Dining Entegrasyonu',
    description: 'Grup buluşma planlarında önerilecek restoran olun. Co-dining anketlerinde görünür olun.',
    color: 'border-orange-500/20',
    iconBg: 'bg-orange-500/15',
  },
];

export default function RestaurantBusiness() {
  return (
    <section id="restaurants" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-warm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/20 mb-6">
            <span className="text-sm">🏪</span>
            <span className="text-sm text-orange-300">Restoranlar İçin</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Restoranınızı{' '}
            <span className="bg-gradient-to-r from-orange-400 via-brand-400 to-amber-400 bg-clip-text text-transparent">
              Binlerce Gurmede Öne Çıkarın
            </span>
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto">
            Nyesem&apos;in 10.000+ aktif kullanıcısına restoranınızı tanıtın.
            Detaylı analitik, AI menü entegrasyonu ve etkinlik yönetimi ile müşteri deneyimini zirveye taşıyın.
          </p>
        </AnimateOnScroll>

        {/* Main Feature: Left Text, Right Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimateOnScroll animation="fade-right">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-6">
                İşletme Paneliniz{' '}
                <span className="gradient-text">Her Şeyi Kontrol Altında</span>
              </h3>
              <p className="text-dark-300 mb-8 leading-relaxed">
                Restoranınızın Nyesem profilini yönetin, menünüzü güncelleyin, yorumları
                yanıtlayın, etkinlikler oluşturun ve detaylı analizlerle müşterilerinizi
                daha yakından tanıyın — tek panel üzerinden.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: '✅', text: 'Menü yönetimi ve güncelleme', desc: 'Fotoğraf, fiyat ve açıklamaları kolayca düzenleyin' },
                  { icon: '✅', text: 'Gerçek zamanlı istatistikler', desc: 'Görüntülenme, favori eklenme ve ziyaret verileri' },
                  { icon: '✅', text: 'Yorum yönetimi ve yanıtlama', desc: 'Verified receipt ile doğrulanmış yorumlar' },
                  { icon: '✅', text: 'Etkinlik ve kampanya oluşturma', desc: 'Özel gün indirimleri, atölyeler ve açılış duyuruları' },
                  { icon: '✅', text: 'Özel gün menü önerileri', desc: 'Doğum günü, yıldönümü gibi özel günlerde öne çıkın' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-green-400 text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{item.text}</h4>
                      <p className="text-xs text-dark-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/restoranlar"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-brand-400 text-dark-900 font-bold rounded-xl hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Restoranınızı Kaydedin
                <span>→</span>
              </a>
            </div>
          </AnimateOnScroll>

          {/* Dashboard Mockup */}
          <AnimateOnScroll animation="fade-left" className="flex justify-center">
            <div className="relative w-full max-w-md" aria-hidden="true">
              <div className="glass rounded-3xl p-6 relative z-10 border border-orange-500/10">
                {/* Dashboard Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-brand-400/20 flex items-center justify-center">
                    <span className="text-xl">🏪</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Lezzet Durağı</p>
                    <p className="text-[10px] text-dark-400">İstanbul, Kadıköy • Türk Mutfağı</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="text-brand-400 text-xs">★</span>
                    <span className="text-white font-bold text-sm">4.8</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { label: 'Bu Hafta', value: '342', sub: 'görüntülenme', trend: '↑12%', trendColor: 'text-green-400' },
                    { label: 'Favoriler', value: '89', sub: 'yeni ekleme', trend: '↑8%', trendColor: 'text-green-400' },
                    { label: 'Yorumlar', value: '24', sub: 'bu ay', trend: '↑5%', trendColor: 'text-green-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                      <p className="text-white font-bold text-lg">{stat.value}</p>
                      <p className="text-[8px] text-dark-500">{stat.sub}</p>
                      <span className={`text-[9px] font-medium ${stat.trendColor}`}>{stat.trend}</span>
                    </div>
                  ))}
                </div>

                {/* Mini Chart */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-white font-medium text-xs">📈 Haftalık Görüntülenme</p>
                    <span className="text-[9px] text-green-400">+12%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[35, 45, 30, 60, 50, 75, 65].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className={`w-full rounded-t-md ${i === 5 ? 'bg-gradient-to-t from-brand-400 to-amber-400' : 'bg-white/10'}`}
                          style={{ height: `${h}%` }}
                        />
                        <span className="text-[7px] text-dark-500">
                          {['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pa'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Review */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] text-dark-400 font-medium">💬 Son Yorum</p>
                    <span className="text-[8px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded-full">✓ Doğrulanmış</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0">👩</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium text-[11px]">Ayşe K.</span>
                        <div className="flex gap-0.5" role="img" aria-label="5 üzerinden 5 yıldız">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <span key={s} className="text-brand-400 text-[8px]">★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[9px] text-dark-400 mt-0.5">&quot;İskender kebap muhteşemdi! Kesinlikle tekrar geleceğim.&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Benefits — compact inline row */}
        <AnimateOnScroll animation="fade-up" className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-3">
              Neden{' '}
              <span className="gradient-text">Nyesem?</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className={`glass rounded-xl p-4 border ${b.color} text-center group hover:scale-[1.03] transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-lg ${b.iconBg} flex items-center justify-center text-xl mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                  {b.icon}
                </div>
                <h4 className="text-white font-bold text-xs mb-1">{b.title}</h4>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* CTA Banner */}
        <AnimateOnScroll animation="zoom-in">
          <div className="relative overflow-hidden rounded-3xl glass border border-brand-400/10 p-8 md:p-14 text-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-brand-400 flex items-center justify-center text-3xl mx-auto mb-6 shadow-2xl shadow-brand-400/20">
                🏪
              </div>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white mb-4">
                Restoranınızı Nyesem&apos;e{' '}
                <span className="gradient-text">Hemen Ekleyin</span>
              </h3>
              <p className="text-dark-300 max-w-xl mx-auto mb-8">
                Ücretsiz başlayın, binlerce gurme kullanıcıya ulaşın. Kayıt süreci yalnızca 2 dakika.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/restoranlar"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-brand-400 text-dark-900 font-bold text-lg rounded-2xl hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Ücretsiz Kayıt Ol
                  <span>→</span>
                </a>
                <a
                  href="/restoranlar"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold text-lg rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
                >
                  Detaylı Bilgi
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
