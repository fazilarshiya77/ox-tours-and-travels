import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FleetFilterBar } from '../components/fleet/FleetFilterBar';
import { VehicleGrid } from '../components/fleet/VehicleGrid';
import { Page } from '../components/layout/Page';
import { Button } from '../components/ui/Button';
import { CtaBanner, EmptyState } from '../components/ui/Notices';
import { SectionHeader } from '../components/ui/SectionHeader';
import { useFleetFilters } from '../hooks/useFleetFilters';
import { usePageTitle } from '../hooks/usePageTitle';

/** The full fleet catalogue with filters. */
export const FleetPage: React.FC = () => {
  usePageTitle('Our Fleet');
  const { filters, setFilter, vehicles, isFiltered, reset, total } = useFleetFilters();

  return (
    <Page>
      <SectionHeader
        as="h1"
        kicker="The Complete Fleet Catalogue"
        folio="Section A"
        title="A Vehicle for Every Journey"
        deck="From the Toyota Innova Crysta to Force Urbania luxury vans, Tempo Travellers and a 21-seater coach. Every vehicle is inspected before each trip."
      />

      <FleetFilterBar filters={filters} onChange={setFilter} />

      <div className="flex min-h-[44px] items-center justify-between gap-4 py-4">
        <p className="folio" aria-live="polite">
          Showing {vehicles.length} of {total} vehicles
        </p>
        {isFiltered && (
          <Button variant="link" size="sm" onClick={reset}>
            Reset filters
          </Button>
        )}
      </div>

      {vehicles.length > 0 ? (
        <VehicleGrid vehicles={vehicles} />
      ) : (
        <EmptyState
          title="No Matching Vehicles"
          actions={
            <Button variant="secondary" onClick={reset}>
              Clear all filters
            </Button>
          }
        >
          Nothing in the fleet matches these filters. Clear them, or contact our dispatch desk for special
          requirements.
        </EmptyState>
      )}

      <CtaBanner
        kicker="Ox Quality Assurance"
        title="Inspected Before Every Departure"
        text="Every vehicle goes through a pre-departure check: tyres, suspension, air conditioning, the emergency medical kit and a full cabin clean."
      >
        <Button to="/book">
          <span>Book Your Vehicle</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </CtaBanner>
    </Page>
  );
};
