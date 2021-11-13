import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Main = styled.main`
  width: 100%;
`;

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
