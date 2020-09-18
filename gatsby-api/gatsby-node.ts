import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import { Kontent_Item_Product, ProductsUrlSlugsQuery } from '../graphql-types';
import { PRODUCT_URL } from '../src/constants/urls';
import { Feature, isFeatureEnabled } from '../src/utils/featureToggles';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions: { createNodeField, deleteNode } }) => {
  if (node.internal.type === `kontent_item_product` && isFeatureEnabled(Feature.ProductsPage)) {
    createNodeField({
      node,
      name: `slug`,
      value: ((node as unknown) as Kontent_Item_Product)?.elements?.url_slug?.value,
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage }, graphql }) => {
  if (isFeatureEnabled(Feature.ProductsPage)) {
    const result = await graphql<ProductsUrlSlugsQuery>(`
      query ProductsUrlSlugs {
        allKontentItemProduct {
          edges {
            node {
              id
              elements {
                url_slug {
                  value
                }
              }
            }
          }
        }
      }
    `);

    result?.data?.allKontentItemProduct.edges.forEach(({ node }) => {
      createPage({
        path: PRODUCT_URL(node.elements?.url_slug?.value),
        component: resolve(`src/templates/product.tsx`),
        context: {
          slug: node.elements?.url_slug?.value,
        },
      });
    });
  }
};
