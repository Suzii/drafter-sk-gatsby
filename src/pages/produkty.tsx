import { graphql } from 'gatsby';
import React from 'react';
import { DiaryProductsQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import { ProductsList } from '../components/products/ProductsList';
import { mapProductsFromKontent } from '../models/product';
import { mapAllTaxonomyFromKontent } from '../models/taxonomies/_common';

type ProductsProps = {
  readonly data: DiaryProductsQuery
}

const Products: React.FC<ProductsProps> = ({ data }) => (
  <Layout>
    <ProductsList
      allProducts={mapProductsFromKontent(data)}
      productTaxonomies={mapAllTaxonomyFromKontent(data.allKontentTaxonomy)}
    />
  </Layout>
);

export default Products;

export const query = graphql`
    query DiaryProducts {
        allKontentTaxonomy(filter: {system: {codename: {in: ["producer", "country"]}}}) {
            nodes {
                terms {
                    codename
                    name
                }
                system {
                    codename
                    name
                }
            }
        }
        allKontentItemDiaryProduct {
            edges {
                node {
                    system {
                        id
                    }
                    elements {
                        produkt_core__name {
                            value
                        }
                        url_slug {
                            value
                        }
                        produkt_core__producer {
                            name
                            taxonomy_group
                            value { name codename }
                        }
                        produkt_core__country {
                            name
                            taxonomy_group
                            value { name codename }
                        }
                        produkt_core__image {
                            value {
                                description
                                fluid(maxWidth: 350) {
                                    aspectRatio
                                    base64
                                    sizes
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
