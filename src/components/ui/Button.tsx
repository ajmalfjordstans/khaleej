'use client';

import { twMerge } from 'tailwind-merge';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'filled' | 'outlined';
type ButtonColor = 'primary' | 'secondary' | 'blue' | 'red';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  fullWidth?: boolean;
}

const COLOR_CLASSES: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    filled: 'bg-primary text-white',
    outlined: 'border-2 border-primary text-primary bg-transparent',
  },
  secondary: {
    filled: 'bg-secondary text-black',
    outlined: 'border-2 border-secondary text-secondary bg-transparent',
  },
  blue: {
    filled: 'bg-blue-600 text-white hover:bg-blue-700',
    outlined: 'border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50',
  },
  red: {
    filled: 'bg-red-600 text-white hover:bg-red-700',
    outlined: 'border-2 border-red-600 text-red-600 bg-transparent hover:bg-red-50',
  },
};

// Replaces @material-tailwind/react's <Button> (dropped for React 19 compatibility).
// Mirrors its default look (filled, uppercase, bold, rounded, shadow) so existing
// call sites that only pass className/onClick/type/disabled need no other changes.
export default function Button({
  variant = 'filled',
  color = 'primary',
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'rounded-lg py-2.5 px-6 text-sm font-bold uppercase tracking-wide shadow-md transition-all select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
        COLOR_CLASSES[color][variant],
        fullWidth && 'w-full',
        className
      )}
    />
  );
}
