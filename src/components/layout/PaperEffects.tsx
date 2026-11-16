import React, { useEffect, useRef } from 'react';

/**
 * Two quiet interactive touches on the paper:
 *  - a soft warm light that follows the mouse (desktop only), like a reading lamp
 *  - a thin ink line under the top edge showing how far down the page you have read
 * Both are skipped for touch screens and for visitors who prefer reduced motion.
 */
export const PaperEffects: React.FC = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;

    const paint = () => {
      frame = 0;
      const light = lightRef.current;
      const bar = barRef.current;
      if (light) light.style.background = `radial-gradient(520px circle at ${x}px ${y}px, rgba(255, 244, 214, 0.5), rgba(255, 244, 214, 0) 70%)`;
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      schedule();
    };

    if (!reduceMotion && hasMouse) window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    schedule();

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={lightRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[5] mix-blend-soft-light print:hidden" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[45] h-[3px] print:hidden">
        <div ref={barRef} className="h-full origin-left bg-ink-black" style={{ transform: 'scaleX(0)' }} />
      </div>
    </>
  );
};
