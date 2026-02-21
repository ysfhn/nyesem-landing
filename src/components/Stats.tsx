'use client';

import { useEffect, useRef, useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;

          // Check reduced motion preference
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReducedMotion) {
            setCount(target);
            return;
          }

          const duration = 2000;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('tr-TR')}{suffix}
    </span>
  );
}

const stats = [
  {
    value: 10000,
    suffix: '+',
    label: 'Aktif Kullanıcı',
    description: 'Gastronomi tutkunu',
    icon: '👥',
    color: 'from-brand-400 to-amber-500',
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Restoran',
    description: 'Kayıtlı mekan',
    icon: '🍽️',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    value: 50000,
    suffix: '+',
    label: 'Değerlendirme',
    description: 'Kullanıcı yorumu',
    icon: '⭐',
    color: 'from-purple-400 to-violet-400',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Ülke',
    description: 'Global erişim',
    icon: '🌍',
    color: 'from-green-400 to-emerald-400',
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 bg-section-warm overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-warm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Rakamlarla <span className="gradient-text">Nyesem</span>
          </h2>
          <p className="text-lg text-dark-300">
            Büyüyen topluluğumuz ve genişleyen gastronomi ağımız
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} animation="fade-up" delay={index * 100}>
              <div className="stat-card glass rounded-3xl p-8 text-center border border-white/5 hover:border-white/10 transition-all duration-300 group">
                {/* Icon with gradient bg */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center text-3xl mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))` }}
                >
                  <span aria-hidden="true">{stat.icon}</span>
                </div>
                <div className={`text-4xl md:text-5xl font-display font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-white font-semibold mb-1">{stat.label}</h3>
                <p className="text-sm text-dark-400">{stat.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
