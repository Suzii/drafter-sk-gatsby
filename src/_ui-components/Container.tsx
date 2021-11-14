import React from 'react';

export const Section: React.FC<{ className?: string, id: string }> = ({ children, id, className }) => (
  <section id={id} className={`py-md w-full ${className}`}>
    {children}
  </section>
);

export const SectionTitle: React.FC = ({ children }) => (
  <h1 className="font-headings uppercase font-bold text-center text-secondary xl:text-7xl l:text-7xl m:text-6xl sm:text-4xl">
    {children}
  </h1>
);

export const SectionSubtitle: React.FC = ({ children }) => (
  <h1 className="font-headings font-bold text-center text-secondary text-lg ">
    {children}
  </h1>
);

export const SectionPara: React.FC = ({ children }) => (
  <p className="font-sans text-gray-800 text-lg">
    {children}
  </p>
);
