import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  external = false,
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] transition-all duration-200 select-none text-center cursor-pointer';

  const sizeStyles = {
    sm: 'text-[11px] px-3.5 py-2 gap-1.5',
    md: 'text-xs px-5 py-2.5 gap-2',
    lg: 'text-sm px-7 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-ink-black text-paper-white hover:bg-ink-charcoal shadow-editorial active:translate-x-[1px] active:translate-y-[1px]',
    accent: 'bg-vintage-red text-paper-white hover:bg-vintage-crimson shadow-editorial-red active:translate-x-[1px] active:translate-y-[1px]',
    secondary: 'bg-paper-aged text-ink-black border border-ink-black/25 hover:bg-paper-tan hover:border-ink-black',
    outline: 'bg-transparent text-ink-black border-2 border-ink-black hover:bg-ink-black hover:text-paper-white active:translate-x-[1px] active:translate-y-[1px]',
    ghost: 'bg-transparent text-ink-black hover:text-vintage-red hover:underline p-0 underline-offset-4',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
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
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};
