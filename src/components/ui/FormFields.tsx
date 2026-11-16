import React, { useId } from 'react';
import { AlertCircle, type LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

interface FieldProps {
  label: string;
  error?: string;
  hint?: string;
  /** Marks the label "(optional)". Fields are treated as required otherwise only if `required` is set. */
  optional?: boolean;
  required?: boolean;
  /** Icon shown inside the field, on the left. */
  icon?: LucideIcon;
  /** Class for the wrapper (use for grid column spans). */
  containerClassName?: string;
}

interface ShellProps extends FieldProps {
  id: string;
  children: React.ReactNode;
}

/** Label, field, hint and error message — wired together for screen readers. */
const FieldShell: React.FC<ShellProps> = ({
  id,
  label,
  error,
  hint,
  optional,
  required,
  icon: Icon,
  containerClassName,
  children,
}) => (
  <div className={containerClassName}>
    <label htmlFor={id} className="label-caps mb-1.5 block">
      {label}
      {required && <span className="text-press" aria-hidden="true"> *</span>}
      {optional && <span className="font-medium normal-case tracking-normal text-ink-muted"> (optional)</span>}
    </label>
    <div className="relative">
      {Icon && (
        <Icon
          className="pointer-events-none absolute left-3 top-[1.4375rem] h-4 w-4 -translate-y-1/2 text-ink-muted"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
    {hint && !error && (
      <p id={`${id}-hint`} className="mt-1 font-sans text-xs text-ink-muted">
        {hint}
      </p>
    )}
    {error && (
      <p id={`${id}-error`} role="alert" className="mt-1 flex items-start gap-1 font-sans text-xs font-medium text-press">
        <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>{error}</span>
      </p>
    )}
  </div>
);

/** Accessibility attributes shared by every field type. */
const fieldAria = (id: string, { error, hint, required }: FieldProps) => ({
  id,
  'aria-invalid': error ? true : undefined,
  'aria-required': required || undefined,
  'aria-describedby': error ? `${id}-error` : hint ? `${id}-hint` : undefined,
});

type Native<T> = Omit<T, 'required' | 'id'>;

export const TextField: React.FC<FieldProps & Native<React.InputHTMLAttributes<HTMLInputElement>>> = ({
  label, error, hint, optional, required, icon, containerClassName, className, ...input
}) => {
  const id = useId();
  const field = { label, error, hint, optional, required, icon, containerClassName };
  return (
    <FieldShell id={id} {...field}>
      <input {...input} {...fieldAria(id, field)} className={cn('field-input', icon && 'pl-9', className)} />
    </FieldShell>
  );
};

export const SelectField: React.FC<FieldProps & Native<React.SelectHTMLAttributes<HTMLSelectElement>>> = ({
  label, error, hint, optional, required, icon, containerClassName, className, children, ...select
}) => {
  const id = useId();
  const field = { label, error, hint, optional, required, icon, containerClassName };
  return (
    <FieldShell id={id} {...field}>
      <select {...select} {...fieldAria(id, field)} className={cn('field-input', icon && 'pl-9', className)}>
        {children}
      </select>
    </FieldShell>
  );
};

export const TextAreaField: React.FC<FieldProps & Native<React.TextareaHTMLAttributes<HTMLTextAreaElement>>> = ({
  label, error, hint, optional, required, containerClassName, className, rows = 4, ...textarea
}) => {
  const id = useId();
  const field = { label, error, hint, optional, required, containerClassName };
  return (
    <FieldShell id={id} {...field}>
      <textarea {...textarea} rows={rows} {...fieldAria(id, field)} className={cn('field-input', className)} />
    </FieldShell>
  );
};
