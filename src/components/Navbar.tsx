'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const navLinks = [
    { href: '#features', label: 'Özellikler' },
    { href: '#travel', label: 'Seyahat' },
    { href: '#events', label: 'Etkinlikler' },
    { href: '/restoranlar', label: 'Restoranlar İçin' },
    { href: '#how-it-works', label: 'Nasıl Çalışır' },
    { href: '#screenshots', label: 'Ekranlar' },
    { href: '#testimonials', label: 'Yorumlar' },
    { href: '#faq', label: 'SSS' },
  ];

  return (
    <nav
      aria-label="Ana navigasyon"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 via-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-brand-400/25 group-hover:shadow-brand-400/40 transition-all duration-300 group-hover:scale-105">
              <span className="text-lg" aria-hidden="true">🍽️</span>
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">
              Nyesem
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-dark-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#download"
              className="px-5 py-2.5 bg-gradient-to-r from-brand-400 to-amber-500 text-dark-900 font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Uygulamayı İndir
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobil navigasyon menüsü"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-dark-900/95 backdrop-blur-xl border-t border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-dark-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-3 px-4">
            <ThemeToggle />
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-brand-400 to-amber-500 text-dark-900 font-semibold text-center rounded-xl"
            >
              Uygulamayı İndir
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
