import { useEffect, useRef, useState } from 'react';

/**
 * Reports when an element first scrolls into view.
 * Becomes true once and stays true. If the visitor prefers reduced motion,
 * or the browser cannot observe scrolling, it is true straight away.
 */
export const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Start a little after the block's top edge has entered the screen.
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};
