import React from 'react';
import { Check } from 'lucide-react';
import { BOOKING_STEPS } from '../../data/bookingContent';
import { cn } from '../../lib/cn';

interface BookingStepperProps {
  current: number;
  /** Called when a completed step is clicked, to go back to it. */
  onStepClick: (step: number) => void;
}

/** Progress through the four booking steps. Completed steps are clickable. */
export const BookingStepper: React.FC<BookingStepperProps> = ({ current, onStepClick }) => (
  <ol className="grid grid-cols-4 border border-ink-black print:hidden" aria-label="Booking progress">
    {BOOKING_STEPS.map((step) => {
      const isCurrent = step.number === current;
      const isDone = step.number < current;

      return (
        <li key={step.number} className="border-l border-ink-black first:border-l-0">
          <button
            type="button"
            disabled={!isDone}
            onClick={() => onStepClick(step.number)}
            aria-current={isCurrent ? 'step' : undefined}
            className={cn(
              'flex h-full w-full flex-col items-start gap-0.5 px-2.5 py-3 text-left transition-colors sm:px-4',
              isCurrent && 'bg-ink-black text-paper-white',
              isDone && 'hover:bg-paper-aged',
              !isCurrent && !isDone && 'text-ink-muted',
            )}
          >
            <span className="flex w-full items-center justify-between font-sans text-[10px] font-bold uppercase tracking-[0.14em]">
              <span>Step {step.number}</span>
              {isDone && <Check className="h-3.5 w-3.5" aria-label="completed" />}
            </span>
            <span className="font-serif text-base font-bold leading-tight sm:text-lg">{step.title}</span>
            <span className={cn('hidden font-sans text-xs sm:block', isCurrent ? 'text-paper-aged' : 'text-ink-muted')}>
              {step.description}
            </span>
          </button>
        </li>
      );
    })}
  </ol>
);
