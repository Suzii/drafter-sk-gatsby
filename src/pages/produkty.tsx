import { graphql } from 'gatsby';
import React from 'react';
import { ProductsQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import { ProductsList } from '../components/products/ProductsList';
import { mapProductsFromKontent } from '../models/product';
import { mapAllTaxonomyFromKontent } from '../models/taxonomies/_common';

type ProductsProps = {
  readonly data: ProductsQuery
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
    query Products {
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
        allKontentItemProduct {
            edges {
                node {
                    system {
                        id
                    }
                    elements {
                        name {
                            value
                        }
                        url_slug {
                            value
                        }
                        producer {
                            name
                            taxonomy_group
                            value { name codename }
                        }
                        country {
                            name
                            taxonomy_group
                            value { name codename }
                        }
                        image {
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
