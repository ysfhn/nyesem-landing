'use client';

import AnimateOnScroll from './AnimateOnScroll';

export default function CTA() {
  return (
    <section id="download" className="relative py-24 md:py-32 bg-section-warm overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-10" />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-warm" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="zoom-in">
          <div className="glass rounded-[2rem] p-10 md:p-16 border border-brand-400/15 relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-amber-500 flex items-center justify-center text-3xl mx-auto mb-8">
                🍽️
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
                Gastronomi yolculuğuna{' '}
                <span className="gradient-text">başla</span>
              </h2>
              <p className="text-lg text-dark-300 max-w-xl mx-auto mb-10">
                Binlerce gurme kullanıcıya katıl. Restoranları keşfet, deneyimlerini paylaş
                ve yemek kültürünün bir parçası ol.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="#"
                  aria-label="App Store'dan indir (yakında)"
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-400 to-amber-500 text-dark-900 font-bold rounded-2xl hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Yakında</div>
                    <div className="text-base font-bold">App Store</div>
                  </div>
                </a>

                <a
                  href="#"
                  aria-label="Google Play'den indir (yakında)"
                  className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 border border-white/10 hover:border-white/20"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-50">Yakında</div>
                    <div className="text-base font-bold">Google Play</div>
                  </div>
                </a>
              </div>

              {/* Trust */}
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-dark-400">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Güvenli & Şifreli
                </div>
                <div className="flex items-center gap-2 text-sm text-dark-400">
                  <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ücretsiz Başlangıç
                </div>
                <div className="flex items-center gap-2 text-sm text-dark-400">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Hızlı Kurulum
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
