import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import {
  Kontent_Item_Diary_Product,
  Kontent_Item_Meat_Product,
  Kontent_Item_Other_Product,
  ProductsUrlSlugsQuery
} from '../graphql-types';
import { PRODUCT_URL } from '../src/constants/urls';
import { Feature, isFeatureEnabled } from '../src/utils/featureToggles';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions: { createNodeField, deleteNode } }) => {
  if (isFeatureEnabled(Feature.ProductsPage) && (
    node.internal.type === `kontent_item_diary_product` ||
    node.internal.type === `kontent_item_meat_product` ||
    node.internal.type === `kontent_item_other_product`
  )) {
    createNodeField({
      node,
      name: `slug`,
      value: ((node as unknown) as (Kontent_Item_Diary_Product | Kontent_Item_Other_Product | Kontent_Item_Meat_Product))?.elements?.url_slug?.value,
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage }, graphql }) => {
  if (isFeatureEnabled(Feature.ProductsPage)) {
    const result = await graphql<ProductsUrlSlugsQuery>(`
      query ProductsUrlSlugs {
        allKontentItemDiaryProduct {
          edges { node { elements { url_slug { value } } } }
        }
        allKontentItemMeatProduct {
          edges { node { elements { url_slug { value } } } }
        }
        allKontentItemOtherProduct {
          edges { node { elements { url_slug { value } } } }
        }
      }
    `);

    result?.data?.allKontentItemDiaryProduct.edges.forEach(({ node }) => {
      createPage({
        path: PRODUCT_URL('diary', node.elements?.url_slug?.value),
        component: resolve(`src/templates/diaryProduct.tsx`),
        context: {
          slug: node.elements?.url_slug?.value,
        },
      });
    });

    result?.data?.allKontentItemMeatProduct.edges.forEach(({ node }) => {
      createPage({
        path: PRODUCT_URL('meat', node.elements?.url_slug?.value),
        component: resolve(`src/templates/meatProduct.tsx`),
        context: {
          slug: node.elements?.url_slug?.value,
        },
      });
    });

    result?.data?.allKontentItemOtherProduct.edges.forEach(({ node }) => {
      createPage({
        path: PRODUCT_URL('other', node.elements?.url_slug?.value),
        component: resolve(`src/templates/otherProduct.tsx`),
        context: {
          slug: node.elements?.url_slug?.value,
        },
      });
    });
  }
};
