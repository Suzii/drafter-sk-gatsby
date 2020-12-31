import { graphql } from 'gatsby';
import React from 'react';
import { DiaryProductsQuery } from '../../../graphql-types';
import Layout from '../../components/Layout';
import { ProductsList } from '../../components/products/ProductsList';
import { mapDiaryProductsFromKontent } from '../../models/products/diaryProduct';
import { mapAllTaxonomyFromKontent, sortTaxonomyFilters } from '../../models/taxonomies/_common';
import { DiaryProductTaxonomy } from '../../models/taxonomies/taxonomies';

type ProductsProps = {
  readonly data: DiaryProductsQuery
}

const Products: React.FC<ProductsProps> = ({ data }) => (
  <Layout>
    <ProductsList<DiaryProductTaxonomy>
      allProducts={mapDiaryProductsFromKontent(data)}
      productTaxonomies={sortTaxonomyFilters(mapAllTaxonomyFromKontent(data.allKontentTaxonomy), ['milk_type', 'diary_type', 'producer', 'country'])}
    />
  </Layout>
);

export default Products;

export const query = graphql`
    query DiaryProducts {
        allKontentTaxonomy(filter: {system: {codename: {in: ["milk_type", "diary_type", "producer", "country"]}}}) {
            nodes {
                terms { codename, name }
                system { codename, name }
            }
        }
        allKontentItemDiaryProduct {
            edges {
                node {
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
        }
    }
`;
