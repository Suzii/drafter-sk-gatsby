import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FixedObject } from 'gatsby-image/index';
import React from 'react';
import { ProductQuery } from '../../graphql-types';
import { Container, Stack } from '../_ui-components/Container';
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
      <Container
        data-kontent-item-id={data.kontentItemProduct?.system.id}
      >
        <Stack>
          <h1 data-kontent-element-codename={`name`}>{data.kontentItemProduct?.elements?.name?.value}</h1>
          <Img data-kontent-element-codename={`image`}
               fixed={data?.kontentItemProduct?.elements?.image?.value?.[0]?.fixed as FixedObject} />
        </Stack>
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
                krajina {
                    value {
                        name
                    }
                }
                image {
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
