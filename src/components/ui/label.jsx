import React from 'react';

export const Label = ({ children, ...props }) => (
  <label className="text-sm font-medium" {...props}>
    {children}
  </label>
);
