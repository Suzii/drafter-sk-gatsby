import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { ProductsQuery } from '../../graphql-types';
import { Section, SectionTitle } from '../_ui-components/Container';
import Layout from '../components/Layout';
import { PRODUCT_URL } from '../constants/urls';
import { Feature, isFeatureEnabled } from '../utils/featureToggles';

type ProductsProps = {
  readonly data: ProductsQuery
}

const Products: React.FC<ProductsProps> = ({ data }) => (
  <Layout>
    <Section>
      <SectionTitle>Produkty</SectionTitle>
      <Container maxWidth="xl">
        {!isFeatureEnabled(Feature.ProductsPage)
          ? (
            <Typography variant="h2">Na stránke stále pracujeme...</Typography>
          )
          : (
            <Grid
              container
              spacing={4}
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              {data.allKontentItemProduct.edges.map(product => (
                <Grid
                  key={product.node.id}
                  item
                  xl={2}
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <Paper elevation={3} color="primary">
                    <Img
                      data-kontent-element-codename={`image`}
                      fluid={product.node.elements?.image?.value?.[0]?.fluid as FluidObject}
                      alt={product.node.elements?.image?.value?.[0]?.description ?? product.node.elements?.name?.value ?? 'Product image'}
                    />
                    <Link to={PRODUCT_URL(product.node.elements?.url_slug?.value)}>
                      {product.node.elements?.name?.value}
                    </Link>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )
        }
      </Container>
    </Section>
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
