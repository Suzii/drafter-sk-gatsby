import { graphql } from 'gatsby';
import React from 'react';
import { MeatProductFallbackQuery } from '../../../../graphql-types';
import { ProductDetail } from '../../../components/products/ProductDetail';
import { mapMeatProductFromKontent } from '../../../models/products/meatProduct';

type ProductProps = {
  readonly data?: MeatProductFallbackQuery
}

const MeatProduct: React.FC<ProductProps> = ({ data }) => (
  <ProductDetail product={data && mapMeatProductFromKontent(data)} />
);

export default MeatProduct;

export const query = graphql`
    query MeatProductFallback($fallback_slug: String) {
        kontentItemMeatProduct(elements: { url_slug: { value: { eq: $fallback_slug } } }) {
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
