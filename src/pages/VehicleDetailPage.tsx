import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { VehicleGrid } from '../components/fleet/VehicleGrid';
import { Page } from '../components/layout/Page';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/Notices';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TariffCard } from '../components/vehicle/TariffCard';
import { VehicleFactStrip, VehicleFeatures, VehicleSpecs, VehicleStory } from '../components/vehicle/VehicleDetails';
import { VehicleEnquiryForm } from '../components/vehicle/VehicleEnquiryForm';
import { VehicleGallery } from '../components/vehicle/VehicleGallery';
import { FLEET_DATA } from '../data/fleetData';
import { usePageTitle } from '../hooks/usePageTitle';
import { findVehicle } from '../lib/fleet';
import { Reveal } from '../components/ui/Reveal';

/** One vehicle: photographs, write-up, specifications, tariff and an enquiry coupon. */
export const VehicleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = findVehicle(id);
  usePageTitle(vehicle ? vehicle.name : 'Vehicle Not Found');

  if (!vehicle) {
    return (
      <Page>
        <EmptyState title="Vehicle Not Found" actions={<Button to="/fleet">Return to the Fleet</Button>}>
          This vehicle is not in our fleet, or the link is out of date.
        </EmptyState>
      </Page>
    );
  }

  const others = FLEET_DATA.filter((v) => v.id !== vehicle.id)
    .sort((a, b) => Number(b.category === vehicle.category) - Number(a.category === vehicle.category))
    .slice(0, 3);

  return (
    <Page>
      <nav aria-label="Breadcrumb" className="folio mb-5">
        <Link to="/fleet" className="hover:text-ink-black hover:underline">
          The Fleet
        </Link>
        <span className="mx-2" aria-hidden="true">/</span>
        <span>{vehicle.category}</span>
      </nav>

      <Reveal as="header" className="mb-8">
        <div className="rule-thick-thin" aria-hidden="true" />
        <div className="flex items-baseline justify-between gap-4 pt-3">
          <p className="kicker">{vehicle.category}</p>
          <p className="folio">{vehicle.availabilityStatus}</p>
        </div>
        <h1 className="headline mt-2 text-4xl sm:text-5xl lg:text-6xl">{vehicle.name}</h1>
        <p className="deck mt-3 max-w-3xl text-lg sm:text-xl">{vehicle.tagline}</p>
      </Reveal>

      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-8 lg:border-r lg:border-paper-rule lg:pr-8">
          <Reveal>
            <VehicleGallery vehicle={vehicle} />
          </Reveal>
          <Reveal>
            <VehicleFactStrip vehicle={vehicle} />
          </Reveal>
          <Reveal>
            <VehicleStory vehicle={vehicle} />
          </Reveal>
          <Reveal>
            <VehicleSpecs vehicle={vehicle} />
          </Reveal>
          <Reveal>
            <VehicleFeatures vehicle={vehicle} />
          </Reveal>
        </div>

        <div className="space-y-8 lg:col-span-4 lg:pl-8">
          <Reveal delay={150}>
            <TariffCard vehicle={vehicle} />
          </Reveal>
          <Reveal delay={300}>
            <VehicleEnquiryForm vehicle={vehicle} />
          </Reveal>
        </div>
      </div>

      <section className="mt-16">
        <SectionHeader kicker="Also in the Fleet" title="Compare Other Vehicles" />
        <VehicleGrid vehicles={others} />
      </section>
    </Page>
  );
};
