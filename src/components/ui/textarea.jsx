import React from 'react';

export const Textarea = (props) => (
  <textarea
    {...props}
    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-y"
  />
);
