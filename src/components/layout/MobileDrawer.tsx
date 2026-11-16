import React from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Phone, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { SITE_CONFIG } from '../../data/siteConfig';
import { useDialog } from '../../hooks/useDialog';
import { cn } from '../../lib/cn';
import { telHref, whatsappUrl } from '../../lib/contact';
import { Button } from '../ui/Button';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Slide-in menu for small screens. Closes on Escape, on a tap outside, or on navigation. */
export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const dialogRef = useDialog<HTMLDivElement>(isOpen, onClose);
  if (!isOpen) return null;

  return createPortal(
    <div className="fade-enter fixed inset-0 z-50 bg-ink-black/60 md:hidden" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        onClick={(e) => e.stopPropagation()}
        className="drawer-enter paper-surface flex h-full w-[85%] max-w-xs flex-col border-r border-ink-black p-5"
      >
        <div className="flex items-center justify-between border-b-[3px] border-ink-black pb-3">
          <p className="nameplate text-4xl">{SITE_CONFIG.nameplateShort}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center border border-ink-black/40 hover:bg-ink-black hover:text-paper-white"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <p className="folio mt-5">Sections</p>
        <ul className="mt-1">
          {NAV_LINKS.map((link) => (
            <li key={link.path} className="border-b border-paper-rule">
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn('flex min-h-[52px] items-center font-sans text-2xl font-bold uppercase tracking-wide', isActive && 'italic underline underline-offset-4')
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3 pt-6">
          <Button to="/book" fullWidth>
            <span>Book Your Ride</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href={whatsappUrl()} external variant="secondary" fullWidth>
            Chat on WhatsApp
          </Button>
          <a
            href={telHref(SITE_CONFIG.contact.primaryPhone)}
            className="flex min-h-[44px] items-center justify-center gap-2 font-sans text-sm font-semibold"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE_CONFIG.contact.primaryPhone}
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
};
