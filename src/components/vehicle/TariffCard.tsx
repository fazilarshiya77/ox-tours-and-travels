import React from 'react';
import { whatsappUrl } from '../../lib/contact';
import type { Vehicle } from '../../types';
import { Button } from '../ui/Button';

/** Tariff notice with a one-tap WhatsApp enquiry for this vehicle. */
export const TariffCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const { indicativeRate, rateType, note } = vehicle.pricingPlaceholder;
  const message = `Hello Ox Tours and Travels! I am enquiring about the ${vehicle.name}. Please share the tariff and availability.`;

  return (
    <aside className="notice-box p-5 text-center sm:p-6">
      <p className="kicker">Tariff</p>
      <p className="mt-1 font-serif text-3xl font-black leading-tight">{indicativeRate}</p>
      <p className="deck mt-1 text-base">{rateType}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-charcoal">{note}</p>
      <Button href={whatsappUrl(message)} external fullWidth className="mt-5">
        Ask on WhatsApp
      </Button>
    </aside>
  );
};
