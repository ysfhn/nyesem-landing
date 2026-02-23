'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const specialDayTypes = [
  { id: 'birthday', icon: '🎂', label: 'Doğum Günü', color: 'from-pink-500/20 to-rose-500/10', borderColor: 'border-pink-500/20', categories: ['Eğlenceli', 'Rahat', 'Kutlama'] },
  { id: 'anniversary', icon: '💍', label: 'Yıldönümü', color: 'from-purple-500/20 to-violet-500/10', borderColor: 'border-purple-500/20', categories: ['Romantik', 'Lüks', 'Özel'] },
  { id: 'valentines', icon: '❤️', label: 'Sevgililer Günü', color: 'from-red-500/20 to-pink-500/10', borderColor: 'border-red-500/20', categories: ['Romantik', 'İtalyan', 'Teras'] },
  { id: 'mothers_day', icon: '👩‍👧', label: 'Anneler Günü', color: 'from-rose-500/20 to-pink-500/10', borderColor: 'border-rose-500/20', categories: ['Aile', 'Brunch', 'Huzurlu'] },
  { id: 'graduation', icon: '🎓', label: 'Mezuniyet', color: 'from-blue-500/20 to-indigo-500/10', borderColor: 'border-blue-500/20', categories: ['Kutlama', 'Grup', 'Eğlenceli'] },
  { id: 'proposal', icon: '💐', label: 'Evlilik Teklifi', color: 'from-amber-500/20 to-brand-400/10', borderColor: 'border-amber-500/20', categories: ['Romantik', 'Özel', 'Premium'] },
];

const eventTypes = [
  { icon: '🍴', title: 'Restoran Açılışları', desc: 'Yeni restoran ve kafelerin açılış etkinlikleri', tag: 'Yeni', tagColor: 'bg-green-500/10 text-green-400' },
  { icon: '🎪', title: 'Yemek Festivalleri', desc: 'Şehirdeki gastronomi festivalleri ve fuarlar', tag: 'Popüler', tagColor: 'bg-brand-400/10 text-brand-400' },
  { icon: '👨‍🍳', title: 'Şef Atölyeleri', desc: 'Ünlü şeflerden canlı yemek atölyeleri', tag: 'Sınırlı', tagColor: 'bg-red-500/10 text-red-400' },
  { icon: '🍷', title: 'Tadım Etkinlikleri', desc: 'Şarap, kahve, çikolata ve peynir tadımları', tag: 'Premium', tagColor: 'bg-purple-500/10 text-purple-400' },
  { icon: '🏆', title: 'Yarışmalar', desc: 'Amatör şef yarışmaları ve yemek maratonları', tag: 'Eğlenceli', tagColor: 'bg-blue-500/10 text-blue-400' },
  { icon: '📸', title: 'Food Tour', desc: 'Rehber eşliğinde sokak lezzetleri turları', tag: 'Deneyim', tagColor: 'bg-orange-500/10 text-orange-400' },
];

const upcomingEvents = [
  { name: 'İstanbul Gastro Fest', date: '15-17 Mart', location: 'Haliç Kongre Merkezi', emoji: '🎪', attending: 234 },
  { name: 'Şef Mehmet Gürs Atölyesi', date: '22 Mart', location: 'Mikla Restaurant', emoji: '👨‍🍳', attending: 48 },
  { name: 'Türk Kahvesi Tadımı', date: '28 Mart', location: 'Mandabatmaz', emoji: '☕', attending: 32 },
];

