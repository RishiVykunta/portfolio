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

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 space-y-2 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`space-y-4 ${className}`}>{children}</div>
);
