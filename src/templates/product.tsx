import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FixedObject } from 'gatsby-image/index';
import React from 'react';
import { ProductQuery } from '../../graphql-types';
import { Container, Stack } from '../components/Container';
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
      <Container>
        <Stack>
          <h1>{data.kontentItemProdukt?.elements?.nazov?.value}</h1>
          <Img fixed={data?.kontentItemProdukt?.elements?.foto?.value?.[0]?.fixed as FixedObject} />
        </Stack>
      </Container>
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
                        fixed(width: 350) {
                            base64
                            height
                            src
                            srcSet
                            width
                        }
                    }
                }
            }
        }
    }
`;
