import { graphql } from 'gatsby';
import React from 'react';
import { ProductsDisambiguationQuery } from '../../../graphql-types';
import Layout from '../../components/Layout';
import { ProductsDisambiguation } from '../../components/products/disambiguation/ProductDisambiguation';
import { mapProductTypesFromKontent } from '../../models/products/productTypes';

type ProductsProps = {
  readonly data: ProductsDisambiguationQuery;
};

const Products: React.FC<ProductsProps> = ({ data }) => (
  <Layout>
    <ProductsDisambiguation productTypes={mapProductTypesFromKontent(data)} />
  </Layout>
);

export default Products;

export const query = graphql`
    query ProductsDisambiguation {
        kontentItemProductsDisambiguation(system: {codename: {eq: "products_disambiguation"}}) {
            system { id }
            elements {
                product_types{
                    name
                    type
                    value {
                        ... on kontent_item_product_type {
                            id
                            elements {
                                type{
                                    value {name codename}
                                }
                                image { ...FluidImage350w }
                            }
                        }
                    }
                }
            }
        }
    }
`;
