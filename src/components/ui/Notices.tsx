import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/cn';
import { Reveal } from './Reveal';

interface NoticeProps {
  title: string;
  children?: React.ReactNode;
  /** Buttons shown under the text. */
  actions?: React.ReactNode;
  className?: string;
}

/** Shown when a search or filter has no results. */
export const EmptyState: React.FC<NoticeProps> = ({ title, children, actions, className }) => (
  <div className={cn('border border-paper-rule px-6 py-14 text-center', className)}>
    <h3 className="text-2xl font-black">{title}</h3>
    {children && <p className="mx-auto mt-2 max-w-md text-ink-muted">{children}</p>}
    {actions && <div className="mt-6 flex flex-wrap justify-center gap-3">{actions}</div>}
  </div>
);

/** Shown after a form has been completed. */
export const SuccessNotice: React.FC<NoticeProps> = ({ title, children, actions, className }) => (
  <div role="status" className={cn('border border-ink-black bg-paper-white px-5 py-8 text-center sm:px-8', className)}>
    <CheckCircle2 className="mx-auto h-9 w-9" aria-hidden="true" />
    <h3 className="mt-3 text-2xl font-black">{title}</h3>
    {children && <div className="mx-auto mt-2 max-w-md text-ink-charcoal">{children}</div>}
    {actions && <div className="mt-6 flex flex-col items-center gap-3">{actions}</div>}
  </div>
);

interface CtaBannerProps {
  kicker: string;
  title: string;
  text: string;
  /** Buttons on the right. */
  children: React.ReactNode;
}

/** Double-framed call-to-action box used at the foot of a page. */
export const CtaBanner: React.FC<CtaBannerProps> = ({ kicker, title, text, children }) => (
  <Reveal as="aside" className="notice-box mt-16 flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
    <div className="max-w-2xl">
      <p className="kicker">{kicker}</p>
      <h2 className="headline mt-1.5 text-3xl sm:text-4xl">{title}</h2>
      <p className="mt-2 text-ink-charcoal">{text}</p>
    </div>
    <div className="flex shrink-0 flex-wrap gap-3">{children}</div>
  </Reveal>
);
