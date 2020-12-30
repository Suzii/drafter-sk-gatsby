import { Container } from '@material-ui/core';
import { graphql } from 'gatsby';
import React from 'react';
import { ProductQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import { ProductDetail } from '../components/products/ProductDetail';
import { mapProductFromKontent } from '../models/product';

type ProductProps = {
  readonly data?: ProductQuery
}

const Product: React.FC<ProductProps> = ({ data }) => {
  if (!data) {
    console.log('Product: no data found');
    return null;
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <ProductDetail product={mapProductFromKontent(data)} />
      </Container>
    </Layout>
  );
};

export default Product;

export const query = graphql`
    query Product($slug: String!) {
        kontentItemProduct(elements: { url_slug: { value: { eq: $slug } } }) {
            system { id }
            elements {
                url_slug {
                    value
                }
                name {
                    value
                }
                description {
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
`;
