import { graphql } from 'gatsby';

export const TaxonomyElementFields = graphql`
    fragment TaxonomyElementFields on kontent_item_taxonomy_element_value {
        name
        taxonomy_group
        value { name codename }
    }
`

export const KontentImage = graphql`
    fragment KontentImage on kontent_item_asset_element_value {
        value {
            description
            url
            width
            height
        }
    }
`;
