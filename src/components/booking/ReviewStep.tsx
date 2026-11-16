import React from 'react';
import { ShieldCheck } from 'lucide-react';
import type { BookingForm } from '../../hooks/useBookingForm';
import { Button } from '../ui/Button';
import { SummaryList, type SummaryItem } from '../ui/SummaryList';
import { contactItems, journeyItems } from './journeySummary';
import { StepHeading } from './StepHeading';

type StepProps = Pick<BookingForm, 'data' | 'goTo'>;

const ReviewBlock: React.FC<{ title: string; items: SummaryItem[]; onEdit: () => void; note?: string }> = ({
  title,
  items,
  onEdit,
  note,
}) => (
  <section className="border border-ink-black/35 bg-paper-white p-4 sm:p-5">
    <div className="mb-4 flex items-center justify-between border-b border-paper-rule pb-2">
      <h3 className="label-caps">{title}</h3>
      <Button variant="link" size="sm" onClick={onEdit}>
        Edit
      </Button>
    </div>
    <SummaryList items={items} />
    {note && (
      <p className="mt-4 border-t border-paper-rule pt-3 text-[15px] italic text-ink-charcoal">
        <span className="folio not-italic">Notes: </span>
        {note}
      </p>
    )}
  </section>
);

/** Step 4 — a read-only summary with links back to each earlier step. */
export const ReviewStep: React.FC<StepProps> = ({ data, goTo }) => {
  const [route, schedule, vehicle] = journeyItems(data);

  return (
    <div className="space-y-5">
      <StepHeading step={4} title="Review Your Request" description="Check everything before you create your journey request." />

      <ReviewBlock title="Route & schedule" items={[route, schedule]} onEdit={() => goTo(1)} />
      <ReviewBlock title="Vehicle" items={[vehicle]} onEdit={() => goTo(2)} note={data.specialRequests.trim()} />
      <ReviewBlock title="Contact" items={contactItems(data)} onEdit={() => goTo(3)} />

      <p className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-muted">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-ink-black" aria-hidden="true" />
        <span>
          This is a request for availability and a quotation from Ox Tours and Travels. No payment is taken at this
          step.
        </span>
      </p>
    </div>
  );
};
