import { useEffect, useRef, useState } from 'react';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

export function useReveal(threshold = 0.1, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef<HTMLDivElement>(null);
  // On mobile: start visible immediately — no hiding content
  const [visible, setVisible] = useState(isMobile);

  useEffect(() => {
    if (isMobile) return; // skip observer on mobile
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}
