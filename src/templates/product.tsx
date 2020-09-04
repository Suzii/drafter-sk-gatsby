import { graphql } from 'gatsby';
import React from 'react';
import { ProductQuery } from '../../graphql-types';
import Layout from '../components/Layout';

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
      <div>
        <h1>{data.kontentItemProdukt?.elements?.nazov?.value}</h1>
      </div>
      <div>
        <img src={data.kontentItemProdukt?.elements?.foto?.value?.[0]?.url ?? ''} />
      </div>
    </Layout>
  );
};

export default Product;

export const query = graphql`
    query Product($slug: String!) {
        kontentItemProdukt(elements: { url_slug: {value: { eq: $slug } }}) {
            elements {
                url_slug { value}
            }
            elements {
                nazov {
                    value
                }
                krajina {
                    value {
                        name
                    }
                }
                cena {
                    value
                }
                foto {
                    value {
                        url
                    }
                }
            }
        }
    }
`;
