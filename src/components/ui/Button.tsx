import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'dark';
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
  const baseStyles = 'inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] select-none text-center cursor-pointer transition-all duration-300 rounded-sm relative overflow-hidden';

  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2 gap-1.5',
    md: 'text-xs px-5 py-2.5 gap-2',
    lg: 'text-xs sm:text-sm px-7 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'glossy-btn-black',
    accent: 'glossy-btn-black ring-1 ring-white/20',
    dark: 'glossy-btn-black',
    secondary: 'glossy-btn-white',
    outline: 'bg-transparent text-ink-black border border-ink-black/40 hover:border-ink-black hover:bg-ink-black hover:text-white transition-colors shadow-sm',
    ghost: 'bg-transparent text-ink-black hover:text-ink-muted p-0 underline underline-offset-4',
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