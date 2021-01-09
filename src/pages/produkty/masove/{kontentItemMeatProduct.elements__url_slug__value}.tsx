import { Container } from '@material-ui/core';
import { graphql } from 'gatsby';
import React from 'react';
import { MeatProductQuery } from '../../../../graphql-types';
import Layout from '../../../components/Layout';
import { ProductDetail } from '../../../components/products/ProductDetail';
import { mapMeatProductFromKontent } from '../../../models/products/meatProduct';

type ProductProps = {
  readonly data?: MeatProductQuery
}

const MeatProduct: React.FC<ProductProps> = ({ data }) => {
  if (!data) {
    console.log('Product: no data found');
    return null;
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <ProductDetail product={mapMeatProductFromKontent(data)} />
      </Container>
    </Layout>
  );
};

export default MeatProduct;

export const query = graphql`
    query MeatProduct($elements__url_slug__value: String!) {
        kontentItemMeatProduct(elements: { url_slug: { value: { eq: $elements__url_slug__value } } }) {
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
