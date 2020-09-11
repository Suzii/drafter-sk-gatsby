import React from 'react';

export const EmailLink: React.FC<{
  readonly email: string;
  readonly children?: React.ReactNode;
}> = ({ email, children }) => (
  <a href={`mailto:${email}`}>
    {children ?? email}
  </a>
);
