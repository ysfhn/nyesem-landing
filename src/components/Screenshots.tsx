'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const screens = [
  {
    id: 'home',
    title: 'Ana Sayfa',
    subtitle: 'Keşfet & Trend',
    description: 'Yakınındaki restoranları keşfet, kategorilere göre filtrele, hava durumu ve gastronomi haberleri.',
    content: (
      <div className="p-4 pt-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] text-dark-400">📍 İstanbul</p>
            <h3 className="text-white font-bold text-sm">Keşfet</h3>
          </div>
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-xs">🔔</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 mb-4 border border-white/5">
          <span className="text-xs text-dark-400">🔍 Restoran veya yemek ara...</span>
        </div>
        <div className="flex gap-2 mb-4">
          {['🍔 Burger', '☕ Kahve', '🍕 Pizza', '🍣 Sushi'].map(c => (
            <div key={c} className="px-2.5 py-1.5 bg-white/5 rounded-lg border border-white/5">
              <span className="text-[9px] text-dark-300">{c}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {[
            { name: 'Lezzet Durağı', dist: '0.8 km', rating: '4.8', emoji: '🍽️' },
            { name: 'Kahve Molası', dist: '1.2 km', rating: '4.6', emoji: '☕' },
          ].map(r => (
            <div key={r.name} className="bg-white/5 rounded-xl p-2.5 flex gap-2.5 border border-white/5">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-brand-400/20 to-amber-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">{r.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-xs">{r.name}</h4>
                <p className="text-[9px] text-dark-400">{r.dist}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-brand-400 text-[9px]">★</span>
                  <span className="text-brand-400 text-[9px] font-bold">{r.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'ai',
    title: 'AI Menü Tarayıcı',
    subtitle: 'Yapay Zeka',
    description: 'Menü fotoğrafını çek, AI yemekleri tanısın. Alerjenler, çeviriler ve açıklamalar anında.',
    content: (
      <div className="p-4 pt-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <span className="text-xs">🤖</span>
          </div>
          <h3 className="text-white font-bold text-sm">AI Menü Analizi</h3>
        </div>
        <div className="bg-white/5 rounded-2xl p-3 border border-white/5 mb-4">
          <div className="w-full h-28 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-3">
            <div className="text-center">
              <span className="text-3xl block mb-1">📷</span>
              <span className="text-[9px] text-dark-400">Menüyü tara</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 py-2 bg-blue-500/20 rounded-lg text-center">
              <span className="text-[10px] text-blue-300 font-medium">Fotoğraf Çek</span>
            </div>
            <div className="flex-1 py-2 bg-white/5 rounded-lg text-center">
              <span className="text-[10px] text-dark-300">Galeriden Seç</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] text-dark-400 font-medium mb-2">📋 AI Sonuçları</p>
          {[
            { name: 'İskender Kebap', desc: 'Döner kebap, yoğurt, tereyağı sos', warn: '🥛 Süt' },
            { name: 'Künefe', desc: 'Tel kadayıf, peynir, şerbet', warn: '🌾 Gluten' },
          ].map(item => (
            <div key={item.name} className="bg-white/5 rounded-xl p-2.5 border border-white/5">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-white font-semibold text-[11px]">{item.name}</h4>
                  <p className="text-[9px] text-dark-400 mt-0.5">{item.desc}</p>
                </div>
                <span className="text-[8px] bg-red-500/10 text-red-300 px-1.5 py-0.5 rounded-md">{item.warn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'gourmet',
    title: 'Gurme Seviye',
    subtitle: 'Oyunlaştırma',
    description: 'XP kazan, seviye atla, başarım rozetleri topla ve gurme kartını paylaş.',
    content: (
      <div className="p-4 pt-8">
        <h3 className="text-white font-bold text-sm mb-4">🏆 Gurme Profil</h3>
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-2xl p-4 border border-purple-500/10 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">🧭</div>
            <div>
              <p className="text-[10px] text-purple-300 font-medium">MEVCUT SEVİYE</p>
              <h4 className="text-white font-bold text-sm">Kaşif</h4>
            </div>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 mb-1.5">
            <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full" style={{ width: '65%' }} />
          </div>
          <div className="flex justify-between text-[9px] text-dark-400">
            <span>195 XP</span>
            <span>300 XP</span>
          </div>
        </div>
        <p className="text-[10px] text-dark-400 font-medium mb-2">🏅 Başarımlar</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { emoji: '🍕', label: 'Pizza Avcısı' },
            { emoji: '📸', label: 'Fotoğrafçı' },
            { emoji: '🌍', label: 'Gezgin' },
            { emoji: '⭐', label: 'Değerlendirici' },
            { emoji: '🤝', label: 'Sosyal' },
            { emoji: '🔥', label: '7 Gün Seri' },
          ].map(a => (
            <div key={a.label} className="bg-white/5 rounded-xl p-2 text-center border border-white/5">
              <span className="text-lg block">{a.emoji}</span>
              <span className="text-[8px] text-dark-400 mt-0.5 block">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'social',
    title: 'Sosyal & Buluşma',
    subtitle: 'Birlikte Yemek',
    description: 'Arkadaşlarınla buluşma planla, co-dining odaları oluştur, anketlerle restoran seç.',
    content: (
      <div className="p-4 pt-8">
        <h3 className="text-white font-bold text-sm mb-4">👥 Buluşmalar</h3>
        <div className="space-y-3">
          <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">🍝</span>
                <div>
                  <h4 className="text-white font-semibold text-xs">Cuma Akşam Yemeği</h4>
                  <p className="text-[9px] text-dark-400">3 kişi • Cuma 20:00</p>
                </div>
              </div>
              <span className="text-[8px] bg-green-500/10 text-green-300 px-2 py-0.5 rounded-full">Aktif</span>
            </div>
            <div className="flex -space-x-2 mb-2">
              {['👩', '🧑', '👨'].map((e, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs border border-dark-800">{e}</div>
              ))}
              <div className="w-6 h-6 rounded-full bg-brand-400/20 flex items-center justify-center text-[8px] text-brand-400 border border-dark-800">+2</div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 py-1.5 bg-green-500/20 rounded-lg text-center">
                <span className="text-[9px] text-green-300">Katıl</span>
              </div>
              <div className="flex-1 py-1.5 bg-white/5 rounded-lg text-center">
                <span className="text-[9px] text-dark-400">Detaylar</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📊</span>
              <div>
                <h4 className="text-white font-semibold text-xs">Nerede yiyelim?</h4>
                <p className="text-[9px] text-dark-400">Anket • 5 seçenek</p>
              </div>
            </div>
            <div className="space-y-1.5">
              {[
                { name: 'İtalyan Restoran', pct: 45 },
                { name: 'Kebapçı', pct: 30 },
                { name: 'Sushi Bar', pct: 25 },
              ].map(opt => (
                <div key={opt.name} className="relative">
                  <div className="flex items-center justify-between text-[9px] text-dark-300 mb-0.5">
                    <span>{opt.name}</span>
                    <span>%{opt.pct}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5">
                    <div className="bg-brand-400/60 h-1.5 rounded-full" style={{ width: `${opt.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'recipes',
    title: 'Tarifler',
    subtitle: 'Yemek Tarifleri',
    description: 'Tarifleri keşfet, AI ile üret, pişirme modunda adım adım ilerle.',
    content: (
      <div className="p-4 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-sm">🍳 Tarifler</h3>
          <div className="px-2 py-1 bg-brand-400/10 rounded-lg">
            <span className="text-[9px] text-brand-400">+ AI Tarif</span>
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          {['Tümü', 'Türk', 'İtalyan', 'Tatlı'].map((c, i) => (
            <div key={c} className={`px-2.5 py-1.5 rounded-lg ${i === 0 ? 'bg-brand-400/20 border border-brand-400/20' : 'bg-white/5 border border-white/5'}`}>
              <span className={`text-[9px] ${i === 0 ? 'text-brand-400 font-medium' : 'text-dark-400'}`}>{c}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {[
            { name: 'Mantı', time: '45 dk', diff: 'Orta', emoji: '🥟' },
            { name: 'Tiramisu', time: '30 dk', diff: 'Kolay', emoji: '🍰' },
            { name: 'Risotto', time: '35 dk', diff: 'Orta', emoji: '🍚' },
          ].map(recipe => (
            <div key={recipe.name} className="bg-white/5 rounded-xl p-2.5 flex gap-2.5 border border-white/5">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-brand-400/10 to-amber-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{recipe.emoji}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold text-xs">{recipe.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[8px] text-dark-400">⏱ {recipe.time}</span>
                  <span className="text-[8px] text-dark-400">📊 {recipe.diff}</span>
                </div>
              </div>
              <div className="self-center">
                <span className="text-[9px] text-brand-400">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'travel',
    title: 'Seyahat Planlayıcı',
    subtitle: 'Gastronomi Seyahati',
    description: 'Gastronomik gezi planla, yerel lezzetleri keşfet, menü çevirileri ve Michelin rehberi.',
    content: (
      <div className="p-4 pt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-sky-500/20 flex items-center justify-center">
              <span className="text-xs">✈️</span>
            </div>
            <h3 className="text-white font-bold text-sm">Seyahat Rehberi</h3>
          </div>
          <span className="text-[9px] bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded-full">30+ Şehir</span>
        </div>
        {/* Destination Selector */}
        <div className="flex gap-2 mb-4 overflow-hidden">
          {[
            { flag: '🇹🇷', city: 'İstanbul' },
            { flag: '🇫🇷', city: 'Paris' },
            { flag: '🇮🇹', city: 'Roma' },
            { flag: '🇯🇵', city: 'Tokyo' },
          ].map((d, i) => (
            <div key={d.city} className={`px-2 py-1.5 rounded-lg flex items-center gap-1 ${i === 0 ? 'bg-sky-500/20 border border-sky-500/20' : 'bg-white/5 border border-white/5'}`}>
              <span className="text-xs">{d.flag}</span>
              <span className={`text-[9px] ${i === 0 ? 'text-sky-300 font-medium' : 'text-dark-400'}`}>{d.city}</span>
            </div>
          ))}
        </div>
        {/* Destination Card */}
        <div className="bg-gradient-to-br from-red-500/15 to-orange-500/10 rounded-xl p-3 border border-white/5 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🇹🇷</span>
            <div>
              <h4 className="text-white font-bold text-xs">İstanbul</h4>
              <p className="text-[8px] text-dark-400">Türkiye • Gastronomi Rehberi</p>
            </div>
          </div>
          <div className="flex gap-1">
            {['Kebap', 'Baklava', 'Çay'].map(d => (
              <span key={d} className="text-[8px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">{d}</span>
            ))}
          </div>
        </div>
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { icon: '🍽️', label: 'Yerel Lezzetler', count: '12' },
            { icon: '⭐', label: 'Michelin', count: '8' },
            { icon: '📍', label: 'Turistik', count: '15' },
            { icon: '🗣️', label: 'Çeviriler', count: '8 dil' },
          ].map(a => (
            <div key={a.label} className="bg-white/5 rounded-lg p-2 border border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">{a.icon}</span>
                <div>
                  <p className="text-[9px] text-white">{a.label}</p>
                  <p className="text-[7px] text-dark-500">{a.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Affiliate Buttons */}
        <div className="flex gap-2">
          <div className="flex-1 py-1.5 bg-sky-500/20 rounded-lg text-center">
            <span className="text-[9px] text-sky-300">✈️ Uçuş Bul</span>
          </div>
          <div className="flex-1 py-1.5 bg-orange-500/20 rounded-lg text-center">
            <span className="text-[9px] text-orange-300">🏨 Otel Bul</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'events',
    title: 'Etkinlikler & Özel Günler',
    subtitle: 'Planlama',
    description: 'Özel günler için restoran bul, etkinlikleri keşfet ve buluşmalarını planla.',
    content: (
      <div className="p-4 pt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-pink-500/20 flex items-center justify-center">
              <span className="text-xs">📅</span>
            </div>
            <h3 className="text-white font-bold text-sm">Özel Günlerim</h3>
          </div>
          <span className="text-[9px] bg-pink-500/10 text-pink-300 px-2 py-0.5 rounded-full">+ Ekle</span>
        </div>
        {/* Upcoming Special Day */}
        <div className="bg-gradient-to-br from-pink-500/15 to-rose-500/10 rounded-xl p-3 border border-pink-500/10 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🎂</span>
            <div>
              <h4 className="text-white font-bold text-xs">Doğum Günü</h4>
              <p className="text-[8px] text-dark-400">12 gün kaldı</p>
            </div>
            <span className="ml-auto text-[8px] bg-white/10 text-pink-300 px-1.5 py-0.5 rounded-full">🔔 Aktif</span>
          </div>
          <div className="flex gap-1">
            {['Eğlenceli', 'Rahat', 'Kutlama'].map(t => (
              <span key={t} className="text-[8px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">{t}</span>
            ))}
          </div>
        </div>
        {/* More Special Days */}
        <div className="space-y-2 mb-3">
          {[
            { icon: '💍', name: 'Yıldönümü', days: '28 gün', cats: ['Romantik', 'Lüks'] },
            { icon: '🎓', name: 'Mezuniyet', days: '45 gün', cats: ['Kutlama', 'Grup'] },
          ].map(day => (
            <div key={day.name} className="bg-white/5 rounded-lg p-2.5 flex items-center gap-2 border border-white/5">
              <span className="text-lg">{day.icon}</span>
              <div className="flex-1">
                <h5 className="text-white font-semibold text-[10px]">{day.name}</h5>
                <p className="text-[8px] text-dark-500">{day.days} kaldı</p>
              </div>
              <div className="flex gap-1">
                {day.cats.map(c => (
                  <span key={c} className="text-[7px] px-1 py-0.5 rounded bg-white/5 text-dark-400">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Nearby Events */}
        <p className="text-[9px] text-dark-400 font-medium mb-2">🎪 Yaklaşan Etkinlikler</p>
        <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎪</span>
            <div className="flex-1">
              <h5 className="text-white font-semibold text-[10px]">İstanbul Gastro Fest</h5>
              <p className="text-[8px] text-dark-500">15-17 Mart • 234 katılımcı</p>
            </div>
            <span className="text-[8px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400">Katıl</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);

  return (
    <section id="screenshots" className="relative py-24 md:py-32 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-warm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 mb-6">
            <span className="text-sm text-dark-200">Uygulama ekranları</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Her ekranda{' '}
            <span className="gradient-text">benzersiz deneyim</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Nyesem&apos;in her ekranı, gastronomi deneyimini zenginleştirmek için özenle tasarlandı.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Screen Tabs */}
          <AnimateOnScroll animation="fade-right">
            <div className="space-y-3" role="tablist" aria-label="Uygulama ekranları">
              {screens.map((screen, index) => (
                <button
                  key={screen.id}
                  onClick={() => setActive(index)}
                  role="tab"
                  aria-selected={active === index}
                  aria-controls={`screen-panel-${screen.id}`}
                  id={`screen-tab-${screen.id}`}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                    active === index
                      ? 'glass border-brand-400/20 shadow-lg shadow-brand-400/5'
                      : 'bg-transparent border-transparent hover:bg-white/3 hover:border-white/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 ${
                        active === index
                          ? 'bg-brand-400/15 scale-110'
                          : 'bg-white/5'
                      }`}
                    >
                      {screen.id === 'home' && '🏠'}
                      {screen.id === 'ai' && '🤖'}
                      {screen.id === 'gourmet' && '⭐'}
                      {screen.id === 'social' && '👥'}
                      {screen.id === 'recipes' && '🍳'}
                      {screen.id === 'travel' && '✈️'}
                      {screen.id === 'events' && '📅'}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className={`font-display font-bold transition-colors duration-300 ${
                            active === index ? 'text-white' : 'text-dark-300'
                          }`}
                        >
                          {screen.title}
                        </h3>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full transition-all duration-300 ${
                            active === index
                              ? 'bg-brand-400/10 text-brand-400'
                              : 'bg-white/5 text-dark-400'
                          }`}
                        >
                          {screen.subtitle}
                        </span>
                      </div>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          active === index ? 'text-dark-300' : 'text-dark-400'
                        }`}
                      >
                        {screen.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Right: Phone Preview */}
          <AnimateOnScroll animation="fade-left" className="flex justify-center">
            <div className="relative">
              <div className="phone-mockup relative z-10">
                <div className="phone-screen">
                  <div className="phone-notch" />
                  <div
                    className="transition-all duration-500"
                    role="tabpanel"
                    id={`screen-panel-${screens[active].id}`}
                    aria-labelledby={`screen-tab-${screens[active].id}`}
                  >
                    {screens[active].content}
                  </div>
                  {/* Bottom Nav */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-around bg-white/5 rounded-2xl py-2.5 border border-white/5">
                    {['🏠', '❤️', '📅', '🍳', '👤'].map((icon, i) => (
                      <div
                        key={i}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                          (active === 0 && i === 0) ||
                          (active === 4 && i === 3)
                            ? 'bg-brand-400/20'
                            : ''
                        }`}
                      >
                        <span className="text-xs">{icon}</span>
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
