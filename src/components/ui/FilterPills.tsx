import { cn } from '../../lib/cn';

interface FilterPillsProps {
  /** Visible label above the pills. */
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}

/** Category filter: a wrapped row of toggle buttons. */
export function FilterPills({ label, options, value, onChange }: FilterPillsProps) {
  return (
    <div>
      <p className="label-caps mb-2">{label}</p>
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option)}
              className={cn(
                'min-h-[40px] border px-3.5 font-sans text-[14px] font-bold uppercase tracking-[0.1em] transition-colors',
                active
                  ? 'border-ink-black bg-ink-black text-paper-white'
                  : 'border-ink-black/35 text-ink-charcoal hover:border-ink-black hover:bg-paper-aged',
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
