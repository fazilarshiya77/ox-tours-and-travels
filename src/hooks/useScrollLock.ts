import { useEffect } from 'react';

/** Stops the page behind an overlay from scrolling while `active` is true. */
export const useScrollLock = (active: boolean) => {
  useEffect(() => {
    if (!active) return;
    const { body, documentElement } = document;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;

    body.style.overflow = 'hidden';
    // Keep the layout from shifting when the scrollbar disappears.
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [active]);
};
