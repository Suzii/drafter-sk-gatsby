import React from 'react';

export const NonBreakable: React.FC<{
  readonly children: string;
}> = ({ children }) => (
  <>
    {children.replace(/ /g, "\u00a0")}
  </>
);
