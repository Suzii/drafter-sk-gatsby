import { graphql } from "gatsby"
import React from "react"
import { ProductsQuery } from "../../graphql-types"
import Layout from "../components/layout"

type ProductsProps = {
  readonly data: ProductsQuery;
}

const Products: React.FC<ProductsProps> = ({ data }) => (
  <Layout>
    <div>
      <h1>Products</h1>
    </div>
    <div>
      <p>Check out our portfolio</p>
      <ul>
        {data.allKontentItemProdukt.edges.map(product => (
          <li key={product.node.id}>{product.node.elements?.nazov?.value}</li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default Products


export const query = graphql`
    query Products {
        allKontentItemProdukt {
            edges {
                node {
                    id
                    elements {
                        nazov {
                            value
                        }
                    }
                }
            }
        }
    }
`
