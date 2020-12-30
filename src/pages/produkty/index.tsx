import React from 'react';
import { Section } from '../../_ui-components/Container';
import Layout from '../../components/Layout';
import { ProductDisambiguation } from '../../components/products/ProductDisambiguation';

type ProductsProps = {}

const Products: React.FC<ProductsProps> = () => (
  <Layout>
    <Section>
      <ProductDisambiguation withImage />
    </Section>
  </Layout>
);

export default Products;
