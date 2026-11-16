import React from 'react';
import { Search, SlidersHorizontal, Users } from 'lucide-react';
import { VEHICLE_CATEGORIES } from '../../data/fleetData';
import type { CapacityFilter, FleetFilters, FleetSort } from '../../hooks/useFleetFilters';
import { FilterPills } from '../ui/FilterPills';
import { SelectField, TextField } from '../ui/FormFields';
import { Reveal } from '../ui/Reveal';

interface FleetFilterBarProps {
  filters: FleetFilters;
  onChange: <K extends keyof FleetFilters>(key: K, value: FleetFilters[K]) => void;
}

/** Catalogue controls: category pills, keyword search, group size and sort order. */
export const FleetFilterBar: React.FC<FleetFilterBarProps> = ({ filters, onChange }) => (
  <Reveal className="border-y border-ink-black py-5">
    <FilterPills
      label="Vehicle type"
      options={VEHICLE_CATEGORIES}
      value={filters.category}
      onChange={(value) => onChange('category', value)}
    />

    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
      <TextField
        containerClassName="sm:col-span-2 lg:col-span-6"
        label="Search"
        icon={Search}
        type="search"
        placeholder="Model, type or feature"
        value={filters.query}
        onChange={(e) => onChange('query', e.target.value)}
      />
      <SelectField
        containerClassName="lg:col-span-3"
        label="Group size"
        icon={Users}
        value={filters.capacity}
        onChange={(e) => onChange('capacity', e.target.value as CapacityFilter)}
      >
        <option value="all">Any size</option>
        <option value="1-7">Up to 7 guests</option>
        <option value="8-12">8 to 12 guests</option>
        <option value="13-17">13 to 17 guests</option>
        <option value="18+">18 guests or more</option>
      </SelectField>
      <SelectField
        containerClassName="lg:col-span-3"
        label="Sort by"
        icon={SlidersHorizontal}
        value={filters.sort}
        onChange={(e) => onChange('sort', e.target.value as FleetSort)}
      >
        <option value="featured">Featured</option>
        <option value="capacity-asc">Seats: fewest first</option>
        <option value="capacity-desc">Seats: most first</option>
        <option value="name-asc">Name: A to Z</option>
      </SelectField>
    </div>
  </Reveal>
);
