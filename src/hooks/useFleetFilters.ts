import { useMemo, useState } from 'react';
import { ALL_VEHICLES, FLEET_DATA } from '../data/fleetData';
import type { Vehicle } from '../types';

export type CapacityFilter = 'all' | '1-7' | '8-12' | '13-17' | '18+';
export type FleetSort = 'featured' | 'capacity-asc' | 'capacity-desc' | 'name-asc';

export interface FleetFilters {
  category: string;
  query: string;
  capacity: CapacityFilter;
  sort: FleetSort;
}

const DEFAULT_FILTERS: FleetFilters = {
  category: ALL_VEHICLES,
  query: '',
  capacity: 'all',
  sort: 'featured',
};

const CAPACITY_BANDS: Record<Exclude<CapacityFilter, 'all'>, [number, number]> = {
  '1-7': [1, 7],
  '8-12': [8, 12],
  '13-17': [13, 17],
  '18+': [18, Infinity],
};

const matchesQuery = (vehicle: Vehicle, query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [vehicle.name, vehicle.category, vehicle.tagline, ...vehicle.features].some((text) =>
    text.toLowerCase().includes(q),
  );
};

const SORTERS: Record<FleetSort, (a: Vehicle, b: Vehicle) => number> = {
  featured: (a, b) => Number(b.featured) - Number(a.featured),
  'capacity-asc': (a, b) => a.passengerCapacity - b.passengerCapacity,
  'capacity-desc': (a, b) => b.passengerCapacity - a.passengerCapacity,
  'name-asc': (a, b) => a.name.localeCompare(b.name),
};

/** Filter and sort state for the fleet catalogue. */
export const useFleetFilters = () => {
  const [filters, setFilters] = useState<FleetFilters>(DEFAULT_FILTERS);

  const vehicles = useMemo(() => {
    const band = filters.capacity === 'all' ? null : CAPACITY_BANDS[filters.capacity];
    return FLEET_DATA.filter(
      (v) =>
        (filters.category === ALL_VEHICLES || v.category === filters.category) &&
        matchesQuery(v, filters.query) &&
        (!band || (v.passengerCapacity >= band[0] && v.passengerCapacity <= band[1])),
    ).sort(SORTERS[filters.sort]);
  }, [filters]);

  const setFilter = <K extends keyof FleetFilters>(key: K, value: FleetFilters[K]) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const isFiltered =
    filters.category !== ALL_VEHICLES || filters.query.trim() !== '' || filters.capacity !== 'all';

  const reset = () => setFilters((prev) => ({ ...DEFAULT_FILTERS, sort: prev.sort }));

  return { filters, setFilter, vehicles, isFiltered, reset, total: FLEET_DATA.length };
};
