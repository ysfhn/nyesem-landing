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
    description: '15+ şehir, 100+ yerel yemek ve içecek. Her birinin açıklaması, fiyatı, etiketleri ve görselleri ile detaylı gastronomi rehberi.',
    color: 'border-orange-500/20',
    iconBg: 'bg-orange-500/15',
    accentColor: 'text-orange-400',
    details: [
      { icon: '📋', text: 'Detaylı yemek açıklamaları ve görseller' },
      { icon: '💰', text: 'Ortalama fiyat aralıkları' },
      { icon: '🏷️', text: 'Mutfak türü ve etiket filtreleri' },
      { icon: '📍', text: 'En iyi nerede yenir önerileri' },
    ],
  },
  {
    icon: '⭐',
    title: 'Michelin Restoran Rehberi',
    description: '8 ülkede Michelin yıldızlı restoranlar. Doğrudan Michelin rehberine bağlantılar ve detaylı restoran bilgileri.',
    color: 'border-red-500/20',
    iconBg: 'bg-red-500/15',
    accentColor: 'text-red-400',
    details: [
      { icon: '🌟', text: '1, 2 ve 3 yıldızlı restoranlar' },
      { icon: '🔗', text: 'Michelin rehberine direkt bağlantılar' },
      { icon: '📖', text: 'Menü özetleri ve fiyat aralıkları' },
      { icon: '📞', text: 'Kolay rezervasyon bağlantıları' },
    ],
  },
  {
    icon: '🗣️',
    title: '8 Dilde Menü Çevirileri',
    description: 'Fransızca, İtalyanca, Japonca, İspanyolca ve daha fazlasında restoran cümleleri ve menü çevirileri.',
    color: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/15',
    accentColor: 'text-cyan-400',
    details: [
      { icon: '📖', text: 'Sipariş, hesap, alerji bildirimi cümleleri' },
      { icon: '🔊', text: 'Sesli telaffuz desteği' },
      { icon: '🍽️', text: 'Yerel yemek isimlerinin Türkçe karşılıkları' },
      { icon: '⚠️', text: '"Fıstık alerjim var" gibi kritik çeviriler' },
    ],
  },
  {
    icon: '🎉',
    title: 'Yemek Festivalleri',
    description: 'Dünya çapında yemek festivallerinin tarihleri ve detayları. Seyahatinizi festival takvimine göre planlayın.',
    color: 'border-pink-500/20',
    iconBg: 'bg-pink-500/15',
    accentColor: 'text-pink-400',
    details: [
      { icon: '📅', text: 'Festival tarihleri ve takvimi' },
      { icon: '🎪', text: 'Festival detayları ve programları' },
      { icon: '🎫', text: 'Bilet bilgileri ve bağlantılar' },
      { icon: '📍', text: 'Konum ve ulaşım bilgileri' },
    ],
  },
  {
    icon: '💱',
    title: 'Para Birimi & Bütçe',
    description: 'Hedef ülkenin para birimi, ortalama yemek fiyatları ve bütçe ipuçları ile seyahat planlaması.',
    color: 'border-green-500/20',
    iconBg: 'bg-green-500/15',
    accentColor: 'text-green-400',
    details: [
      { icon: '💵', text: 'Güncel döviz kurları' },
      { icon: '🍽️', text: 'Ortalama yemek fiyatları' },
      { icon: '💡', text: 'Bütçe dostu ipuçları' },
      { icon: '📊', text: 'Şehir bazlı fiyat karşılaştırması' },
    ],
  },
  {
    icon: '📍',
    title: 'Turistik Yer Rehberi',
    description: 'Her turistik noktanın yakınındaki en iyi restoranlar, giriş ücretleri, saatleri ve yemek önerileri.',
    color: 'border-violet-500/20',
    iconBg: 'bg-violet-500/15',
    accentColor: 'text-violet-400',
    details: [
      { icon: '🏛️', text: 'Turistik yer yakını restoranlar' },
      { icon: '🕐', text: 'Giriş saatleri ve ücretleri' },
      { icon: '🗺️', text: 'Harita üzerinde yürüyüş rotaları' },
      { icon: '📸', text: 'Fotoğraf noktaları ve öneriler' },
    ],
  },
  {
    icon: '✈️',
    title: 'Uçuş & Otel Bağlantıları',
    description: 'Skyscanner ile uçuş, Booking.com ile otel ve araç kiralama bağlantıları tek ekranda.',
    color: 'border-sky-500/20',
    iconBg: 'bg-sky-500/15',
    accentColor: 'text-sky-400',
    details: [
      { icon: '🛫', text: 'En uygun uçuş fiyatları' },
      { icon: '🏨', text: 'Otel karşılaştırma ve rezervasyon' },
      { icon: '🚗', text: 'Araç kiralama seçenekleri' },
      { icon: '🚌', text: 'Havaalanı transfer bilgileri' },
    ],
  },
  {
    icon: '🌿',
    title: 'Eko Ulaşım & Karbon Ayak İzi',
    description: 'Toplu taşıma rehberi, bisiklet paylaşımı ve karbon ayak izi rozetleri ile sürdürülebilir seyahat.',
    color: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/15',
    accentColor: 'text-emerald-400',
    details: [
      { icon: '🚇', text: 'Toplu taşıma rehberi ve bilet bilgileri' },
      { icon: '🚲', text: 'Bisiklet paylaşım noktaları' },
      { icon: '🌱', text: 'Karbon ayak izi hesaplayıcı' },
      { icon: '🏅', text: 'Sürdürülebilirlik rozetleri' },
    ],
  },
];

