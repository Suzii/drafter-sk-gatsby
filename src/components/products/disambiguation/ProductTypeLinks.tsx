import { Link } from 'gatsby';
import React from 'react';
import { getUrlByProductType } from '../../../constants/urls';
import { ProductType } from '../../../models/products/productTypes';

export const ProductTypeLinks = () => (
  <div className="m-md flex justify-center space-x-md">
    <ProductTypeLink title="Mliečne" type="diary" />
    <ProductTypeLink title="Mäsové" type="meat" />
    <ProductTypeLink title="Ostatné" type="other" />
  </div>
);

type ProductTypeTileProps = {
  readonly type: ProductType;
  readonly title: string;
};

export const ProductTypeLink: React.FC<ProductTypeTileProps> = ({ type, title }) => (
  <h2 className="uppercase font-semibold text-secondary">
    <Link to={getUrlByProductType(type)} activeStyle={{ textDecoration: 'underline' }}>
      {title}
    </Link>
  </h2>
);
