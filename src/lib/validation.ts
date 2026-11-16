/*
 * Field rules shared by every form (booking wizard, contact page, vehicle enquiry).
 *
 *  - Name:  letters and spaces only.
 *  - Phone: digits only, exactly 10.
 *  - Email: optional, and when given it must look like name@gmail.com.
 *
 * `restrictInput` is used while typing: it removes characters that are not allowed and
 * says why. The `isValid…` checks are used when a form is submitted.
 */

export type RestrictedField = 'name' | 'phone' | 'email';

export const NAME_MAX = 60;
export const PHONE_LENGTH = 10;
export const EMAIL_MAX = 80;

export const FIELD_MESSAGES = {
  nameRequired: 'Enter your name.',
  nameLetters: 'Name can only contain letters (A–Z) and spaces. Numbers and symbols are not allowed.',
  phoneRequired: 'Enter your 10-digit mobile number.',
  phoneDigits: 'Mobile number can only contain digits (0–9). Letters and symbols are not allowed.',
  phoneLength: 'Mobile number must be exactly 10 digits.',
  emailFormat: 'Enter a valid email address like name@gmail.com.',
  emailChars: 'Email can only contain letters, numbers and . _ % + - before the @. Spaces and other symbols are not allowed.',
} as const;

const NAME_DISALLOWED = /[^A-Za-z ]/g;
const PHONE_DISALLOWED = /\D/g;
const EMAIL_DISALLOWED = /[^A-Za-z0-9._%+\-@]/g;

const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

/**
 * Cleans what the visitor just typed or pasted.
 * Returns the allowed text, plus an error message if anything had to be removed.
 */
export const restrictInput = (field: RestrictedField, raw: string): { value: string; error?: string } => {
  if (field === 'name') {
    const cleaned = raw.replace(NAME_DISALLOWED, '').replace(/^\s+/, '').replace(/\s{2,}/g, ' ');
    const value = cleaned.slice(0, NAME_MAX);
    const hadBadChars = /[^A-Za-z ]/.test(raw);
    return { value, error: hadBadChars ? FIELD_MESSAGES.nameLetters : undefined };
  }

  if (field === 'phone') {
    const digits = raw.replace(PHONE_DISALLOWED, '');
    const hadBadChars = digits.length !== raw.length;
    const value = digits.slice(0, PHONE_LENGTH);
    if (hadBadChars) return { value, error: FIELD_MESSAGES.phoneDigits };
    if (digits.length > PHONE_LENGTH) return { value, error: FIELD_MESSAGES.phoneLength };
    return { value };
  }

  const cleaned = raw.replace(EMAIL_DISALLOWED, '');
  // Only one @ is allowed.
  const at = cleaned.indexOf('@');
  const value = (at === -1 ? cleaned : cleaned.slice(0, at + 1) + cleaned.slice(at + 1).replace(/@/g, '')).slice(0, EMAIL_MAX);
  return { value, error: value !== raw ? FIELD_MESSAGES.emailChars : undefined };
};

/** Letters and spaces only, with at least two letters. */
export const isValidName = (value: string) => /^[A-Za-z]+( [A-Za-z]+)*$/.test(value.trim()) && value.trim().length >= 2;

/** Exactly 10 digits. */
export const isValidPhone = (value: string) => /^\d{10}$/.test(value);

/** name@domain.ext */
export const isValidEmail = (value: string) => EMAIL_PATTERN.test(value.trim());

/** Error for a name field, or undefined if it is fine. */
export const nameError = (value: string) =>
  !value.trim() ? FIELD_MESSAGES.nameRequired : isValidName(value) ? undefined : FIELD_MESSAGES.nameLetters;

/** Error for a phone field, or undefined if it is fine. */
export const phoneError = (value: string) =>
  !value ? FIELD_MESSAGES.phoneRequired : isValidPhone(value) ? undefined : FIELD_MESSAGES.phoneLength;

/** Error for an optional email field (empty is fine). */
export const optionalEmailError = (value: string) =>
  !value.trim() || isValidEmail(value) ? undefined : FIELD_MESSAGES.emailFormat;

export const hasErrors = (errors: object) => Object.values(errors).some(Boolean);
