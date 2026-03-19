import { useEffect, useRef, useState } from 'react';

// Replays every time the element enters/leaves the viewport
export function useReveal(threshold = 0.1, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle on scroll down AND scroll up
        setVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}
