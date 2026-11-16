import React from 'react';
import type { Vehicle } from '../../types';
import { VehicleCard } from './VehicleCard';
import { Reveal, stagger } from '../ui/Reveal';

/** Vehicle cards in a responsive grid, separated by hairline rules. Each card reveals as it scrolls into view. */
export const VehicleGrid: React.FC<{ vehicles: Vehicle[] }> = ({ vehicles }) => (
  <div className="rule-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {vehicles.map((vehicle, i) => (
      <Reveal key={vehicle.id} delay={stagger(i)}>
        <VehicleCard vehicle={vehicle} />
      </Reveal>
    ))}
  </div>
);
