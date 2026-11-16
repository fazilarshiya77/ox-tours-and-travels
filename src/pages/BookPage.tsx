import React, { useEffect, useRef } from 'react';
import { BookingStepper } from '../components/booking/BookingStepper';
import { BookingVoucher } from '../components/booking/BookingVoucher';
import { ContactStep } from '../components/booking/ContactStep';
import { ReviewStep } from '../components/booking/ReviewStep';
import { RouteStep } from '../components/booking/RouteStep';
import { StepControls } from '../components/booking/StepControls';
import { VehicleStep } from '../components/booking/VehicleStep';
import { Page } from '../components/layout/Page';
import { SectionHeader } from '../components/ui/SectionHeader';
import { useBookingForm } from '../hooks/useBookingForm';
import { usePageTitle } from '../hooks/usePageTitle';
import { Reveal } from '../components/ui/Reveal';

/** The four-step booking wizard, ending in a journey request slip. */
export const BookPage: React.FC = () => {
  usePageTitle('Book a Journey');
  const booking = useBookingForm();
  const { data, errors, step, requestId, isLastStep } = booking;

  // Bring the top of the wizard back into view whenever the step changes.
  const wizardRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    wizardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step, requestId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLastStep) booking.submit();
    else booking.next();
  };

  return (
    <Page width="narrow">
      <SectionHeader
        as="h1"
        kicker="The Booking Desk"
        title="Plan Your Chauffeured Journey"
        deck="Four short steps. We then confirm availability and send you a quotation."
        className="print:hidden"
      />

      <Reveal>
        <div ref={wizardRef}>
          {requestId ? (
            <BookingVoucher data={data} requestId={requestId} onReset={booking.reset} />
          ) : (
            <>
              <BookingStepper current={step} onStepClick={booking.goTo} />

              <form noValidate onSubmit={handleSubmit} className="coupon mt-6 p-5 sm:p-8">
                {step === 1 && <RouteStep data={data} errors={errors} update={booking.update} />}
                {step === 2 && (
                  <VehicleStep data={data} errors={errors} update={booking.update} selectCategory={booking.selectCategory} />
                )}
                {step === 3 && <ContactStep data={data} errors={errors} update={booking.update} setError={booking.setError} />}
                {step === 4 && <ReviewStep data={data} goTo={booking.goTo} />}

                <StepControls step={step} isLastStep={isLastStep} onBack={booking.back} />
              </form>
            </>
          )}
        </div>
      </Reveal>
    </Page>
  );
};
