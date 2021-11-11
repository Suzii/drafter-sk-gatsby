exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    interface KontentItemProduct implements Node & kontent_item {
      elements: KontentItemProductElements
      id: ID!
      system: kontent_item_system!
      preferred_language: String!
      parent: Node
      children: [Node!]!
      internal: Internal!
    }
    
    interface KontentItemProductElements {
      produkt_core__name: kontent_item_text_element_value
      produkt_core__image: kontent_item_asset_element_value
      produkt_core__description: kontent_item_rich_text_element_value
      produkt_core__producer: kontent_item_taxonomy_element_value
      produkt_core__country: kontent_item_taxonomy_element_value
      weight: kontent_item_number_element_value
      pieces_in_package: kontent_item_number_element_value
      url_slug: kontent_item_url_slug_element_value
    }
    
    type kontent_item_diary_product_elements implements KontentItemProductElements {
      produkt_core__name: kontent_item_text_element_value
      produkt_core__image: kontent_item_asset_element_value
      produkt_core__description: kontent_item_rich_text_element_value
      produkt_core__producer: kontent_item_taxonomy_element_value
      produkt_core__country: kontent_item_taxonomy_element_value
      weight: kontent_item_number_element_value
      pieces_in_package: kontent_item_number_element_value
      url_slug: kontent_item_url_slug_element_value
    }
    
    type kontent_item_diary_product implements Node & kontent_item & KontentItemProduct {
      elements: kontent_item_diary_product_elements
    }
    
    type kontent_item_meat_product_elements implements KontentItemProductElements {
      produkt_core__name: kontent_item_text_element_value
      produkt_core__image: kontent_item_asset_element_value
      produkt_core__description: kontent_item_rich_text_element_value
      produkt_core__producer: kontent_item_taxonomy_element_value
      produkt_core__country: kontent_item_taxonomy_element_value
      weight: kontent_item_number_element_value
      pieces_in_package: kontent_item_number_element_value
      url_slug: kontent_item_url_slug_element_value
    }
    
    type kontent_item_meat_product implements Node & kontent_item & KontentItemProduct {
      elements: kontent_item_meat_product_elements
    }
    
    type kontent_item_other_product_elements implements KontentItemProductElements {
      produkt_core__name: kontent_item_text_element_value
      produkt_core__image: kontent_item_asset_element_value
      produkt_core__description: kontent_item_rich_text_element_value
      produkt_core__producer: kontent_item_taxonomy_element_value
      produkt_core__country: kontent_item_taxonomy_element_value
      weight: kontent_item_number_element_value
      pieces_in_package: kontent_item_number_element_value
      url_slug: kontent_item_url_slug_element_value
    }
    
    type kontent_item_other_product implements Node & kontent_item & KontentItemProduct {
      elements: kontent_item_other_product_elements
    }
  `
  createTypes(typeDefs)
}
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      allKontentItemProducts: {
        type: ["KontentItemProduct"],
        resolve: async (source, args, context, info) => {
          // Whenever possible, use `limit` and `skip` on findAll calls to increase performance
          const { entries } = await context.nodeModel.findAll({ type: "KontentItemProduct", query: { limit: args.limit, skip: args.skip } })
          return entries
        },
      },
    },
  }
  createResolvers(resolvers)
}
