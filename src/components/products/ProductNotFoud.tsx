import React from 'react';
import { Section, SectionSubtitle, SectionTitle } from '../../_ui-components/Container';
import Layout from '../Layout';

export const ProductNotFound = () => (
  <Layout>
    <div className="container-fluid">
      <Section id="404" className="space-y-md">
        <SectionTitle>Hups...</SectionTitle>
        <SectionSubtitle>Hľadaný produkt sa nenašiel</SectionSubtitle>
      </Section>
    </div>
  </Layout>
);
