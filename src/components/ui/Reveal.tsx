import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/cn';

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  /** HTML tag to render, so the wrapper can be the list item, section, etc. itself. */
  as?: React.ElementType;
  /** Milliseconds to wait before animating; use it to stagger items in a row. */
  delay?: number;
}

/** Delay for the nth item of a grid, so a row of items arrives one after another. */
export const stagger = (index: number, columns = 3, step = 130) => (index % columns) * step;

/**
 * Slow scroll reveal: the block fades in and rises as it enters the screen.
 * It animates once. Styles are in `.reveal` (src/styles/index.css).
 */
export const Reveal: React.FC<RevealProps> = ({ as: Tag = 'div', delay = 0, className, style, children, ...rest }) => {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
};
