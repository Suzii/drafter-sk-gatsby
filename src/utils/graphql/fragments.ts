
import { graphql } from 'gatsby'

export const TaxonomyElementFields = graphql`
    fragment TaxonomyElementFields on kontent_item_taxonomy_element_value {
        name
        taxonomy_group
        value { name codename }
    }
`

export const FluidImage = graphql`
    fragment FluidImage350w on kontent_item_asset_element_value {
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
`;
