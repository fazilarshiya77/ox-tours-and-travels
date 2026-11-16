import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FLEET_DATA } from '../../data/fleetData';
import { NAV_LINKS } from '../../data/navigation';
import { SITE_CONFIG } from '../../data/siteConfig';
import { telHref, whatsappUrl } from '../../lib/contact';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

const FooterColumn: React.FC<{ title: string; className?: string; children: React.ReactNode }> = ({
  title,
  className,
  children,
}) => (
  <div className={className}>
    <h2 className="border-b border-paper-white/30 pb-2 font-sans text-[15px] font-bold uppercase tracking-[0.14em] text-paper-white">
      {title}
    </h2>
    <div className="mt-3">{children}</div>
  </div>
);

const footerLink = 'inline-block py-1 text-[15px] text-paper-aged transition-colors hover:text-white hover:underline';

/** Site footer: colophon, section links, the full fleet list and dispatch contacts. */
export const Footer: React.FC = () => {
  const { contact } = SITE_CONFIG;

  return (
    <footer className="bg-ink-black text-paper-white print:hidden">
      <Reveal className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-8">
        <div className="border-y border-paper-white/30 py-6 text-center">
          <p className="nameplate text-5xl sm:text-6xl">{SITE_CONFIG.nameplate}</p>
          <p className="mt-2 font-serif italic text-paper-aged">&ldquo;{SITE_CONFIG.corePhilosophy}&rdquo;</p>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-12">
          <FooterColumn title="About" className="lg:col-span-4">
            <p className="text-[15px] leading-relaxed text-paper-aged">
              Comfortable, reliable, chauffeur-driven road travel. Toyota Innova Crysta, Force Urbania luxury vans,
              9, 12 and 17-seater Tempo Travellers and a 21-seater luxury bus, for highways and hill roads alike.
            </p>
          </FooterColumn>

          <FooterColumn title="Sections" className="lg:col-span-2">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/book" className={`${footerLink} font-bold text-white`}>
                  Book a Journey
                </Link>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn title="The Fleet" className="lg:col-span-3">
            <ul>
              {FLEET_DATA.map((vehicle) => (
                <li key={vehicle.id}>
                  <Link to={`/fleet/${vehicle.id}`} className={footerLink}>
                    {vehicle.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Dispatch Desk" className="lg:col-span-3">
            <ul className="space-y-3 text-[15px] text-paper-aged">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {contact.addressLine1}, {contact.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={telHref(contact.primaryPhone)} className="font-bold text-white hover:underline">
                  {contact.primaryPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="break-all hover:text-white hover:underline">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{contact.workingHours}</span>
              </li>
            </ul>
            <Button href={whatsappUrl()} external variant="inverse" size="sm" className="mt-5">
              Chat on WhatsApp
            </Button>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-2 border-t border-paper-white/30 pt-6 font-sans text-[13px] uppercase tracking-[0.12em] text-ink-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
          </p>
          <p>Chauffeur-driven vehicle hire · National &amp; interstate travel</p>
        </div>
      </Reveal>
    </footer>
  );
};
