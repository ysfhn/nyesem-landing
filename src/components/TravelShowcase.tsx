'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const destinations = [
  { city: 'İstanbul', country: 'Türkiye', emoji: '🇹🇷', dishes: ['Kebap', 'Baklava', 'Çay'], color: 'from-red-500/20 to-orange-500/10' },
  { city: 'Paris', country: 'Fransa', emoji: '🇫🇷', dishes: ['Croissant', 'Crêpe', 'Macaron'], color: 'from-blue-500/20 to-indigo-500/10' },
  { city: 'Roma', country: 'İtalya', emoji: '🇮🇹', dishes: ['Carbonara', 'Gelato', 'Tiramisu'], color: 'from-green-500/20 to-emerald-500/10' },
  { city: 'Tokyo', country: 'Japonya', emoji: '🇯🇵', dishes: ['Ramen', 'Sushi', 'Matcha'], color: 'from-pink-500/20 to-rose-500/10' },
  { city: 'Barcelona', country: 'İspanya', emoji: '🇪🇸', dishes: ['Paella', 'Tapas', 'Churros'], color: 'from-amber-500/20 to-yellow-500/10' },
  { city: 'New York', country: 'ABD', emoji: '🇺🇸', dishes: ['Burger', 'Cheesecake', 'Bagel'], color: 'from-purple-500/20 to-violet-500/10' },
];

const travelFeatures = [
  {
    icon: '🍽️',
    title: 'Yerel Lezzet Veritabanı',
    description: '15+ şehir, 100+ yerel yemek ve içecek. Her birinin açıklaması, fiyatı, etiketleri ve görselleri ile.',
    color: 'border-orange-500/20',
    iconBg: 'bg-orange-500/15',
  },
  {
    icon: '⭐',
    title: 'Michelin Restoran Rehberi',
    description: '8 ülkede Michelin yıldızlı restoranlar. Doğrudan Michelin rehberine bağlantılar.',
    color: 'border-red-500/20',
    iconBg: 'bg-red-500/15',
  },
  {
    icon: '🗣️',
    title: '8 Dilde Menü Çevirileri',
    description: '"Hesap alabilir miyim?" gibi restoran cümlelerini Fransızca, İtalyanca, Japonca, İspanyolca ve daha fazlasında.',
    color: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/15',
  },
  {
    icon: '🎉',
    title: 'Yemek Festivalleri',
    description: 'Dünya çapında yemek festivallerinin tarihleri ve detayları. Seyahatinizi festival takvimine göre planlayın.',
    color: 'border-pink-500/20',
    iconBg: 'bg-pink-500/15',
  },
  {
    icon: '💱',
    title: 'Para Birimi & Bütçe',
    description: 'Hedef ülkenin para birimi, ortalama yemek fiyatları ve bütçe ipuçları.',
    color: 'border-green-500/20',
    iconBg: 'bg-green-500/15',
  },
  {
    icon: '📍',
    title: 'Turistik Yer Rehberi',
    description: 'Her turistik noktanın yakınındaki en iyi restoranlar, giriş ücretleri, saatleri ve yemek önerileri.',
    color: 'border-violet-500/20',
    iconBg: 'bg-violet-500/15',
  },
  {
    icon: '✈️',
    title: 'Uçuş & Otel Bağlantıları',
    description: 'Skyscanner ile uçuş, Booking.com ile otel ve araç kiralama bağlantıları tek ekranda.',
    color: 'border-sky-500/20',
    iconBg: 'bg-sky-500/15',
  },
  {
    icon: '🌿',
    title: 'Eko Ulaşım & Karbon Ayak İzi',
    description: 'Toplu taşıma rehberi, bisiklet paylaşımı ve karbon ayak izi rozetleri ile sürdürülebilir seyahat.',
    color: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/15',
  },
];

const menuPhrases = [
  { lang: '🇫🇷 Fransızca', phrase: "L'addition, s'il vous plaît", translation: 'Hesabı alabilir miyim, lütfen' },
  { lang: '🇮🇹 İtalyanca', phrase: 'Il conto, per favore', translation: 'Hesabı alabilir miyim, lütfen' },
  { lang: '🇯🇵 Japonca', phrase: 'お会計お願いします', translation: 'Hesabı alabilir miyim, lütfen' },
  { lang: '🇪🇸 İspanyolca', phrase: 'La cuenta, por favor', translation: 'Hesabı alabilir miyim, lütfen' },
  { lang: '🇩🇪 Almanca', phrase: 'Die Rechnung, bitte', translation: 'Hesabı alabilir miyim, lütfen' },
  { lang: '🇬🇷 Yunanca', phrase: 'Τον λογαριασμό, παρακαλώ', translation: 'Hesabı alabilir miyim, lütfen' },
];

