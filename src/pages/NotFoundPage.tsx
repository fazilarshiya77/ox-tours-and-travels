import React from 'react';
import { Page } from '../components/layout/Page';
import { Button } from '../components/ui/Button';
import { usePageTitle } from '../hooks/usePageTitle';

/** 404 — shown for any address that is not a page. */
export const NotFoundPage: React.FC = () => {
  usePageTitle('Page Not Found');

  return (
    <Page width="narrow" className="py-20 text-center">
      <p className="kicker">Error 404 · Detour Required</p>
      <h1 className="headline mt-3 text-5xl sm:text-7xl">End of the Road</h1>
      <p className="deck mx-auto mt-4 max-w-md text-xl">
        The page you are looking for does not exist on this route. Let us take you back.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">Return to the Front Page</Button>
        <Button to="/fleet" variant="secondary">
          See the Fleet
        </Button>
      </div>
    </Page>
  );
};
