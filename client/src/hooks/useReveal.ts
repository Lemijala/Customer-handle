import { useEffect, useRef, useState } from 'react';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

export function useReveal(threshold = 0.1, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold, rootMargin }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [threshold, rootMargin]);

  return { ref, visible };
}
