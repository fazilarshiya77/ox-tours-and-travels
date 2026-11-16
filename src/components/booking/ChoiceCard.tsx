import React from 'react';
import { cn } from '../../lib/cn';

interface ChoiceCardProps {
  title: string;
  description: string;
  /** Small text on the right of the title, e.g. "9–17 seats". */
  meta?: string;
  selected: boolean;
  disabled?: boolean;
  onSelect: () => void;
}

/** A large selectable option, used for the trip type and the vehicle type. */
export const ChoiceCard: React.FC<ChoiceCardProps> = ({ title, description, meta, selected, disabled, onSelect }) => (
  <button
    type="button"
    role="radio"
    aria-checked={selected}
    disabled={disabled}
    onClick={onSelect}
    className={cn(
      'flex h-full w-full flex-col gap-1 border p-3.5 text-left transition-colors',
      selected
        ? 'border-ink-black bg-ink-black text-paper-white'
        : 'border-ink-black/35 bg-paper-white hover:border-ink-black',
      disabled && 'cursor-not-allowed opacity-45 hover:border-ink-black/35',
    )}
  >
    <span className="flex w-full items-baseline justify-between gap-2">
      <span className="font-serif text-lg font-bold leading-tight">{title}</span>
      {meta && (
        <span className="shrink-0 font-sans text-[11px] font-bold uppercase tracking-[0.1em]">{meta}</span>
      )}
    </span>
    <span className={cn('text-[15px] leading-snug', selected ? 'text-paper-aged' : 'text-ink-muted')}>
      {description}
    </span>
  </button>
);
