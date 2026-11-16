import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ShieldCheck, Users } from 'lucide-react';
import type { BookingLocationState } from '../../hooks/useBookingForm';
import type { Vehicle } from '../../types';
import { Button } from '../ui/Button';
import { NewsPhoto } from '../ui/NewsPhoto';

/** One vehicle as a newspaper listing: photo, kicker, headline, key facts and two actions. */
export const VehicleCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const detailPath = `/fleet/${vehicle.id}`;
  const bookingState: BookingLocationState = { preselectedVehicle: vehicle.id };

  return (
    <article className="group flex h-full flex-col p-5 sm:p-6">
      <Link to={detailPath} tabIndex={-1} className="block">
        <NewsPhoto
          src={vehicle.images.main}
          alt={vehicle.images.alt}
          imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="mt-4 flex items-baseline justify-between gap-3">
        <p className="kicker">{vehicle.category}</p>
        <p className="folio shrink-0">{vehicle.availabilityStatus}</p>
      </div>

      <h3 className="mt-2 text-2xl font-black leading-tight">
        <Link to={detailPath} className="decoration-2 underline-offset-4 hover:underline">
          {vehicle.name}
        </Link>
      </h3>
      <p className="deck mt-1.5 line-clamp-2 text-base">{vehicle.tagline}</p>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-y border-paper-rule py-2 font-sans text-xs font-semibold text-ink-charcoal">
        <li className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" aria-hidden="true" /> {vehicle.passengerCapacity} seats
        </li>
        <li className="flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5" aria-hidden="true" /> {vehicle.luggageCapacity} bags
        </li>
        <li className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Chauffeur driven
        </li>
      </ul>

      <p className="mt-3 line-clamp-3 flex-1 text-base leading-relaxed text-ink-charcoal">{vehicle.shortDescription}</p>

      <p className="mt-4 flex items-baseline justify-between gap-3">
        <span className="folio">Tariff</span>
        <span className="font-serif text-base font-bold">{vehicle.pricingPlaceholder.indicativeRate}</span>
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button to={detailPath} variant="secondary" size="sm">
          Details
        </Button>
        <Button to="/book" state={bookingState} size="sm">
          Enquire
        </Button>
      </div>
    </article>
  );
};
