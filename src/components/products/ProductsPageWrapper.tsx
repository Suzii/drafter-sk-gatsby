import React from 'react';
import { Section, SectionTitle } from '../../_ui-components/Container';

export const ProductsPageWrapper: React.FC = ({ children }) => (
  <Section id="produkty">
    <div className="container space-y-md">
      <SectionTitle>Produkty</SectionTitle>
      {children as any}
    </div>
  </Section>
);
