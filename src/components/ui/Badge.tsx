import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'stamp' | 'ink' | 'pill' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'stamp',
  className = '',
}) => {
  const styles = {
    stamp: 'vintage-stamp',
    ink: 'ink-stamp',
    pill: 'px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest font-semibold bg-vintage-red/10 text-vintage-red border border-vintage-red/30',
    subtle: 'px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-ink-muted bg-paper-aged/60 border border-ink-black/10',
  };

  return (
    <span className={`${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
