import React from 'react';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { Button } from '../ui/Button';

interface StepControlsProps {
  step: number;
  isLastStep: boolean;
  onBack: () => void;
}

/**
 * Previous / Continue buttons under each step.
 * The forward button is always the form's submit button, so pressing Enter in a field advances too;
 * the form decides whether that means "next step" or "create request".
 */
export const StepControls: React.FC<StepControlsProps> = ({ step, isLastStep, onBack }) => (
  <div className="mt-8 flex items-center justify-between gap-3 border-t border-ink-black pt-6">
    {step > 1 ? (
      <Button variant="secondary" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span>Previous</span>
      </Button>
    ) : (
      <span />
    )}

    <Button type="submit">
      {isLastStep ? (
        <>
          <FileText className="h-4 w-4" aria-hidden="true" />
          <span>Create Request</span>
        </>
      ) : (
        <>
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </>
      )}
    </Button>
  </div>
);
