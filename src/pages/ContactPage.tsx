import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { FaqList } from '../components/contact/FaqList';
import { OfficeDetails } from '../components/contact/OfficeDetails';
import { Page } from '../components/layout/Page';
import { SectionHeader } from '../components/ui/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';
import { Reveal } from '../components/ui/Reveal';

/** Contact: enquiry coupon, office details and frequently asked questions. */
export const ContactPage: React.FC = () => {
  usePageTitle('Contact');

  return (
    <Page>
      <SectionHeader
        as="h1"
        kicker="Contact"
        folio="Section D"
        title="Contact the Dispatch Desk"
        deck="Questions about routes, vehicles or corporate accounts? Our fleet coordinators are standing by."
      />

      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7 lg:border-r lg:border-paper-rule lg:pr-8">
          <ContactForm />
        </Reveal>
        <Reveal delay={200} className="lg:col-span-5 lg:pl-8">
          <OfficeDetails />
        </Reveal>
      </div>

      <FaqList />
    </Page>
  );
};
