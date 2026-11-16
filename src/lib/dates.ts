const pad = (n: number) => String(n).padStart(2, '0');

/** Local calendar date as YYYY-MM-DD (not UTC, so it is right at any hour in IST). */
export const toISODate = (d: Date) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** Bookings open from tomorrow. */
export const earliestPickupDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return toISODate(d);
};

/** "Monday, 16 November 2026" — the masthead dateline. */
export const formatDateline = (d: Date = new Date()) =>
  d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

/** "Fri, 15 Jan 2027" from a YYYY-MM-DD value. */
export const formatTravelDate = (iso: string) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

/** "8:00 am" from an HH:MM value. */
export const formatTime = (hhmm: string) => {
  if (!hhmm) return '';
  const [h, m] = hhmm.split(':').map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true });
};
