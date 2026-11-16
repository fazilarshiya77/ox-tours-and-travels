import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrolled';

/** Appears after scrolling down; sits just above the WhatsApp icon. */
export const BackToTopButton: React.FC = () => {
  const visible = useScrolled(600);
  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      title="Back to top"
      className="fade-enter fixed bottom-20 right-6 z-30 flex h-10 w-10 items-center justify-center border border-ink-black bg-paper-warm text-ink-black transition-colors hover:bg-ink-black hover:text-paper-white print:hidden"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
};
