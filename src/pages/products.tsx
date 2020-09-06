import { graphql, Link } from 'gatsby';
import React from 'react';
import { ProductsQuery } from '../../graphql-types';
import { Container, Row, Stack } from '../_ui-components/Container';
import Layout from '../components/Layout';
import { PRODUCT_URL } from '../constants/urls';

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
          <ul>
            {data.allKontentItemProdukt.edges.map(product => (
              <li key={product.node.id}>
                <Link to={PRODUCT_URL(product.node.elements?.url_slug?.value)}>
                  {product.node.elements?.nazov?.value}
                </Link>
              </li>
            ))}
          </ul>
        </Row>
      </Stack>
    </Container>
  </Layout>
);

export default Products;

export const query = graphql`
    query Products {
        allKontentItemProdukt {
            edges {
                node {
                    id
                    elements {
                        nazov {
                            value
                        }
                        url_slug{ value }
                    }
                }
            }
        }
    }
`;
