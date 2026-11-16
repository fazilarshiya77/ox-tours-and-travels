import { cn } from '../../lib/cn';

interface SegmentedControlProps<T extends string> {
  /** Accessible name for the group. */
  label: string;
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

/** A row of joined buttons for picking exactly one option. */
export function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
  className,
}: SegmentedControlProps<T>) {
  return (
    <div role="radiogroup" aria-label={label} className={cn('inline-flex border border-ink-black', className)}>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={cn(
              'min-h-[40px] flex-1 whitespace-nowrap border-l border-ink-black px-3.5 font-sans text-[14px] font-bold uppercase tracking-[0.1em] transition-colors first:border-l-0',
              active ? 'bg-ink-black text-paper-white' : 'text-ink-charcoal hover:bg-paper-aged',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
