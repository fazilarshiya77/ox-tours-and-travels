import { SITE_CONFIG } from '../data/siteConfig';

const DEFAULT_GREETING =
  'Hello Ox Tours and Travels, I would like to enquire about a journey.';

/** WhatsApp chat link to the business number, with the message pre-filled. */
export const whatsappUrl = (message: string = DEFAULT_GREETING) =>
  `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

export const mailtoUrl = (subject: string, body: string, to: string = SITE_CONFIG.contact.email) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
