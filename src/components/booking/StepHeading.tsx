import React from 'react';
import { BOOKING_STEPS } from '../../data/bookingContent';

interface StepHeadingProps {
  step: number;
  title: string;
  description: string;
}

/** Title block at the top of each booking step. */
export const StepHeading: React.FC<StepHeadingProps> = ({ step, title, description }) => (
  <div className="border-b border-ink-black pb-4">
    <p className="kicker">
      Step {step} of {BOOKING_STEPS.length}
    </p>
    <h2 className="mt-1 text-2xl font-black sm:text-3xl">{title}</h2>
    <p className="mt-1 text-ink-muted">{description}</p>
  </div>
);
