import React from 'react';

type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const OutwardLink: React.FC<AnchorProps> = ({children, ...rest}) => (
  <a
    {...rest}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </a>
);
