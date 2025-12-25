import React from 'react';

export const Textarea = (props) => (
  <textarea
    {...props}
    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
  />
);
