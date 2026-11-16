export const SERVICE_INTERESTS: string[] = [
  'Outstation Highway Travel',
  'Local City Hourly Rental',
  'Airport & Terminal Transfer',
  'Force Urbania Luxury Van',
  'Tempo Traveller Group Charter',
  'Corporate Transit Account',
  'Bespoke Tour Itinerary',
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'How are outstation tariffs calculated?',
    answer:
      'Outstation tariffs are typically structured on minimum kilometer slabs per calendar day (for example 250 or 300 km per day), including vehicle sanitization and chauffeur allowances. Tolls and state permits are clearly detailed upfront.',
  },
  {
    question: 'Can we request stops or route diversions during the trip?',
    answer:
      "Certainly. Unlike scheduled buses, your chauffeured vehicle is at your party's exclusive command throughout the agreed itinerary.",
  },
  {
    question: 'What is the procedure for airport transfers?',
    answer:
      'We monitor your scheduled flight. Your chauffeur will be stationed at the arrival terminal with a printed guest name board and will assist with all heavy luggage.',
  },
  {
    question: 'How soon should group vehicles like Urbania or Tempo Travellers be reserved?',
    answer:
      'For high-demand holiday weekends, festival periods and wedding seasons, we recommend reserving 7 to 14 days in advance to secure preferred seating configurations.',
  },
];
