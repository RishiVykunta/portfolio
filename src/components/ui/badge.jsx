import React from 'react';

export const Badge = ({ children, variant = 'secondary', className = '' }) => {
  const variants = {
    secondary: 'bg-gray-200 text-black',
    outline: 'border border-gray-300',
  };

  return (
    <span
      className={`inline-block px-2 py-1 text-xs rounded ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
