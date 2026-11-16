import React, { useId } from 'react';
import { AlertCircle, Minus, Plus } from 'lucide-react';

interface NumberStepperProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  error?: string;
  hint?: string;
}

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

/** Number field with large − / + buttons, easy to use on a phone. */
export const NumberStepper: React.FC<NumberStepperProps> = ({ label, value, min, max, onChange, error, hint }) => {
  const id = useId();
  const stepButton =
    'flex h-[2.875rem] w-12 shrink-0 items-center justify-center border border-ink-black/40 bg-paper-white transition-colors hover:bg-ink-black hover:text-paper-white disabled:pointer-events-none disabled:opacity-40';

  return (
    <div>
      <label htmlFor={id} className="label-caps mb-1.5 block">
        {label}
      </label>
      <div className="flex">
        <button
          type="button"
          className={stepButton}
          onClick={() => onChange(clamp(value - 1, min, max))}
          disabled={value <= min}
          aria-label={`Decrease ${label.toLowerCase()}`}
        >
          <Minus className="h-4 w-4" aria-hidden="true" />
        </button>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(clamp(parseInt(e.target.value, 10) || min, min, max))}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className="field-input -mx-px text-center font-mono text-lg font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          className={stepButton}
          onClick={() => onChange(clamp(value + 1, min, max))}
          disabled={value >= max}
          aria-label={`Increase ${label.toLowerCase()}`}
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1 font-sans text-xs text-ink-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 flex items-start gap-1 font-sans text-xs font-medium text-press">
          <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
