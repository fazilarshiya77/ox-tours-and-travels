import { FLEET_DATA } from './fleetData';

/** The front-page hero photograph. */
export const HERO_PHOTO = {
  src: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.38%20PM.jpeg',
  alt: 'Inside a Force Urbania luxury van: cream reclining seats, wood trim and a ceiling-mounted screen',
  caption: 'Inside the Force Urbania: a standing-height cabin, reclining seats and a ceiling-mounted screen.',
  credit: 'Ox Tours and Travels fleet',
};

const seats = FLEET_DATA.map((vehicle) => vehicle.passengerCapacity);

/** The strip of key facts under the hero. The first two are calculated from the fleet data. */
export const HERO_STATS = [
  { value: String(FLEET_DATA.length), label: 'Vehicles in the fleet' },
  { value: `${Math.min(...seats)}–${Math.max(...seats)}`, label: 'Seats per vehicle' },
  { value: '24/7', label: 'Dispatch desk' },
  { value: '100%', label: 'Chauffeur driven' },
];

/** "The Ox Standard" — three short front-page briefs. */
export const TRUST_BRIEFS = [
  {
    title: 'Chauffeur-Driven Fleet',
    text: 'Vetted, courteous highway drivers trained in route foresight, punctuality and guest privacy.',
  },
  {
    title: '24/7 Journey Monitoring',
    text: 'A dispatch coordinator assists your trip from roll-out to arrival at the destination.',
  },
  {
    title: 'Transparent Tariffs',
    text: 'Clear itemised statements by distance, day slabs, tolls and parking, with no hidden costs.',
  },
];
