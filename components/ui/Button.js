'use client';

import { clsx } from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-[#1e1e1e] text-[#efefef] hover:bg-[#353535] focus:ring-[#1e1e1e]',
    secondary: 'bg-[#f0cb8e] text-[#1e1e1e] hover:bg-[#d8b280] focus:ring-[#f0cb8e]',
    outline: 'border-2 border-[#1e1e1e] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-[#efefef] focus:ring-[#1e1e1e]',
    ghost: 'text-[#1e1e1e] hover:bg-[#efefef] focus:ring-[#1e1e1e]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

