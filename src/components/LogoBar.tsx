'use client';

import AnimateOnScroll from './AnimateOnScroll';

const partners = [
  { name: 'İstanbul', emoji: '🏙️' },
  { name: 'Berlin', emoji: '🇩🇪' },
  { name: 'Paris', emoji: '🇫🇷' },
  { name: 'Londra', emoji: '🇬🇧' },
  { name: 'Roma', emoji: '🇮🇹' },
  { name: 'Tokyo', emoji: '🇯🇵' },
  { name: 'Dubai', emoji: '🇦🇪' },
  { name: 'Barcelona', emoji: '🇪🇸' },
  { name: 'Amsterdam', emoji: '🇳🇱' },
  { name: 'Viyana', emoji: '🇦🇹' },
  { name: 'Ankara', emoji: '🏛️' },
  { name: 'İzmir', emoji: '🌊' },
];

export default function LogoBar() {
  const doubled = [...partners, ...partners];

  return (
    <section className="relative py-16 bg-dark-900 overflow-hidden" aria-label="Nyesem'in mevcut olduğu şehirler">
      <AnimateOnScroll animation="fade-up">
        <p className="text-center text-sm text-dark-400 mb-8 tracking-widest uppercase font-medium relative z-10">
          Dünya genelinde gastronomi keşfi
        </p>
      </AnimateOnScroll>

      {/* Marquee */}
      <div className="relative" aria-roledescription="marquee" aria-label="Desteklenen şehirler listesi">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]" aria-hidden="false">
          {doubled.map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-8 px-5 py-2.5 glass-light rounded-full whitespace-nowrap hover:bg-white/10 transition-colors duration-300 border border-white/5 hover:border-brand-400/15"
            >
              <span className="text-xl">{partner.emoji}</span>
              <span className="text-sm text-dark-300 font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
