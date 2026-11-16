import React from 'react';
import { cn } from '../../lib/cn';

export interface SummaryItem {
  label: string;
  value: React.ReactNode;
  /** A second, quieter line under the value. */
  detail?: React.ReactNode;
}

interface SummaryListProps {
  items: SummaryItem[];
  /** Number of columns from the `sm` breakpoint up. */
  columns?: 2 | 3;
  className?: string;
}

/** Label / value pairs, used on the booking review and the request slip. */
export const SummaryList: React.FC<SummaryListProps> = ({ items, columns = 2, className }) => (
  <dl className={cn('grid grid-cols-1 gap-x-8 gap-y-5', columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2', className)}>
    {items.map((item) => (
      <div key={item.label}>
        <dt className="folio">{item.label}</dt>
        <dd className="mt-0.5 font-mono text-[15px] font-bold leading-snug text-ink-black">{item.value}</dd>
        {item.detail && <dd className="font-mono text-sm text-ink-muted">{item.detail}</dd>}
      </div>
    ))}
  </dl>
);
