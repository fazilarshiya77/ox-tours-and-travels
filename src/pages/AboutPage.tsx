import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FoundingEssay } from '../components/about/FoundingEssay';
import { PillarsGrid } from '../components/about/PillarsGrid';
import { Page } from '../components/layout/Page';
import { Button } from '../components/ui/Button';
import { CtaBanner } from '../components/ui/Notices';
import { SectionHeader } from '../components/ui/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';

/** About: the founding essay, the six pillars and an invitation to book. */
export const AboutPage: React.FC = () => {
  usePageTitle('About Us');

  return (
    <Page>
      <SectionHeader
        as="h1"
        kicker="The Chronicle & Philosophy"
        folio="Section C"
        title="Every Journey Should Be Worth Remembering"
        deck="A travel company founded on the belief that road travel should lift the spirit, not test your patience."
      />

      <FoundingEssay />
      <PillarsGrid />

      <CtaBanner
        kicker="The Open Invitation"
        title="Let Us Drive Your Next Journey"
        text="For a single day of city appointments or a week through high mountain valleys, experience dedicated chauffeured travel."
      >
        <Button to="/fleet" variant="secondary">
          Explore the Fleet
        </Button>
        <Button to="/book">
          <span>Book Your Journey</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </CtaBanner>
    </Page>
  );
};
