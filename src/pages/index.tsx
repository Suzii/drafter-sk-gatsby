import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { PRODUCTS_URL } from '../constants/urls';

const Home: React.FC = () => (
  <Layout>
    <h1>Drafter.sk</h1>
    <div>
      <p>
        Go and check out our <Link to={PRODUCTS_URL}>products</Link>!
      </p>
    </div>
  </Layout>
);

export default Home;
