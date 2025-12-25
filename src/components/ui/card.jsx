import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div
    className={`
      rounded-xl
      border border-border/50
      bg-card/80
      backdrop-blur-xl
      shadow-lg
      shadow-black/10
      ${className}
    `}
  >
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-4 space-y-2">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-xl font-semibold">{children}</h3>
);

export const CardDescription = ({ children }) => (
  <p className="text-sm text-muted">{children}</p>
);

export const CardContent = ({ children }) => (
  <div className="space-y-4">{children}</div>
);
