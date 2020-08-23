import { graphql, Link } from 'gatsby';
import React from 'react';
import { ProductsQuery } from '../../graphql-types';
import Layout from '../components/layout';
import { PRODUCT_URL } from '../constants/urls';

type ProductsProps = {
  readonly data: ProductsQuery
}

const Products: React.FC<ProductsProps> = ({ data }) => (
  <Layout>
    <div>
      <h1>Products</h1>
    </div>
    <div>
      <p>Check out our portfolio</p>
      <ul>
        {data.allKontentItemProdukt.edges.map(product => (
          <li key={product.node.id}>
            <Link to={PRODUCT_URL(product.node.elements?.url_slug?.value)}>
              {product.node.elements?.nazov?.value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
