import { graphql, Link } from 'gatsby';
import React from 'react';
import { ProductsQuery } from '../../graphql-types';
import { Container, Row, Stack } from '../_ui-components/Container';
import Layout from '../components/Layout';
import { PRODUCT_URL } from '../constants/urls';
import { Feature, isFeatureEnabled } from '../utils/featureToggles';

type ProductsProps = {
  readonly data: ProductsQuery
}

const Products: React.FC<ProductsProps> = ({ data }) => (
  <Layout>
    <Container>
      <Stack>
        <Row>
          <h1>Products</h1>
        </Row>
        <Row>
          {!isFeatureEnabled(Feature.ProductsPage)
            ? (
              <h2>Na stránke pracujeme...</h2>
            )
            : (
              <ul>
                {data.allKontentItemProduct.edges.map(product => (
                  <li key={product.node.id}>
                    <Link to={PRODUCT_URL(product.node.elements?.url_slug?.value)}>
                      {product.node.elements?.name?.value}
                    </Link>
                  </li>
                ))}
              </ul>
            )
          }
        </Row>
      </Stack>
    </Container>
  </Layout>
);

export default Products;

export const query = graphql`
    query Products {
        allKontentItemProduct {
            edges {
                node {
                    id
                    elements {
                        name {
                            value
                        }
                        url_slug {
                            value
                        }
                    }
                }
            }
        }
    }
`;
