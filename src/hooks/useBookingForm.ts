import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BOOKING_STEPS, EMPTY_BOOKING } from '../data/bookingContent';
import { validateStep, type BookingErrors } from '../lib/bookingValidation';
import { findVehicle } from '../lib/fleet';
import { hasErrors } from '../lib/validation';
import type { BookingFormData, VehicleCategory } from '../types';

/** Router state passed by the front-page booking desk and the vehicle cards. */
export interface BookingLocationState {
  quickPrefill?: Partial<BookingFormData>;
  preselectedVehicle?: string;
}

const LAST_STEP = BOOKING_STEPS.length;

const buildInitialState = (state: unknown) => {
  const { quickPrefill, preselectedVehicle } = (state ?? {}) as BookingLocationState;
  let data: BookingFormData = { ...EMPTY_BOOKING, ...quickPrefill };

  const vehicle = findVehicle(preselectedVehicle);
  if (vehicle) {
    data = { ...data, preferredVehicleId: vehicle.id, vehicleCategory: vehicle.category };
  }

  // A complete route from the front page skips straight to choosing the vehicle.
  const step = quickPrefill && !hasErrors(validateStep(1, data)) ? 2 : 1;
  return { data, step };
};

const createRequestId = () =>
  `OX-REQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

/** All state and rules for the four-step booking wizard. */
export const useBookingForm = () => {
  const location = useLocation();
  const [initial] = useState(() => buildInitialState(location.state));
  const [data, setData] = useState<BookingFormData>(initial.data);
  const [step, setStep] = useState(initial.step);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [requestId, setRequestId] = useState<string | null>(null);

  /** Merge changes into the form and clear the errors of the fields that changed. */
  const update = useCallback((patch: Partial<BookingFormData>) => {
    setData((prev) => ({ ...prev, ...patch }));
    setErrors((prev) => {
      const next = { ...prev };
      (Object.keys(patch) as (keyof BookingFormData)[]).forEach((key) => delete next[key]);
      return next;
    });
  }, []);

  /** Show an error under a field right away (used when a disallowed character is typed). */
  const setError = useCallback((field: keyof BookingFormData, message?: string) => {
    setErrors((prev) => ({ ...prev, [field]: message }));
  }, []);

  /** Choosing a category drops a previously chosen model that does not belong to it. */
  const selectCategory = useCallback(
    (category: VehicleCategory) => {
      const keepModel = findVehicle(data.preferredVehicleId)?.category === category;
      update({
        vehicleCategory: category,
        preferredVehicleId: keepModel ? data.preferredVehicleId : '',
        passengers: data.passengers, // re-check the guest count against the new category
      });
    },
    [data.preferredVehicleId, data.passengers, update],
  );

  const next = () => {
    const stepErrors = validateStep(step, data);
    setErrors(stepErrors);
    if (!hasErrors(stepErrors)) setStep((s) => Math.min(s + 1, LAST_STEP));
  };

  const back = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  };

  /** Jump back to an earlier step (from the stepper or an "Edit" link). */
  const goTo = (target: number) => {
    if (target >= step) return;
    setErrors({});
    setStep(target);
  };

  /** Re-validate every step, then issue the request slip. */
  const submit = () => {
    for (let s = 1; s < LAST_STEP; s += 1) {
      const stepErrors = validateStep(s, data);
      if (hasErrors(stepErrors)) {
        setErrors(stepErrors);
        setStep(s);
        return;
      }
    }
    setRequestId(createRequestId());
  };

  const reset = () => {
    setData(EMPTY_BOOKING);
    setErrors({});
    setStep(1);
    setRequestId(null);
  };

  return {
    data,
    step,
    errors,
    requestId,
    isLastStep: step === LAST_STEP,
    update,
    setError,
    selectCategory,
    next,
    back,
    goTo,
    submit,
    reset,
  };
};

export type BookingForm = ReturnType<typeof useBookingForm>;
