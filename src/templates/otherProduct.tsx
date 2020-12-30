import { Container } from '@material-ui/core';
import { graphql } from 'gatsby';
import React from 'react';
import { OtherProductQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import { ProductDetail } from '../components/products/ProductDetail';
import { mapOtherProductFromKontent } from '../models/products/otherProduct';

type ProductProps = {
  readonly data?: OtherProductQuery
}

const OtherProduct: React.FC<ProductProps> = ({ data }) => {
  if (!data) {
    console.log('Product: no data found');
    return null;
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <ProductDetail product={mapOtherProductFromKontent(data)} />
      </Container>
    </Layout>
  );
};

export default OtherProduct;

export const query = graphql`
    query OtherProduct($slug: String!) {
        kontentItemOtherProduct(elements: { url_slug: { value: { eq: $slug } } }) {
            system { id }
            elements {
                url_slug { value }
                produkt_core__name { value }
                produkt_core__description { value }
                produkt_core__producer { ...TaxonomyElementFields }
                produkt_core__country { ...TaxonomyElementFields }
                produkt_core__image { ...FluidImage350w }
            }
        }
    }
`;
