import { graphql } from 'gatsby';
import React from 'react';
import { MeatProductsQuery } from '../../../../graphql-types';
import Layout from '../../../components/Layout';
import { ProductsList } from '../../../components/products/ProductsList';
import { mapMeatProductsFromKontent } from '../../../models/products/meatProduct';
import { mapAllTaxonomyFromKontent, sortTaxonomyFilters } from '../../../models/taxonomies/_common';
import { MeatProductTaxonomy } from '../../../models/taxonomies/taxonomies';

type ProductsProps = {
  readonly data: MeatProductsQuery
}

const Products: React.FC<ProductsProps> = ({ data }) => (
  <Layout>
    <ProductsList<MeatProductTaxonomy>
      allProducts={mapMeatProductsFromKontent(data)}
      productTaxonomies={sortTaxonomyFilters(mapAllTaxonomyFromKontent(data.allKontentTaxonomy), ['producer', 'country'])}
    />
  </Layout>
);

export default Products;

export const query = graphql`
    query MeatProducts {
        allKontentTaxonomy(filter: {system: {codename: {in: ["producer", "country"]}}}) {
            nodes {
                terms { codename, name }
                system { codename, name }
            }
        }
        allKontentItemMeatProduct {
            edges {
                node {
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
        }
    }
`;
