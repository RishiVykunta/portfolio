import React from 'react';

export const Button = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none';

  const styles = {
    default: 'bg-accent text-white hover:bg-accent/90 shadow-md',
    outline: 'border border-border bg-transparent hover:bg-white/5',
    ghost: 'hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2',
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
