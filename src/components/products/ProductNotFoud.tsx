import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { Section } from '../../_ui-components/Container';
import Layout from '../Layout';

export const ProductNotFound = () => (
  <Layout>
    <Container maxWidth="lg">
      <Section id="404">
        <Typography variant="h3" component="div" align="center">Hľadaný produkt sa nenašiel</Typography>
      </Section>
    </Container>
  </Layout>
);
