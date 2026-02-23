'use client';

import AnimateOnScroll from './AnimateOnScroll';

export default function FeatureShowcase() {
  return (
    <section className="relative py-16 md:py-24 bg-section-cool overflow-hidden">

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-blue" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature 1: AI Menu Analysis */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimateOnScroll animation="fade-right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 mb-6">
                <span className="text-sm">🤖</span>
                <span className="text-sm text-blue-300">Yapay Zeka</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-6">
                AI ile Menüleri{' '}
                <span className="gradient-text-blue">Anında Analiz Et</span>
              </h3>
              <p className="text-lg text-dark-300 mb-8 leading-relaxed">
                Restoran menüsünü kamerandan tara, yapay zeka yemekleri tanısın.
                Bilinmeyen yemeklerin açıklamaları, çevirileri, alerjen uyarıları
                ve içerik bilgileri saniyeler içinde ekranında.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🔍', text: 'Otomatik Menü Tarama' },
                  { icon: '🌍', text: 'Çoklu Dil Çevirisi' },
                  { icon: '⚠️', text: 'Alerjen Uyarıları' },
                  { icon: '📋', text: 'İçerik Detayları' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 p-3 glass rounded-xl border border-white/5">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-dark-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" className="flex justify-center">
            <div className="relative" aria-hidden="true">
              <div className="glass rounded-3xl p-6 relative z-10 max-w-sm border border-blue-500/10">
                {/* AI Scan Preview */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <span>🤖</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">AI Menü Analizi</p>
                    <p className="text-xs text-dark-400">3 yemek tanımlandı</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-1 rounded-full">✓ Tamamlandı</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      name: 'İskender Kebap',
                      desc: 'İnce dilimlenmiş döner, yoğurt, tereyağlı sos',
                      allergens: ['🥛 Süt', '🌾 Gluten'],
                      cal: '650 kcal',
                    },
                    {
                      name: 'Künefe',
                      desc: 'Tel kadayıf, peynir, şerbet tatlısı',
                      allergens: ['🥛 Süt', '🌾 Gluten', '🥜 Fıstık'],
                      cal: '420 kcal',
                    },
                    {
                      name: 'Ayran',
                      desc: 'Geleneksel yoğurt içeceği',
                      allergens: ['🥛 Süt'],
                      cal: '80 kcal',
                    },
                  ].map((item) => (
                    <div key={item.name} className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                        <span className="text-[10px] text-dark-400">{item.cal}</span>
                      </div>
                      <p className="text-xs text-dark-400 mb-2">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.allergens.map((a) => (
                          <span key={a} className="text-[9px] px-2 py-0.5 rounded-md bg-red-500/10 text-red-300">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Feature 2: Gourmet Level */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimateOnScroll animation="fade-right" className="flex justify-center order-2 lg:order-1">
            <div className="relative" aria-hidden="true">
              <div className="glass rounded-3xl p-6 relative z-10 max-w-sm border border-brand-400/10">
                {/* Level Card */}
                <div className="bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent rounded-2xl p-5 border border-purple-500/10 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                      <span className="text-3xl">🧭</span>
                    </div>
                    <div>
                      <p className="text-xs text-purple-300">Seviye 2</p>
                      <h4 className="text-xl font-display font-bold text-white">Kaşif</h4>
                    </div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 mb-2">
                    <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-3 rounded-full relative" style={{ width: '65%' }}>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-dark-400">195 / 300 XP</span>
                    <span className="text-purple-300">Sonraki: Uzman 🍷</span>
                  </div>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'Ziyaret', value: '47', icon: '🍽️' },
                    { label: 'Şehir', value: '8', icon: '🏙️' },
                    { label: 'Rozet', value: '12', icon: '🏅' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                      <span className="text-lg block">{s.icon}</span>
                      <span className="text-white font-bold text-lg block">{s.value}</span>
                      <span className="text-[9px] text-dark-400">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Level Progress */}
                <div className="flex items-center gap-2 justify-center">
                  {['🌱', '🧭', '🍷', '⭐', '🏆'].map((emoji, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                        i <= 1 ? 'bg-white/10' : 'bg-white/5 opacity-40'
                      }`}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-400/20 mb-6">
                <span className="text-sm">🏆</span>
                <span className="text-sm text-brand-300">Oyunlaştırma</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-6">
                Gurme Seviyeni{' '}
                <span className="gradient-text">Yükselt</span>
              </h3>
              <p className="text-lg text-dark-300 mb-8 leading-relaxed">
                Her restoran ziyareti, her değerlendirme ve her keşif seni bir adım
                daha ileriye taşır. 5 farklı seviye, düzinelerce başarım rozeti ve
                arkadaşlarınla paylaşabileceğin gurme kartları.
              </p>
              <div className="space-y-4">
                {[
                  { level: 'Yeni Başlayan', xp: '0-100 XP', emoji: '🌱', color: 'text-gray-400' },
                  { level: 'Kaşif', xp: '100-300 XP', emoji: '🧭', color: 'text-blue-400' },
                  { level: 'Uzman', xp: '300-600 XP', emoji: '🍷', color: 'text-purple-400' },
                  { level: 'Usta', xp: '600-1000 XP', emoji: '⭐', color: 'text-amber-400' },
                  { level: 'Efsane', xp: '1000+ XP', emoji: '🏆', color: 'text-red-400' },
                ].map((l) => (
                  <div key={l.level} className="flex items-center gap-4 p-3 glass rounded-xl border border-white/5">
                    <span className="text-2xl">{l.emoji}</span>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${l.color}`}>{l.level}</h4>
                    </div>
                    <span className="text-xs text-dark-400">{l.xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Feature 3: Social */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="fade-right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 mb-6">
                <span className="text-sm">👥</span>
                <span className="text-sm text-green-300">Sosyal</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-6">
                Birlikte Yemek,{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Birlikte Keşfet</span>
              </h3>
              <p className="text-lg text-dark-300 mb-8 leading-relaxed">
                Co-dining odalarıyla ortak yemek planla, anketlerle restoran belirle,
                arkadaşlarınla mesajlaş ve QR kod ile anında arkadaş ekle. Yemek
                deneyimini sosyal hale getir.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🏠', text: 'Co-Dining Odaları', desc: 'Ortak yemek planlama' },
                  { icon: '📊', text: 'Anketler', desc: 'Demokratik restoran seçimi' },
                  { icon: '💬', text: 'Mesajlaşma', desc: 'Anlık sohbet' },
                  { icon: '📱', text: 'QR Arkadaşlık', desc: 'Hızlı bağlantı' },
                ].map((item) => (
                  <div key={item.text} className="glass rounded-xl p-4 border border-white/5">
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.text}</h4>
                    <p className="text-[11px] text-dark-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" className="flex justify-center">
            <div className="relative">
              <div className="glass rounded-3xl p-6 relative z-10 max-w-sm border border-green-500/10">
                {/* Meeting Card */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold text-sm">🍝 Cuma Akşam Yemeği</h4>
                    <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full">Aktif</span>
                  </div>
                  <p className="text-xs text-dark-400 mb-3">📅 Cuma, 20:00 • İtalyan Restoran</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-2">
                      {['👩', '🧑', '👨', '👧'].map((e, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs border-2 border-dark-700">{e}</div>
                      ))}
                    </div>
                    <span className="text-xs text-dark-400">4 kişi katılıyor</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-xl text-xs text-green-300 font-medium transition-colors">
                      ✓ Katılıyorum
                    </button>
                    <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs text-dark-300 transition-colors">
                      Belki
                    </button>
                  </div>
                </div>

                {/* Chat Preview */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm">💬</span>
                    <span className="text-white font-semibold text-xs">Co-Dining Sohbeti</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { user: '👩 Ayşe', msg: 'Ben pizza istiyorum! 🍕', time: '19:45' },
                      { user: '🧑 Mehmet', msg: 'İtalyan restoran olsun mu?', time: '19:46' },
                      { user: '👨 Can', msg: 'Harika fikir! Oy veriyorum 👍', time: '19:47' },
                    ].map((chat, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-2">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[10px] text-dark-300 font-medium">{chat.user}</span>
                          <span className="text-[8px] text-dark-500">{chat.time}</span>
                        </div>
                        <p className="text-[10px] text-dark-400">{chat.msg}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
