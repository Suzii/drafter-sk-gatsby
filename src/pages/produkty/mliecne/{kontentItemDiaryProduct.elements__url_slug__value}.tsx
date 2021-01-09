import { Container } from '@material-ui/core';
import { graphql } from 'gatsby';
import React from 'react';
import { DiaryProductQuery } from '../../../../graphql-types';
import Layout from '../../../components/Layout';
import { ProductDetail } from '../../../components/products/ProductDetail';
import { mapDiaryProductFromKontent } from '../../../models/products/diaryProduct';

type ProductProps = {
  readonly data?: DiaryProductQuery
}

const DiaryProduct: React.FC<ProductProps> = ({ data }) => {
  if (!data) {
    console.log('Product: no data found');
    return null;
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <ProductDetail product={mapDiaryProductFromKontent(data)} />
      </Container>
    </Layout>
  );
};

export default DiaryProduct;

export const query = graphql`
    query DiaryProduct($elements__url_slug__value: String!) {
        kontentItemDiaryProduct(elements: { url_slug: { value: { eq: $elements__url_slug__value } } }) {
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
