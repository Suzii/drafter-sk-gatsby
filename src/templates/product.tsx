import { Container } from '@material-ui/core';
import { graphql } from 'gatsby';
import React from 'react';
import { DiaryProductQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import { ProductDetail } from '../components/products/ProductDetail';
import { mapProductFromKontent } from '../models/product';

type ProductProps = {
  readonly data?: DiaryProductQuery
}

const Product: React.FC<ProductProps> = ({ data }) => {
  if (!data) {
    console.log('Product: no data found');
    return null;
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <ProductDetail product={mapProductFromKontent(data)} />
      </Container>
    </Layout>
  );
};

export default Product;

export const query = graphql`
    query DiaryProduct($slug: String!) {
        kontentItemDiaryProduct(elements: { url_slug: { value: { eq: $slug } } }) {
            system { id }
            elements {
                url_slug { value }
                produkt_core__name { value }
                produkt_core__description { value }
                produkt_core__producer { ...TaxonomyElementFields }
                produkt_core__country { ...TaxonomyElementFields }
                diary_type { ...TaxonomyElementFields }
                milk_type { ...TaxonomyElementFields }
                produkt_core__image { ...FluidImage350w }
            }
        }
    }
`;
