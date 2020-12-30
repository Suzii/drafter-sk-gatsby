import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { PRODUCTS_DIARY_URL, PRODUCTS_MEAT_URL, PRODUCTS_OTHER_URL } from '../../constants/urls';

type ProductsProps = {}

const Products: React.FC<ProductsProps> = () => (
  <Layout>
    <Link to={PRODUCTS_DIARY_URL}>Mliečne</Link>
    <Link to={PRODUCTS_MEAT_URL}>Mäsové</Link>
    <Link to={PRODUCTS_OTHER_URL}>Ostatné</Link>
  </Layout>
);

export default Products;
