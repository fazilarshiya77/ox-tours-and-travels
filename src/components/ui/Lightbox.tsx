import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useDialog } from '../../hooks/useDialog';

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
  /** Short label shown above the caption, e.g. the collection name. */
  label?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  /** Index of the open photograph, or null when closed. */
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}

const SWIPE_DISTANCE = 50;

/**
 * Fullscreen photograph viewer.
 * Close with Escape, the close button or a click outside the photo;
 * move with the arrow keys, the side buttons or a swipe.
 */
export const Lightbox: React.FC<LightboxProps> = ({ items, index, onChange, onClose }) => {
  const isOpen = index !== null && items.length > 0;
  const dialogRef = useDialog<HTMLDivElement>(isOpen, onClose);
  const touchStartX = useRef<number | null>(null);
  const hasMany = items.length > 1;

  const move = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onChange],
  );

  useEffect(() => {
    if (!isOpen || !hasMany) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, hasMany, move]);

  if (!isOpen || index === null) return null;
  const item = items[Math.min(index, items.length - 1)];
  const arrowButton =
    'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper-white/30 bg-ink-black/70 text-paper-white transition-colors hover:bg-paper-white hover:text-ink-black';

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photograph viewer"
      className="fade-enter fixed inset-0 z-[60] flex flex-col bg-ink-black/95 text-paper-white print:hidden"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-paper-aged">
          Photograph {index + 1} of {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photograph viewer"
          className="flex h-11 w-11 items-center justify-center border border-paper-white/30 transition-colors hover:bg-paper-white hover:text-ink-black"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Stage — a click on the dark area around the photo closes the viewer */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX.current === null || !hasMany) return;
          const distance = e.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(distance) > SWIPE_DISTANCE) move(distance < 0 ? 1 : -1);
        }}
      >
        {hasMany && (
          <button type="button" onClick={() => move(-1)} aria-label="Previous photograph" className={`${arrowButton} left-2 sm:left-5`}>
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        )}

        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          className="fade-enter max-h-full max-w-full border-4 border-paper-white object-contain"
        />

        {hasMany && (
          <button type="button" onClick={() => move(1)} aria-label="Next photograph" className={`${arrowButton} right-2 sm:right-5`}>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Caption */}
      <div className="mx-auto min-h-[4.5rem] max-w-3xl px-4 py-4 text-center sm:px-6" aria-live="polite">
        {item.label && (
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-paper-aged">{item.label}</p>
        )}
        {item.caption && <p className="mt-1 text-[15px] italic leading-snug text-paper-white">{item.caption}</p>}
      </div>
    </div>,
    document.body,
  );
};
