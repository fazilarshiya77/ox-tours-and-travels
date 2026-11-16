import React, { useEffect, useState } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface CountUpProps {
  /** The final text, e.g. "8", "7–21", "24/7" or "100%". Every number in it counts up from zero. */
  value: string;
  /** Milliseconds the count takes. */
  duration?: number;
  className?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts every number inside `value` up from 0 once it scrolls into view.
 * Non-number text ("–", "/", "%") stays in place. Shows the final value straight away
 * for visitors who prefer reduced motion, and to screen readers at all times.
 */
export const CountUp: React.FC<CountUpProps> = ({ value, duration = 2200, className }) => {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [progress, setProgress] = useState(0);
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!visible || reduceMotion) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setProgress(easeOutCubic(t));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, reduceMotion, duration]);

  const parts = value.split(/(\d+)/);
  const shown = reduceMotion ? 1 : progress;

  return (
    <span ref={ref} className={className} aria-label={value} style={{ fontVariantNumeric: 'tabular-nums' }}>
      <span aria-hidden="true">
        {parts.map((part) => (/^\d+$/.test(part) ? Math.round(Number(part) * shown) : part)).join('')}
      </span>
    </span>
  );
};
