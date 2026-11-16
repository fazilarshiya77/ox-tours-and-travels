import { useEffect, useRef } from 'react';
import { useScrollLock } from './useScrollLock';

/**
 * Shared behaviour for modal overlays (lightbox, mobile menu):
 * locks page scroll, closes on Escape, keeps Tab inside the dialog,
 * and returns focus to the element that opened it.
 */
export const useDialog = <T extends HTMLElement>(isOpen: boolean, onClose: () => void) => {
  const dialogRef = useRef<T>(null);
  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    const focusables = () =>
      Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);

    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      opener?.focus?.();
    };
  }, [isOpen, onClose]);

  return dialogRef;
};