export default function TravelShowcase() {
  const [activeDestination, setActiveDestination] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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

        {/* Tabbed Features Section */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-8">
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

          {/* Tab Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide" role="tablist" aria-label="Seyahat özellikleri">
            {travelFeatures.map((feature, index) => (
              <button
                key={feature.title}
                role="tab"
                aria-selected={activeFeatureTab === index}
                aria-controls={`travel-tabpanel-${index}`}
                id={`travel-tab-${index}`}
                onClick={() => setActiveFeatureTab(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border whitespace-nowrap transition-all duration-300 flex-shrink-0 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                  activeFeatureTab === index
                    ? `glass ${feature.color} shadow-lg ${feature.accentColor} scale-[1.02]`
                    : 'bg-white/5 border-white/5 text-dark-400 hover:bg-white/5 hover:text-dark-200'
                }`}
              >
                <span className="text-base">{feature.icon}</span>
                <span className="hidden sm:inline">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content — fixed height, content swaps in place */}
          <div
            role="tabpanel"
            id={`travel-tabpanel-${activeFeatureTab}`}
            aria-labelledby={`travel-tab-${activeFeatureTab}`}
            className="glass rounded-2xl border border-white/5 p-6 md:p-8 min-h-[220px]"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: Feature Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${travelFeatures[activeFeatureTab].iconBg} flex items-center justify-center text-2xl`}>
                    {travelFeatures[activeFeatureTab].icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{travelFeatures[activeFeatureTab].title}</h4>
                  </div>
                </div>
                <p className="text-dark-300 leading-relaxed mb-6">
                  {travelFeatures[activeFeatureTab].description}
                </p>
                {/* Quick Stats Row */}
                <div className="flex items-center gap-4 text-xs text-dark-400">
                  <span className="flex items-center gap-1">🌍 30+ Şehir</span>
                  <span className="w-1 h-1 rounded-full bg-dark-500" />
                  <span className="flex items-center gap-1">🍽️ 100+ Yemek</span>
                  <span className="w-1 h-1 rounded-full bg-dark-500" />
                  <span className="flex items-center gap-1">⭐ 200+ Restoran</span>
                </div>
              </div>

              {/* Right: Feature Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {travelFeatures[activeFeatureTab].details.map((detail) => (
                  <div
                    key={detail.text}
                    className={`flex items-start gap-3 p-3 rounded-xl bg-white/5 border ${travelFeatures[activeFeatureTab].color}`}
                  >
                    <span className="text-lg flex-shrink-0">{detail.icon}</span>
                    <p className="text-sm text-dark-200">{detail.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
