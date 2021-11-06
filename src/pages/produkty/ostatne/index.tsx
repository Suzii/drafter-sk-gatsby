import { graphql } from 'gatsby';
import React from 'react';
import { OtherProductsQuery } from '../../../../graphql-types';
import Layout from '../../../components/Layout';
import { ProductsList } from '../../../components/products/ProductsList';
import { mapOtherProductsFromKontent } from '../../../models/products/otherProduct';
import { mapAllTaxonomyFromKontent, sortTaxonomyFilters } from '../../../models/taxonomies/_common';
import { OtherProductTaxonomy } from '../../../models/taxonomies/taxonomies';

type ProductsProps = {
  readonly data: OtherProductsQuery
}

const Products: React.FC<ProductsProps> = ({ data }) => (
  <Layout>
    <ProductsList<OtherProductTaxonomy>
      allProducts={mapOtherProductsFromKontent(data)}
      productTaxonomies={sortTaxonomyFilters(mapAllTaxonomyFromKontent(data.allKontentTaxonomy), ['producer', 'country'])}
    />
  </Layout>
);

export default Products;

export const query = graphql`
    query OtherProducts {
        allKontentTaxonomy(filter: {system: {codename: {in: ["producer", "country"]}}}) {
            nodes {
                terms { codename, name }
                system { codename, name }
            }
        }
        allKontentItemOtherProduct {
            edges {
                node {
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
        }
    }
`;
