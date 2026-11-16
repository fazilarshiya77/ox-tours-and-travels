import React from 'react';
import { Briefcase, Check, ShieldCheck, Users, type LucideIcon } from 'lucide-react';
import type { Vehicle } from '../../types';

/* The read-only parts of a vehicle page: key facts, the write-up, specifications and features. */

const DetailHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="border-b-[3px] border-ink-black pb-2 text-2xl font-black">{children}</h2>
);

const Fact: React.FC<{ icon: LucideIcon; label: string; value: string }> = ({ icon: Icon, label, value }) => (
  <div className="px-3 py-4 text-center">
    <Icon className="mx-auto h-5 w-5" aria-hidden="true" />
    <dt className="folio mt-2">{label}</dt>
    <dd className="font-serif text-xl font-black">{value}</dd>
  </div>
);

/** Seats, luggage and chauffeur at a glance. */
export const VehicleFactStrip: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => (
  <dl className="rule-grid grid-cols-3">
    <Fact icon={Users} label="Seats" value={String(vehicle.passengerCapacity)} />
    <Fact icon={Briefcase} label="Bags" value={String(vehicle.luggageCapacity)} />
    <Fact icon={ShieldCheck} label="Chauffeur" value="Included" />
  </dl>
);

/** The write-up, with a drop cap, plus the trips this vehicle suits. */
export const VehicleStory: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => (
  <section>
    <DetailHeading>About This Vehicle</DetailHeading>
    <p className="dropcap text-justify-news mt-4 text-lg leading-relaxed text-ink-charcoal">{vehicle.fullDescription}</p>

    <h3 className="label-caps mt-6">Recommended for</h3>
    <ul className="mt-2 flex flex-wrap gap-2">
      {vehicle.idealFor.map((useCase) => (
        <li key={useCase} className="border border-ink-black/35 px-3 py-1 font-sans text-[13px] font-medium">
          {useCase}
        </li>
      ))}
    </ul>
  </section>
);

const SPEC_LABELS: [keyof Vehicle['specs'], string][] = [
  ['seatingArrangement', 'Seating'],
  ['acType', 'Air conditioning'],
  ['musicSystem', 'Entertainment'],
  ['chargingPorts', 'Charging'],
  ['fuelType', 'Fuel'],
  ['transmission', 'Drive'],
];

/** Specification table. */
export const VehicleSpecs: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => (
  <section>
    <DetailHeading>Specifications</DetailHeading>
    <table className="w-full text-left text-base">
      <tbody>
        {SPEC_LABELS.map(([key, label]) => (
          <tr key={key} className="border-b border-paper-rule align-top">
            <th scope="row" className="folio w-36 py-3 pr-4 font-semibold sm:w-44">
              {label}
            </th>
            <td className="py-3 text-ink-charcoal">{vehicle.specs[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

/** Cabin features checklist. */
export const VehicleFeatures: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => (
  <section>
    <DetailHeading>Cabin Features</DetailHeading>
    <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
      {vehicle.features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-base text-ink-charcoal">
          <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </section>
);
