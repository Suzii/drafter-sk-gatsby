import { graphql } from 'gatsby';
import React from 'react';
import { OtherProductFallbackQuery } from '../../../../graphql-types';
import { ProductDetail } from '../../../components/products/ProductDetail';
import { mapOtherProductFromKontent } from '../../../models/products/otherProduct';

type ProductProps = {
  readonly data?: OtherProductFallbackQuery
}

const OtherProduct: React.FC<ProductProps> = ({ data }) => (
  <ProductDetail product={data && mapOtherProductFromKontent(data)} />
);

export default OtherProduct;

export const query = graphql`
    query OtherProductFallback($fallback_slug: String) {
        kontentItemOtherProduct(elements: { url_slug: { value: { eq: $fallback_slug } } }) {
            system { id }
            elements {
                url_slug { value }
                produkt_core__name { value }
                produkt_core__description { value }
                produkt_core__producer { ...TaxonomyElementFields }
                produkt_core__country { ...TaxonomyElementFields }
                produkt_core__image { ...KontentImage }
            }
        }
    }
`;
