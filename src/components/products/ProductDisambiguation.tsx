import { Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { getUrlByProductType } from '../../constants/urls';
import { ProductType } from '../../models/_common';

export const ProductDisambiguation = ({ withImage = false }) => (
  <ProductTilesStyled>
    <ProductTypeTile title="Mliečne" type="diary" />
    <ProductTypeTile title="Mäsové" type="meat" />
    <ProductTypeTile title="Ostatné" type="other" />
  </ProductTilesStyled>
);

type ProductTypeTileProps = {
  readonly type: ProductType;
  readonly title: string;
};

const ProductTypeTile: React.FC<ProductTypeTileProps> = ({ type, title }) => (
  <Typography variant="h4" className="tile">
    <Link to={getUrlByProductType(type)} activeClassName="active">
      {title}
    </Link>
  </Typography>
);

const ProductTilesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-around;
  margin: 2rem;

  .tile {
    text-transform: uppercase;
    color: ${p => p.theme.palette.secondary.main};
  }

  .active {
    text-decoration: underline;
  }
`;
