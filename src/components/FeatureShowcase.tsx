'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const features = [
  {
    id: 'ai',
    tabIcon: '🤖',
    tabLabel: 'AI Menü Analizi',
    badge: { icon: '🤖', text: 'Yapay Zeka', borderColor: 'border-blue-500/20', textColor: 'text-blue-300' },
    title: 'AI ile Menüleri',
    titleGradient: 'Anında Analiz Et',
    gradientClass: 'gradient-text-blue',
    description:
      'Restoran menüsünü kamerandan tara, yapay zeka yemekleri tanısın. Bilinmeyen yemeklerin açıklamaları, çevirileri, alerjen uyarıları ve içerik bilgileri saniyeler içinde ekranında.',
    miniFeatures: [
      { icon: '🔍', text: 'Otomatik Menü Tarama' },
      { icon: '🌍', text: 'Çoklu Dil Çevirisi' },
      { icon: '⚠️', text: 'Alerjen Uyarıları' },
      { icon: '📋', text: 'İçerik Detayları' },
    ],
  },
  {
    id: 'level',
    tabIcon: '🏆',
    tabLabel: 'Gurme Seviye',
    badge: { icon: '🏆', text: 'Oyunlaştırma', borderColor: 'border-brand-400/20', textColor: 'text-brand-300' },
    title: 'Gurme Seviyeni',
    titleGradient: 'Yükselt',
    gradientClass: 'gradient-text',
    description:
      'Her restoran ziyareti, her değerlendirme ve her keşif seni bir adım daha ileriye taşır. 5 farklı seviye, düzinelerce başarım rozeti ve arkadaşlarınla paylaşabileceğin gurme kartları.',
    miniFeatures: [
      { icon: '⚡', text: 'XP & Seviye Sistemi' },
      { icon: '🏅', text: 'Başarım Rozetleri' },
      { icon: '🎯', text: 'Günlük Görevler' },
      { icon: '💫', text: 'Paylaşılabilir Kartlar' },
    ],
  },
  {
    id: 'social',
    tabIcon: '👥',
    tabLabel: 'Sosyal & Co-Dining',
    badge: { icon: '👥', text: 'Sosyal', borderColor: 'border-green-500/20', textColor: 'text-green-300' },
    title: 'Birlikte Yemek,',
    titleGradient: 'Birlikte Keşfet',
    gradientClass: 'bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent',
    description:
      'Co-dining odalarıyla ortak yemek planla, anketlerle restoran belirle, arkadaşlarınla mesajlaş ve QR kod ile anında arkadaş ekle. Yemek deneyimini sosyal hale getir.',
    miniFeatures: [
      { icon: '🏠', text: 'Co-Dining Odaları' },
      { icon: '📊', text: 'Restoran Anketleri' },
      { icon: '💬', text: 'Anlık Mesajlaşma' },
      { icon: '📱', text: 'QR Arkadaşlık' },
    ],
  },
];

function AIMockup() {
  return (
    <div className="glass rounded-3xl p-6 max-w-sm border border-blue-500/10 mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center"><span>🤖</span></div>
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
          { name: 'İskender Kebap', desc: 'İnce dilimlenmiş döner, yoğurt, tereyağlı sos', allergens: ['🥛 Süt', '🌾 Gluten'], cal: '650 kcal' },
          { name: 'Künefe', desc: 'Tel kadayıf, peynir, şerbet tatlısı', allergens: ['🥛 Süt', '🌾 Gluten', '🥜 Fıstık'], cal: '420 kcal' },
          { name: 'Ayran', desc: 'Geleneksel yoğurt içeceği', allergens: ['🥛 Süt'], cal: '80 kcal' },
        ].map((item) => (
          <div key={item.name} className="bg-white/5 rounded-xl p-4 border border-white/5">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-white font-semibold text-sm">{item.name}</h4>
              <span className="text-[10px] text-dark-400">{item.cal}</span>
            </div>
            <p className="text-xs text-dark-400 mb-2">{item.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.allergens.map((a) => (
                <span key={a} className="text-[9px] px-2 py-0.5 rounded-md bg-red-500/10 text-red-300">{a}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LevelMockup() {
  return (
    <div className="glass rounded-3xl p-6 max-w-sm border border-brand-400/10 mx-auto">
      <div className="bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent rounded-2xl p-5 border border-purple-500/10 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center"><span className="text-3xl">🧭</span></div>
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
      <div className="flex items-center gap-2 justify-center">
        {['🌱', '🧭', '🍷', '⭐', '🏆'].map((emoji, i) => (
          <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${i <= 1 ? 'bg-white/10' : 'bg-white/5 opacity-40'}`}>{emoji}</div>
        ))}
      </div>
    </div>
  );
}

function SocialMockup() {
  return (
    <div className="glass rounded-3xl p-6 max-w-sm border border-green-500/10 mx-auto">
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
          <button type="button" className="flex-1 py-2 bg-green-500/20 rounded-xl text-xs text-green-300 font-medium">✓ Katılıyorum</button>
          <button type="button" className="flex-1 py-2 bg-white/5 rounded-xl text-xs text-dark-300">Belki</button>
        </div>
      </div>
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
  );
}

const mockups = [AIMockup, LevelMockup, SocialMockup];

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveMockup = mockups[activeTab];

  return (
    <section className="relative py-16 md:py-24 bg-section-cool overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider-blue" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Özellikler{' '}
            <span className="gradient-text">Detaylı Bakış</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto">
            AI menü analizi, gurme seviye sistemi ve sosyal özellikler — her birini yakından keşfet.
          </p>
        </AnimateOnScroll>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-3 mb-10" role="tablist" aria-label="Özellik detayları">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`feature-panel-${feature.id}`}
              id={`feature-tab-${feature.id}`}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl border transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                activeTab === index
                  ? `glass ${feature.badge.borderColor} shadow-lg ${feature.badge.textColor} scale-[1.03]`
                  : 'bg-white/5 border-white/5 text-dark-400 hover:bg-white/5 hover:text-dark-200'
              }`}
            >
              <span className="text-xl">{feature.tabIcon}</span>
              <span className="hidden sm:inline text-sm">{feature.tabLabel}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          role="tabpanel"
          id={`feature-panel-${features[activeTab].id}`}
          aria-labelledby={`feature-tab-${features[activeTab].id}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border ${features[activeTab].badge.borderColor} mb-6`}>
                <span className="text-sm">{features[activeTab].badge.icon}</span>
                <span className={`text-sm ${features[activeTab].badge.textColor}`}>{features[activeTab].badge.text}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-6">
                {features[activeTab].title}{' '}
                <span className={features[activeTab].gradientClass}>{features[activeTab].titleGradient}</span>
              </h3>
              <p className="text-lg text-dark-300 mb-8 leading-relaxed">
                {features[activeTab].description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features[activeTab].miniFeatures.map((item) => (
                  <div key={item.text} className="flex items-center gap-3 p-3 glass rounded-xl border border-white/5">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-dark-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup Side */}
            <div className="flex justify-center" aria-hidden="true">
              <ActiveMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
