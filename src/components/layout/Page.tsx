import React from 'react';
import { cn } from '../../lib/cn';

interface PageProps {
  /** "wide" for most pages, "narrow" for single-column forms. */
  width?: 'wide' | 'narrow';
  className?: string;
  children: React.ReactNode;
}

/** Standard page container: consistent width, gutters and vertical spacing. */
export const Page: React.FC<PageProps> = ({ width = 'wide', className, children }) => (
  <div
    className={cn(
      'mx-auto px-4 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-8',
      width === 'wide' ? 'max-w-page' : 'max-w-4xl',
      className,
    )}
  >
    {children}
  </div>
);
