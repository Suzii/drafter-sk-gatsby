import { graphql } from 'gatsby';
import React from 'react';
import { DiaryProductFallbackQuery, DiaryProductQuery } from '../../../../graphql-types';
import { ProductDetail } from '../../../components/products/ProductDetail';
import { mapDiaryProductFromKontent } from '../../../models/products/diaryProduct';

type ProductProps = {
  readonly data?: DiaryProductFallbackQuery
}

const DiaryProduct: React.FC<ProductProps> = ({ data }) => (
  <ProductDetail product={data && mapDiaryProductFromKontent(data)} />
);

export default DiaryProduct;

export const query = graphql`
    query DiaryProductFallback($fallback_slug: String) {
        kontentItemDiaryProduct(elements: { url_slug: { value: { eq: $fallback_slug } } }) {
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
