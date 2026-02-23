'use client';

import AnimateOnScroll from './AnimateOnScroll';

const steps = [
  {
    number: '01',
    title: 'Hesabını Oluştur',
    description:
      'Hızlıca kayıt ol, şehrini seç ve yemek tercihlerini belirle. Kişiselleştirilmiş keşif deneyimin hemen başlasın.',
    icon: '👤',
    colorClass: 'bg-brand-400',
    details: ['E-posta ile kayıt', 'Şehir seçimi', 'Mutfak tercihleri', 'Diyet bilgileri'],
  },
  {
    number: '02',
    title: 'Restoran Keşfet',
    description:
      'Yakınındaki restoranları bul, menüleri AI ile analiz et, fiyat karşılaştır ve en iyi seçeneği belirle.',
    icon: '🔍',
    colorClass: 'bg-blue-400',
    details: ['Konum bazlı arama', 'Kategori filtreleme', 'AI menü tarama', 'Fiyat karşılaştırma'],
  },
  {
    number: '03',
    title: 'Deneyimle & Paylaş',
    description:
      'Ziyaretlerini kaydet, fotoğraf albümleri oluştur, fişini doğrula ve deneyimlerini arkadaşlarınla paylaş.',
    icon: '📸',
    colorClass: 'bg-purple-400',
    details: ['Fiş doğrulama', 'Fotoğraf albümleri', 'Değerlendirme & yorum', 'Sosyal paylaşım'],
  },
  {
    number: '04',
    title: 'Seviye Atla & Eğlen',
    description:
      'Gurme seviyeni yükselt, başarımlar kazan, kör tadım oyna ve gastronomi topluluğunda yerini al.',
    icon: '🏆',
    colorClass: 'bg-amber-400',
    details: ['XP & seviye sistemi', 'Başarım rozetleri', 'Kör tadım oyunu', 'Paylaşılabilir kartlar'],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 bg-section-cool">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-warm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 mb-6">
            <span className="text-sm text-dark-200">4 adımda başla</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Nasıl{' '}
            <span className="gradient-text-blue">çalışır?</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Nyesem ile gastronomi yolculuğuna başlamak çok kolay. Sadece 4 adımda
            tüm özelliklere eriş.
          </p>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-white/10" />

          {steps.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="relative text-center group">
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/10 mx-auto">
                    {step.icon}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-lg ${step.colorClass} flex items-center justify-center`}>
                    <span className="text-xs font-bold text-dark-900">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-dark-300 mb-5 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {step.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-2 justify-center text-xs text-dark-400"
                    >
                      <svg className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
