'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const faqs = [
  {
    question: 'Nyesem nedir ve nasıl çalışır?',
    answer:
      'Nyesem, gastronomi tutkunları için tasarlanmış bir sosyal platformdur. Restoranları keşfeder, AI ile menüleri analiz eder, yemek deneyimlerini paylaşır ve gurme seviyeni yükseltirsin. Hesabını oluştur, şehrini seç ve keşfe başla!',
  },
  {
    question: 'AI menü analizi nasıl çalışıyor?',
    answer:
      'Restoran menüsünün fotoğrafını çektiğinde, yapay zeka modeli yemekleri otomatik olarak tanımlar. Her yemek için açıklama, malzeme listesi, alerjen uyarıları ve farklı dillerde çeviriler sunar. OpenAI teknolojisi ile desteklenmektedir.',
  },
  {
    question: 'Uygulama ücretsiz mi?',
    answer:
      'Nyesem\'in temel özellikleri tamamen ücretsizdir. Restoran keşfi, değerlendirme, sosyal özellikler ve gurme seviye sistemi dahil olmak üzere çoğu özelliği ücretsiz kullanabilirsin. Premium özellikler ileride eklenebilir.',
  },
  {
    question: 'Hangi ülkelerde kullanabilirim?',
    answer:
      'Nyesem şu anda Türkiye başta olmak üzere 20\'den fazla ülkede kullanılabilir. Almanya, İngiltere, Fransa, İtalya, İspanya, Hollanda, ABD, Japonya, BAE ve daha birçok ülkede restoran verilerine erişebilirsin.',
  },
  {
    question: 'Gurme seviye sistemi nasıl işler?',
    answer:
      'Her restoran ziyareti, değerlendirme ve sosyal etkileşim sana XP kazandırır. 5 seviye vardır: Yeni Başlayan (0-100 XP), Kaşif (100-300 XP), Uzman (300-600 XP), Usta (600-1000 XP) ve Efsane (1000+ XP). Her seviyede özel rozetler ve ayrıcalıklar kazanırsın.',
  },
  {
    question: 'Co-Dining odaları nedir?',
    answer:
      'Co-Dining, arkadaşlarınla birlikte yemek planlamak için oluşturabileceğin sanal odalardır. Restoran önerileri, anketler ve grup sohbeti ile herkesin fikrini alarak en iyi seçeneği belirleyebilirsin.',
  },
  {
    question: 'Verilerim güvende mi?',
    answer:
      'Evet, tüm veriler Firebase altyapısı üzerinde güvenli bir şekilde saklanır. Kişisel bilgilerin şifrelenir ve üçüncü taraflarla paylaşılmaz. Uygulama, modern güvenlik standartlarına uygun olarak geliştirilmiştir.',
  },
  {
    question: 'Uygulama hangi platformlarda mevcut?',
    answer:
      'Nyesem şu anda iOS ve Android platformları için geliştirilmektedir. Ayrıca web tarayıcısı üzerinden de bazı özelliklerine erişebilirsin. App Store ve Google Play\'de yakında yayınlanacak.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-dark-900">
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-warm" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-400/20 mb-6">
            <span className="text-sm text-dark-200">Merak edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Sıkça Sorulan{' '}
            <span className="gradient-text">Sorular</span>
          </h2>
          <p className="text-lg text-dark-300">
            Nyesem hakkında merak ettiğin her şeyin cevabı burada.
          </p>
        </AnimateOnScroll>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 50}>
              <div
                className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-brand-400/20 shadow-lg shadow-brand-400/5'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-2xl"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <h3
                    className={`font-display font-semibold transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-dark-200'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-brand-400/15 rotate-180'
                        : 'bg-white/5'
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors duration-300 ${
                        openIndex === index ? 'text-brand-400' : 'text-dark-400'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={openIndex !== index}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-dark-300 leading-relaxed">
                    {faq.answer}
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
