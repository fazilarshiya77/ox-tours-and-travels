import React from 'react';
import { Clock, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { telHref, whatsappUrl } from '../../lib/contact';
import { Button } from '../ui/Button';

const DetailRow: React.FC<{ icon: LucideIcon; label: string; children: React.ReactNode }> = ({
  icon: Icon,
  label,
  children,
}) => (
  <div className="flex gap-4 border-b border-paper-rule py-4">
    <Icon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
    <div>
      <dt className="folio">{label}</dt>
      <dd className="mt-0.5 text-base leading-relaxed">{children}</dd>
    </div>
  </div>
);

/** Address, phone lines, email and hours of the dispatch office. */
export const OfficeDetails: React.FC = () => {
  const { contact } = SITE_CONFIG;

  return (
    <aside>
      <h2 className="border-b-[3px] border-ink-black pb-2 text-2xl font-black">Dispatch Headquarters</h2>
      <dl>
        <DetailRow icon={MapPin} label="Office">
          {contact.addressLine1}
          <br />
          {contact.addressLine2}
        </DetailRow>
        <DetailRow icon={Phone} label="Telephone">
          <a href={telHref(contact.primaryPhone)} className="block font-bold hover:underline">
            {contact.primaryPhone}
          </a>
          <a href={telHref(contact.secondaryPhone)} className="block text-ink-muted hover:underline">
            {contact.secondaryPhone}
          </a>
        </DetailRow>
        <DetailRow icon={Mail} label="Email">
          <a href={`mailto:${contact.email}`} className="break-all hover:underline">
            {contact.email}
          </a>
        </DetailRow>
        <DetailRow icon={Clock} label="Hours">
          {contact.workingHours}
          <br />
          <span className="text-ink-muted">{contact.dispatchOfficeHours}</span>
        </DetailRow>
      </dl>
      <Button href={whatsappUrl()} external fullWidth className="mt-6">
        Chat on WhatsApp
      </Button>
    </aside>
  );
};
