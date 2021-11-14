import React from 'react';

export const EmailLink: React.FC<{
  readonly email: string;
  readonly className?: string;
  readonly children?: React.ReactNode;
}> = ({ email, children, className }) => (
  <a href={`mailto:${email}`} className={className}>
    {children ?? email}
  </a>
);
