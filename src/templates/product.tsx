import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { ProductQuery } from '../../graphql-types';
import { Section, SectionTitle } from '../_ui-components/Container';
import Layout from '../components/Layout';
import { ProductDescription } from '../components/products/ProductDescription';
import { ProductInfo } from '../components/products/ProductInfo';
import { mapProductFromKontent } from '../models/product';

type ProductProps = {
  readonly data?: ProductQuery
}

const Product: React.FC<ProductProps> = ({ data }) => {
  if (!data) {
    console.log('Product: no data found');
    return null;
  }

  const product = mapProductFromKontent(data);

  return (
    <Layout>
      <Container maxWidth="lg">
        <Section data-kontent-item-id={product.id}>
          <Grid
            container
            spacing={4}
            direction="row"
            alignContent="stretch"
          >
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={5}
              xs={12}
            >
              <Img
                data-kontent-element-codename={`image`}
                fluid={product.img?.fluid as FluidObject}
              />
            </Grid>
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sm={7}
              xs={12}
            >
              <SectionTitle elementCodename={`name`}>{product.name}</SectionTitle>
              <ProductInfo info={product} />
              <Typography variant="body1" component="div">
                <ProductDescription rte={product.description} />
              </Typography>
            </Grid>
          </Grid>
        </Section>
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
