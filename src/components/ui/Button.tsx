import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'inverse' | 'inverse-outline' | 'link';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  /** Internal route. Renders a router link. */
  to?: string;
  /** Router state passed along with `to`. */
  state?: unknown;
  /** External address (WhatsApp, tel:, mailto:). Renders an anchor. */
  href?: string;
  /** Open `href` in a new tab. */
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  'aria-label'?: string;
}

const BASE =
  'inline-flex select-none items-center justify-center gap-2 border text-center font-sans font-bold uppercase tracking-[0.1em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50';

const VARIANTS: Record<Variant, string> = {
  primary: 'border-ink-black bg-ink-black text-paper-white hover:bg-paper-warm hover:text-ink-black',
  secondary: 'border-ink-black bg-transparent text-ink-black hover:bg-ink-black hover:text-paper-white',
  // The two "inverse" variants are for dark backgrounds (hero panel, footer).
  inverse: 'border-paper-white bg-paper-white text-ink-black hover:bg-transparent hover:text-paper-white',
  'inverse-outline': 'border-paper-white bg-transparent text-paper-white hover:bg-paper-white hover:text-ink-black',
  link: 'border-transparent !min-h-0 !px-0 underline decoration-1 underline-offset-4 hover:decoration-2',
};

const SIZES: Record<Size, string> = {
  sm: 'min-h-[40px] px-4 text-[14px]',
  md: 'min-h-[44px] px-5 text-[15px]',
  lg: 'min-h-[52px] px-7 text-[17px]',
};

/** One button for every action: router link (`to`), external link (`href`) or plain button. */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  to,
  state,
  href,
  external = false,
  type = 'button',
  disabled,
  onClick,
  'aria-label': ariaLabel,
}) => {
  const classes = cn(BASE, SIZES[size], VARIANTS[variant], fullWidth && 'w-full', className);

  if (to) {
    return (
      <Link to={to} state={state} onClick={onClick} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
};
