import React from 'react';
import { Printer } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { mailtoUrl, whatsappUrl } from '../../lib/contact';
import { formatDateline } from '../../lib/dates';
import { bookingMessage } from '../../lib/messages';
import type { BookingFormData } from '../../types';
import { Button } from '../ui/Button';
import { SummaryList } from '../ui/SummaryList';
import { contactItems, journeyItems } from './journeySummary';

interface BookingVoucherProps {
  data: BookingFormData;
  requestId: string;
  onReset: () => void;
}

/** The finished journey request slip: send it to the desk, print it, or start again. */
export const BookingVoucher: React.FC<BookingVoucherProps> = ({ data, requestId, onReset }) => {
  const message = bookingMessage(data, requestId);

  return (
    <div>
      {/* What to do next — not printed */}
      <div className="notice-box mb-8 p-5 text-center sm:p-7 print:hidden">
        <p className="kicker">One Last Step</p>
        <h2 className="mt-1 text-2xl font-black sm:text-3xl">Send Your Request to the Dispatch Desk</h2>
        <p className="mx-auto mt-2 max-w-xl text-ink-charcoal">
          Your request slip is ready, {data.fullName.trim()}. Send it to us and a coordinator will confirm
          availability and the tariff.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={whatsappUrl(message)} external size="lg">
            Send on WhatsApp
          </Button>
          <Button href={mailtoUrl(`Journey request ${requestId}`, message, SITE_CONFIG.contact.reservationsEmail)} variant="secondary" size="lg">
            Send by Email
          </Button>
        </div>
      </div>

      {/* The slip itself — this is what prints */}
      <article className="coupon bg-paper-white p-5 sm:p-8">
        <header className="flex flex-wrap items-end justify-between gap-3 border-b-[3px] border-ink-black pb-4">
          <div>
            <p className="nameplate mb-1 text-3xl">{SITE_CONFIG.nameplate}</p>
            <h2 className="font-mono text-lg font-bold uppercase tracking-[0.12em]">Journey Request Slip</h2>
          </div>
          <dl className="text-right font-mono text-sm">
            <div>
              <dt className="inline text-ink-muted">No. </dt>
              <dd className="inline font-bold">{requestId}</dd>
            </div>
            <div>
              <dt className="sr-only">Date</dt>
              <dd className="text-ink-muted">{formatDateline()}</dd>
            </div>
          </dl>
        </header>

        <SummaryList items={journeyItems(data)} columns={3} className="border-b border-dashed border-ink-black/50 py-5" />
        <SummaryList items={contactItems(data)} className="py-5" />

        {data.specialRequests.trim() && (
          <p className="border-t border-dashed border-ink-black/50 pt-4 font-mono text-sm">
            <span className="folio">Notes: </span>
            {data.specialRequests.trim()}
          </p>
        )}

        <p className="mt-5 border-t border-ink-black pt-3 font-sans text-xs text-ink-muted">
          A request for availability and quotation, not a confirmed booking. Dispatch desk:{' '}
          {SITE_CONFIG.contact.primaryPhone}
        </p>
      </article>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Button variant="secondary" onClick={() => window.print()}>
          <Printer className="h-4 w-4" aria-hidden="true" />
          <span>Print Slip</span>
        </Button>
        <Button variant="link" onClick={onReset}>
          Plan another journey
        </Button>
      </div>
    </div>
  );
};
