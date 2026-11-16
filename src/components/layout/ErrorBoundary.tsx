import React from 'react';
import { Button } from '../ui/Button';
import { EmptyState } from '../ui/Notices';
import { Page } from './Page';

interface ErrorBoundaryState {
  failed: boolean;
}

/**
 * Catches a crash inside a page and shows a notice instead of a blank screen.
 * The masthead and navigation stay usable; moving to another page clears it.
 */
export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { failed: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error('Page failed to render:', error);
  }

  render() {
    if (!this.state.failed) return this.props.children;

    return (
      <Page width="narrow" className="py-16">
        <EmptyState
          title="This Page Hit a Bump"
          actions={
            <>
              <Button onClick={() => window.location.reload()}>Reload the Page</Button>
              <Button href="/" variant="secondary">
                Return to the Front Page
              </Button>
            </>
          }
        >
          Something went wrong while printing this page. Reloading usually fixes it.
        </EmptyState>
      </Page>
    );
  }
}
