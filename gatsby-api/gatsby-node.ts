import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import { Kontent_Item_Produkt, ProductsUrlSlugsQuery } from '../graphql-types';
import { PRODUCT_URL } from '../src/constants/urls';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === `kontent_item_produkt`) {
    createNodeField({
      node,
      name: `slug`,
      value: ((node as unknown) as Kontent_Item_Produkt)?.elements?.url_slug?.value,
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql<ProductsUrlSlugsQuery>(`
  query ProductsUrlSlugs {
    allKontentItemProdukt {
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

  result?.data?.allKontentItemProdukt.edges.forEach(({ node }) => {
    createPage({
      path: PRODUCT_URL(node.elements?.url_slug?.value),
      component: resolve(`src/templates/product.tsx`),
      context: {
        slug: node.elements?.url_slug?.value,
      },
    });
  });
};
