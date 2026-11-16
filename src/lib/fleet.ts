import { FLEET_DATA } from '../data/fleetData';
import type { Vehicle, VehicleCategory } from '../types';

export const findVehicle = (id?: string): Vehicle | undefined =>
  id ? FLEET_DATA.find((v) => v.id === id) : undefined;

export const vehiclesInCategory = (category: VehicleCategory) =>
  FLEET_DATA.filter((v) => v.category === category);

/** Smallest and largest seating capacity offered within a category. */
export const capacityRange = (category: VehicleCategory) => {
  const seats = vehiclesInCategory(category).map((v) => v.passengerCapacity);
  return { min: Math.min(...seats), max: Math.max(...seats) };
};

export const formatCapacityRange = (category: VehicleCategory) => {
  const { min, max } = capacityRange(category);
  return min === max ? `${max} seats` : `${min}–${max} seats`;
};

export const MAX_FLEET_CAPACITY = Math.max(...FLEET_DATA.map((v) => v.passengerCapacity));
