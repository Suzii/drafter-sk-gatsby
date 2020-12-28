import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { graphql } from 'gatsby';
import React from 'react';
import { ProductsQuery } from '../../graphql-types';
import { Section, SectionTitle } from '../_ui-components/Container';
import Layout from '../components/Layout';
import { ProductTile } from '../components/products/ProductTile';
import { mapProductsFromKontent } from '../models/product';
import { Feature, isFeatureEnabled } from '../utils/featureToggles';

type ProductsProps = {
  readonly data: ProductsQuery
}

const Products: React.FC<ProductsProps> = ({ data }) => (
  <Layout>
    <Section>
      <SectionTitle>Produkty</SectionTitle>
      <Container maxWidth="lg">
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
              alignItems="stretch"
            >
              {mapProductsFromKontent(data).map(product => (
                <Grid
                  key={product.id}
                  item
                  style={{ display: 'flex' }}
                  xl={3}
                  lg={3}
                  md={4}
                  sm={4}
                  xs={6}
                >
                  <ProductTile product={product} />
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
                    system {
                        id
                    }
                    elements {
                        name {
                            value
                        }
                        url_slug {
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
        }
    }
`;
