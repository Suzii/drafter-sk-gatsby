import Container from '@material-ui/core/Container';
import React from 'react';
import { Section, SectionTitle } from '../../_ui-components/Container';

export const ProductsPageWrapper: React.FC = ({ children }) => (
  <Section>
    <Container maxWidth="xl">
      <SectionTitle>Produkty</SectionTitle>
      {children as any}
    </Container>
  </Section>
);
