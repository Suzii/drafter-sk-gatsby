import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { PRODUCTS_URL } from "../constants/urls"

const Home: React.FC = () => (
  <Layout>
    <div>Hello, from drafter.sk!</div>
    <div>
      <p>Go and check out our <Link to={PRODUCTS_URL}>products</Link>!</p>
    </div>
  </Layout>
)

export default Home