export default function EventsShowcase() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState<'special' | 'events'>('special');

  return (
    <section id="events" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-section-warm" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-warm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-pink-500/20 mb-6">
            <span className="text-sm">📅</span>
            <span className="text-sm text-pink-300">Etkinlikler & Özel Günler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Her Anı{' '}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              Özel Kıl
            </span>
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto">
            Doğum günleri, yıldönümleri, mezuniyetler ve daha fazlası için mükemmel restoranı bul.
            Gastronomi etkinliklerini keşfet ve buluşmalarını planla.
          </p>
        </AnimateOnScroll>

        {/* Feature 1: Special Days + Phone Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimateOnScroll animation="fade-right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-rose-500/20 mb-6">
                <span className="text-sm">🎉</span>
                <span className="text-sm text-rose-300">Özel Gün Planlayıcı</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4">
                9 Farklı Özel Gün İçin{' '}
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  Mükemmel Restoran
                </span>
              </h3>
              <p className="text-dark-300 mb-8 leading-relaxed">
                Doğum günün mü yaklaşıyor? Yıldönümünüz mü var? Evlilik teklifi mi planlıyorsun?
                Özel gününüzün türüne göre otomatik restoran kategorileri, hatırlatıcılar ve
                özel menü önerileri ile her anı unutulmaz kıl.
              </p>

              {/* Special Day Type Selector */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 mb-6">
                {specialDayTypes.map((day, index) => (
                  <button
                    key={day.id}
                    onClick={() => setActiveDay(index)}
                    aria-pressed={activeDay === index}
                    aria-label={`${day.label} özel gün türünü seç`}
                    className={`p-3 rounded-2xl border transition-all duration-300 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                      activeDay === index
                        ? `glass ${day.borderColor} shadow-lg scale-[1.02]`
                        : 'bg-white/5 border-white/5 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{day.icon}</span>
                    <span className={`text-[11px] font-medium ${activeDay === index ? 'text-white' : 'text-dark-400'}`}>
                      {day.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {[
                  { icon: '🔔', text: 'Akıllı Hatırlatıcılar', desc: 'Özel gününüzden 1-30 gün önce hatırlatma' },
                  { icon: '🏷️', text: 'Otomatik Kategori', desc: 'Gün türüne göre uygun restoran kategorileri' },
                  { icon: '📋', text: 'Özel Menü Önerileri', desc: 'Romantik akşam yemeği, kutlama menüsü ve dahası' },
                  { icon: '📤', text: 'Davetiye Paylaşımı', desc: 'Arkadaşlarını etkinliğe davet et' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 p-3 glass rounded-xl border border-white/5">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{item.text}</h4>
                      <p className="text-[11px] text-dark-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Phone Mockup: Special Days */}
          <AnimateOnScroll animation="fade-left" className="flex justify-center">
            <div className="relative" aria-hidden="true">
              <div className="glass rounded-3xl p-6 relative z-10 max-w-sm border border-pink-500/10">
                {/* Special Day Screen */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
                    <span>{specialDayTypes[activeDay].icon}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Özel Günlerim</p>
                    <p className="text-xs text-dark-400">{specialDayTypes[activeDay].label}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[10px] bg-pink-500/10 text-pink-400 px-2 py-1 rounded-full">+ Ekle</span>
                  </div>
                </div>

                {/* Active Special Day Card */}
                <div className={`bg-gradient-to-br ${specialDayTypes[activeDay].color} rounded-2xl p-4 border border-white/5 mb-4`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{specialDayTypes[activeDay].icon}</span>
                    <div>
                      <h4 className="text-white font-bold">{specialDayTypes[activeDay].label}</h4>
                      <p className="text-[10px] text-dark-300">12 gün kaldı</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div className="bg-white/60 h-2 rounded-full" style={{ width: '60%' }} />
                    </div>
                    <span className="text-[9px] text-dark-300">60%</span>
                  </div>
                  <div className="flex gap-1.5">
                    {specialDayTypes[activeDay].categories.map((cat) => (
                      <span key={cat} className="text-[8px] px-2 py-0.5 rounded-full bg-white/10 text-white/80">{cat}</span>
                    ))}
                  </div>
                </div>

                {/* Reminder Card */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🔔</span>
                    <span className="text-white font-medium text-xs">Hatırlatıcılar</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { days: '7 gün önce', status: '✅', label: 'Restoran rezervasyonu yap' },
                      { days: '3 gün önce', status: '⏳', label: 'Menü seçimini tamamla' },
                      { days: '1 gün önce', status: '⏳', label: 'Son kontrol & hatırlatma' },
                    ].map((reminder) => (
                      <div key={reminder.days} className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                        <span className="text-xs">{reminder.status}</span>
                        <div className="flex-1">
                          <p className="text-[10px] text-white">{reminder.label}</p>
                          <p className="text-[8px] text-dark-500">{reminder.days}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Restaurant Suggestions */}
                <p className="text-[10px] text-dark-400 font-medium mb-2">🍽️ Önerilen Restoranlar</p>
                <div className="space-y-2">
                  {[
                    { name: 'Romantik Teras', rating: '4.9', price: '₺₺₺', tag: specialDayTypes[activeDay].categories[0] },
                    { name: 'Güzel Gece', rating: '4.7', price: '₺₺', tag: specialDayTypes[activeDay].categories[1] },
                  ].map((restaurant) => (
                    <div key={restaurant.name} className="bg-white/5 rounded-xl p-2.5 flex items-center gap-3 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/10 flex items-center justify-center">
                        <span className="text-sm">🍽️</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-semibold text-[11px]">{restaurant.name}</h5>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-brand-400">★ {restaurant.rating}</span>
                          <span className="text-[9px] text-dark-500">{restaurant.price}</span>
                        </div>
                      </div>
                      <span className="text-[8px] px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400">{restaurant.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Feature 2: Events Hub */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Phone Mockup: Events */}
          <AnimateOnScroll animation="fade-right" className="flex justify-center order-2 lg:order-1">
            <div className="relative" aria-hidden="true">
              <div className="glass rounded-3xl p-6 relative z-10 max-w-sm border border-purple-500/10">
                {/* Events Screen */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span>📅</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Gastronomi Etkinlikleri</p>
                    <p className="text-xs text-dark-400">İstanbul</p>
                  </div>
                </div>

                {/* Tab Switch */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setActiveTab('special')}
                    className={`flex-1 py-2 rounded-xl text-center text-[11px] font-medium transition-all ${
                      activeTab === 'special'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/20'
                        : 'bg-white/5 text-dark-400 border border-white/5'
                    }`}
                  >
                    🎪 Etkinliklerim
                  </button>
                  <button
                    onClick={() => setActiveTab('events')}
                    className={`flex-1 py-2 rounded-xl text-center text-[11px] font-medium transition-all ${
                      activeTab === 'events'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/20'
                        : 'bg-white/5 text-dark-400 border border-white/5'
                    }`}
                  >
                    🏢 Mekan Etkinlikleri
                  </button>
                </div>

                {/* Upcoming Events */}
                <p className="text-[10px] text-dark-400 font-medium mb-2">📅 Yaklaşan Etkinlikler</p>
                <div className="space-y-2.5">
                  {upcomingEvents.map((event) => (
                    <div key={event.name} className="bg-white/5 rounded-xl p-3 border border-white/5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{event.emoji}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-white font-semibold text-[11px] mb-0.5">{event.name}</h5>
                          <p className="text-[9px] text-dark-400">📅 {event.date}</p>
                          <p className="text-[9px] text-dark-500">📍 {event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5">
                        <div className="flex items-center gap-1">
                          <div className="flex -space-x-1.5">
                            {['👤', '👤', '👤'].map((e, i) => (
                              <div key={i} className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[8px] border border-dark-700">{e}</div>
                            ))}
                          </div>
                          <span className="text-[8px] text-dark-500">{event.attending} katılımcı</span>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-medium">Katıl</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 mb-6">
                <span className="text-sm">🎪</span>
                <span className="text-sm text-purple-300">Etkinlik Hub</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4">
                Gastronomi{' '}
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Etkinliklerini Keşfet
                </span>
              </h3>
              <p className="text-dark-300 mb-8 leading-relaxed">
                Şehrindeki gastronomi etkinliklerini takip et. Restoran açılışları, yemek festivalleri,
                şef atölyeleri, tadım etkinlikleri ve food tourlar — hepsini tek yerden keşfet,
                katıl ve paylaş.
              </p>

              {/* Event Type Grid */}
              <div className="grid grid-cols-2 gap-3">
                {eventTypes.map((event) => (
                  <div key={event.title} className="glass rounded-xl p-4 border border-white/5 group hover:border-purple-500/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-2xl">{event.icon}</span>
                      <span className={`text-[8px] px-2 py-0.5 rounded-full ${event.tagColor} font-medium`}>{event.tag}</span>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">{event.title}</h4>
                    <p className="text-[10px] text-dark-400 leading-relaxed">{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Meeting Planning Banner */}
        <AnimateOnScroll animation="fade-up">
          <div className="relative overflow-hidden rounded-3xl glass border border-brand-400/10 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4">
                  Buluşma Planlama &{' '}
                  <span className="gradient-text">Anketler</span>
                </h3>
                <p className="text-dark-300 mb-6 leading-relaxed">
                  Arkadaşlarınla nerede yemek yiyeceğinize birlikte karar verin. Anketlerle
                  restoran seçin, tarih belirleyin ve herkesin programına uygun planlar oluşturun.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: '📊', label: 'Anket Oluştur' },
                    { icon: '📅', label: 'Tarih Planla' },
                    { icon: '👥', label: 'Davet Gönder' },
                    { icon: '🔔', label: 'Hatırlatıcı' },
                    { icon: '✅', label: 'Yanıt Takibi' },
                    { icon: '📍', label: 'Konum Paylaş' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 px-3 py-2 glass rounded-xl border border-white/5">
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-xs text-dark-200">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meeting Mini Mockup */}
              <div className="flex justify-center">
                <div className="glass rounded-2xl p-5 max-w-xs border border-white/5 w-full">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold text-sm">📊 Nerede Buluşalım?</h4>
                    <span className="text-[9px] bg-brand-400/10 text-brand-400 px-2 py-0.5 rounded-full">Aktif</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    {[
                      { name: '🍕 Italya Pizzeria', votes: 5, pct: 50 },
                      { name: '🥩 Günaydın Steakhouse', votes: 3, pct: 30 },
                      { name: '🍣 Sushi Master', votes: 2, pct: 20 },
                    ].map((opt) => (
                      <div key={opt.name}>
                        <div className="flex items-center justify-between text-[10px] mb-0.5">
                          <span className="text-dark-200">{opt.name}</span>
                          <span className="text-dark-400">{opt.votes} oy</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-brand-400 to-amber-400 h-2 rounded-full transition-all"
                            style={{ width: `${opt.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                    <div className="flex -space-x-2">
                      {['👩', '🧑', '👨', '👧', '🧔'].map((e, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs border border-dark-700">{e}</div>
                      ))}
                    </div>
                    <span className="text-[9px] text-dark-400 ml-auto">10 kişi oy verdi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
