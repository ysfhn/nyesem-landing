'use client';

import { useEffect, useRef, useState, ReactNode, useMemo } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    if (mq.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const getInitialStyle = useMemo((): React.CSSProperties => {
    if (prefersReducedMotion) return { opacity: 1 };

    const base: React.CSSProperties = {
      opacity: 0,
      transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    };

    switch (animation) {
      case 'fade-up':
        return { ...base, transform: 'translateY(40px)' };
      case 'fade-down':
        return { ...base, transform: 'translateY(-40px)' };
      case 'fade-left':
        return { ...base, transform: 'translateX(40px)' };
      case 'fade-right':
        return { ...base, transform: 'translateX(-40px)' };
      case 'zoom-in':
        return { ...base, transform: 'scale(0.9)' };
      case 'fade':
        return base;
      default:
        return base;
    }
  }, [animation, delay, duration, prefersReducedMotion]);

  const getVisibleStyle = useMemo((): React.CSSProperties => {
    if (prefersReducedMotion) return { opacity: 1 };
    return {
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1)',
      transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    };
  }, [delay, duration, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyle : getInitialStyle}
    >
      {children}
    </div>
  );
}
