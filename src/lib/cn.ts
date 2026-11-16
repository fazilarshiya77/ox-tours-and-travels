import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Join class names conditionally and resolve conflicting Tailwind utilities. */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