export default function TravelShowcase() {
  const [activeDestination, setActiveDestination] = useState(0);
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);

  return (
    <section id="travel" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-warm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-sky-500/20 mb-6">
            <span className="text-sm">✈️</span>
            <span className="text-sm text-sky-300">Gastronomi Seyahati</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Dünyayı{' '}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Tadarak Keşfet
            </span>
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto">
            30+ şehirde gastronomi rehberi, yerel lezzetler veritabanı, Michelin yıldızlı restoranlar,
            menü çevirileri ve yemek festivalleri ile tam donanımlı seyahat deneyimi.
          </p>
        </AnimateOnScroll>

        {/* Main Travel Feature: Destinations + Phone Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimateOnScroll animation="fade-right">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4">
                30+ Şehirde{' '}
                <span className="gradient-text">Gastronomik Keşif</span>
              </h3>
              <p className="text-dark-300 mb-8 leading-relaxed">
                Gitmek istediğin şehri seç, yerel lezzetlerini keşfet, Michelin yıldızlı restoranları
                gör, yemek festivallerini takip et ve turistik noktaların yakınındaki en iyi
                restoranları bul. Tüm seyahat detaylarını tek ekranda planla.
              </p>

              {/* Destination Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {destinations.map((dest, index) => (
                  <button
                    key={dest.city}
                    onClick={() => setActiveDestination(index)}
                    aria-pressed={activeDestination === index}
                    aria-label={`${dest.city}, ${dest.country} destinasyonunu seç`}
                    className={`relative p-3 rounded-2xl border transition-all duration-300 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                      activeDestination === index
                        ? 'glass border-brand-400/30 shadow-lg shadow-brand-400/5 scale-[1.02]'
                        : 'bg-white/5 border-white/5 hover:bg-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{dest.emoji}</span>
                      <div>
                        <h4 className={`font-semibold text-sm ${activeDestination === index ? 'text-white' : 'text-dark-300'}`}>
                          {dest.city}
                        </h4>
                        <p className="text-[10px] text-dark-500">{dest.country}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {dest.dishes.map((dish) => (
                        <span key={dish} className="text-[8px] px-1.5 py-0.5 rounded-md bg-white/5 text-dark-400">
                          {dish}
                        </span>
                      ))}
                    </div>
                    {activeDestination === index && (
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: '🌍', value: '30+', label: 'Şehir' },
                  { icon: '🍽️', value: '100+', label: 'Yerel Yemek' },
                  { icon: '⭐', value: '200+', label: 'Michelin Restoran' },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-3 text-center border border-white/5">
                    <span className="text-lg block">{stat.icon}</span>
                    <span className="text-white font-bold text-lg block">{stat.value}</span>
                    <span className="text-[10px] text-dark-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Phone Mockup: Travel Planner */}
          <AnimateOnScroll animation="fade-left" className="flex justify-center">
            <div className="relative" aria-hidden="true">
              <div className="glass rounded-3xl p-6 relative z-10 max-w-sm border border-sky-500/10">
                {/* Travel Planner Screen */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center">
                    <span>✈️</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Seyahat Planlayıcı</p>
                    <p className="text-xs text-dark-400">{destinations[activeDestination].city}, {destinations[activeDestination].country}</p>
                  </div>
                </div>

                {/* Destination Header */}
                <div className={`bg-gradient-to-br ${destinations[activeDestination].color} rounded-2xl p-4 border border-white/5 mb-4`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{destinations[activeDestination].emoji}</span>
                    <div>
                      <h4 className="text-white font-bold text-lg">{destinations[activeDestination].city}</h4>
                      <p className="text-xs text-dark-300">{destinations[activeDestination].country} • Gastronomi Rehberi</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {destinations[activeDestination].dishes.map((dish) => (
                      <span key={dish} className="text-[10px] px-2 py-1 rounded-lg bg-white/10 text-white/80">
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { icon: '🍽️', label: 'Yerel Lezzetler', count: '12' },
                    { icon: '⭐', label: 'Michelin', count: '8' },
                    { icon: '📍', label: 'Turistik Yerler', count: '15' },
                    { icon: '🎉', label: 'Festivaller', count: '3' },
                  ].map((action) => (
                    <div key={action.label} className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{action.icon}</span>
                        <div>
                          <p className="text-[10px] text-white font-medium">{action.label}</p>
                          <p className="text-[8px] text-dark-500">{action.count} öğe</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Local Dish Preview */}
                <p className="text-[10px] text-dark-400 font-medium mb-2">🍽️ Mutlaka Dene</p>
                <div className="space-y-2 mb-4">
                  {[
                    { name: destinations[activeDestination].dishes[0], price: '€12-18', tag: 'Popüler', emoji: '🔥' },
                    { name: destinations[activeDestination].dishes[1], price: '€5-8', tag: 'Tatlı', emoji: '😋' },
                  ].map((dish) => (
                    <div key={dish.name} className="bg-white/5 rounded-xl p-2.5 flex items-center gap-3 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-400/20 to-amber-500/10 flex items-center justify-center">
                        <span>{dish.emoji}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-semibold text-[11px]">{dish.name}</h5>
                        <p className="text-[9px] text-dark-500">{dish.price}</p>
                      </div>
                      <span className="text-[8px] px-2 py-0.5 rounded-full bg-brand-400/10 text-brand-400">{dish.tag}</span>
                    </div>
                  ))}
                </div>

                {/* Affiliate Buttons */}
                <div className="flex gap-2">
                  <div className="flex-1 py-2 bg-sky-500/20 rounded-xl text-center">
                    <span className="text-[10px] text-sky-300 font-medium">✈️ Uçuş Bul</span>
                  </div>
                  <div className="flex-1 py-2 bg-orange-500/20 rounded-xl text-center">
                    <span className="text-[10px] text-orange-300 font-medium">🏨 Otel Bul</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Feature Grid: 8 Travel Features */}
        <AnimateOnScroll animation="fade-up" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4">
              Seyahat Planlayıcının{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Tüm Özellikleri
              </span>
            </h3>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Sadece restoran değil, şehrin tüm gastronomik dokusunu keşfetmeni sağlayan kapsamlı araçlar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {travelFeatures.map((feature) => (
              <div
                key={feature.title}
                className={`glass rounded-2xl p-5 border ${feature.color} group hover:scale-[1.02] transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{feature.title}</h4>
                <p className="text-xs text-dark-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Menu Phrases Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll animation="fade-right" className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="glass rounded-3xl p-6 relative z-10 border border-cyan-500/10">
                {/* Menu Translation Card */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <span>🗣️</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Menü Çeviri Kartları</p>
                    <p className="text-xs text-dark-400">8 dilde restoran cümleleri</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {menuPhrases.map((phrase, index) => (
                    <button
                      key={phrase.lang}
                      onClick={() => setActivePhraseIndex(index)}
                      className={`w-full text-left rounded-xl p-3 border transition-all duration-300 ${
                        activePhraseIndex === index
                          ? 'bg-cyan-500/10 border-cyan-500/20'
                          : 'bg-white/5 border-white/5 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-dark-200">{phrase.lang}</span>
                        {activePhraseIndex === index && (
                          <span className="text-[8px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400">🔊 Sesli</span>
                        )}
                      </div>
                      <p className={`text-sm font-medium transition-colors ${
                        activePhraseIndex === index ? 'text-cyan-300' : 'text-dark-400'
                      }`}>
                        &ldquo;{phrase.phrase}&rdquo;
                      </p>
                      {activePhraseIndex === index && (
                        <p className="text-[10px] text-dark-500 mt-1 italic">→ {phrase.translation}</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 mb-6">
                <span className="text-sm">🗣️</span>
                <span className="text-sm text-cyan-300">Dil Desteği</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-6">
                8 Dilde{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Menü Çevirileri
                </span>
              </h3>
              <p className="text-dark-300 mb-8 leading-relaxed">
                Yabancı bir restoranda ne sipariş edeceğini bilemiyor musun? Fransızca, İtalyanca,
                Japonca, İspanyolca, İngilizce, Arapça, Almanca ve Yunanca restoran cümlelerini
                anında gör. &quot;Hesap alabilir miyim?&quot; den &quot;Vejetaryen menünüz var mı?&quot; ya kadar
                her duruma hazır ol.
              </p>

              <div className="space-y-4">
                {[
                  { icon: '📖', title: 'Restoran Cümleleri', desc: 'Sipariş, hesap, alerji bildirimi ve daha fazlası' },
                  { icon: '🔊', title: 'Sesli Telaffuz', desc: 'Doğru telaffuz için ses desteği' },
                  { icon: '🍽️', title: 'Yemek İsimleri', desc: 'Yerel yemeklerin açıklamaları ve Türkçe karşılıkları' },
                  { icon: '⚠️', title: 'Alerji Bildirimi', desc: '"Fıstık alerjim var" gibi kritik cümlelerin çevirileri' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-3 glass rounded-xl border border-white/5">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-dark-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
