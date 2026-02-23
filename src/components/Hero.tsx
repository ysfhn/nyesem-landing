'use client';

import AnimateOnScroll from './AnimateOnScroll';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-pattern"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-400/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm text-dark-200">
                  Gastronomi dünyasına yeni bir bakış
                </span>
              </div>
            </AnimateOnScroll>

            {/* Title */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] tracking-tight mb-6">
                <span className="text-white">Yemeği</span>{' '}
                <span className="gradient-text">Keşfet</span>
                <br />
                <span className="text-white">Deneyimi</span>{' '}
                <span className="gradient-text">Paylaş</span>
              </h1>
            </AnimateOnScroll>

            {/* Description */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-dark-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Restoranları keşfet, AI ile menüleri analiz et, gurme seviyeni yükselt
                ve arkadaşlarınla unutulmaz yemek deneyimleri yaşa.
                <span className="text-brand-400 font-medium"> Gastronomi sosyal platformu.</span>
              </p>
            </AnimateOnScroll>

            {/* CTA Buttons */}
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                {/* App Store */}
                <a
                  href="#download"
                  aria-label="App Store'dan indir (yakında)"
                  className="group flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-brand-400 to-amber-500 text-dark-900 font-bold rounded-2xl hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Yakında</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="#download"
                  aria-label="Google Play'den indir (yakında)"
                  className="group flex items-center gap-3 px-7 py-4 glass hover:bg-white/10 text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 border border-white/10 hover:border-white/20"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-50">Yakında</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </AnimateOnScroll>

            {/* Social Proof */}
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-2.5">
                  {[
                    { initials: 'AY', bg: 'bg-brand-400/80' },
                    { initials: 'MK', bg: 'bg-sky-500/80' },
                    { initials: 'SE', bg: 'bg-violet-500/80' },
                    { initials: 'DB', bg: 'bg-emerald-500/80' },
                    { initials: '+', bg: 'bg-white/10' },
                  ].map((user, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full ${user.bg} border-2 border-dark-900 flex items-center justify-center`}
                    >
                      <span className={`text-[11px] font-semibold ${i === 4 ? 'text-dark-300' : 'text-white'}`}>
                        {user.initials}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-dark-200 font-medium">
                    Erken erişim açık
                  </p>
                  <p className="text-xs text-dark-400">
                    iOS & Android için yakında
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Phone Mockup */}
          <AnimateOnScroll animation="fade-left" delay={200}>
            <div className="flex justify-center lg:justify-end" aria-hidden="true">
              <div className="relative">
                {/* Phone */}
                <div className="phone-mockup animate-float relative z-10">
                  <div className="phone-screen">
                    <div className="phone-notch" />
                    {/* Screen Content */}
                    <div className="p-5 pt-10">
                      {/* Status bar */}
                      <div className="flex items-center justify-between mb-6 px-1">
                        <span className="text-xs text-dark-300">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-dark-400 rounded-sm" />
                          <div className="w-4 h-2 bg-dark-400 rounded-sm" />
                          <div className="w-6 h-3 bg-brand-400 rounded-sm" />
                        </div>
                      </div>

                      {/* Welcome */}
                      <div className="mb-4">
                        <p className="text-xs text-dark-400 mb-1">Merhaba 👋</p>
                        <h3 className="text-white font-bold text-lg">Ne yemek istersin?</h3>
                      </div>

                      {/* Search */}
                      <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2.5 mb-5 border border-white/5">
                        <svg className="w-4 h-4 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-xs text-dark-400">Restoran ara...</span>
                      </div>

                      {/* Categories */}
                      <div className="flex gap-2 mb-5 overflow-hidden">
                        {[
                          { emoji: '🍔', name: 'Burger' },
                          { emoji: '☕', name: 'Kahve' },
                          { emoji: '🍕', name: 'Pizza' },
                          { emoji: '🍣', name: 'Sushi' },
                        ].map((cat) => (
                          <div
                            key={cat.name}
                            className="flex flex-col items-center gap-1 min-w-[52px]"
                          >
                            <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-lg border border-white/5">
                              {cat.emoji}
                            </div>
                            <span className="text-[10px] text-dark-400">{cat.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Restaurant Card */}
                      <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
                        <div className="w-full h-24 bg-gradient-to-br from-brand-400/20 to-amber-500/10 rounded-xl mb-3 flex items-center justify-center">
                          <span className="text-4xl">🍽️</span>
                        </div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-white font-semibold text-sm">Lezzet Durağı</h4>
                            <p className="text-[10px] text-dark-400 mt-0.5">İstanbul • 0.8 km</p>
                          </div>
                          <div className="flex items-center gap-1 bg-brand-400/10 px-2 py-0.5 rounded-lg">
                            <span className="text-brand-400 text-xs">★</span>
                            <span className="text-brand-400 text-xs font-bold">4.8</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Nav */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-around bg-white/5 rounded-2xl py-3 border border-white/5">
                        {['🏠', '❤️', '📅', '👤'].map((icon, i) => (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              i === 0 ? 'bg-brand-400/20' : ''
                            }`}
                          >
                            <span className="text-sm">{icon}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}
