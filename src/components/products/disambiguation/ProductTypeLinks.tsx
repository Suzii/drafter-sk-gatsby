import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { getUrlByProductType } from '../../../constants/urls';
import { ProductType } from '../../../models/products/productTypes';

export const ProductTypeLinks = () => (
  <ProductTypeLinksStyled>
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      <Grid item>
        <ProductTypeLink title="Mliečne" type="diary" />
      </Grid>
      <Grid item>
        <ProductTypeLink title="Mäsové" type="meat" />
      </Grid>
      <Grid item>
        <ProductTypeLink title="Ostatné" type="other" />
      </Grid>
    </Grid>
  </ProductTypeLinksStyled>
);

type ProductTypeTileProps = {
  readonly type: ProductType;
  readonly title: string;
};

export const ProductTypeLink: React.FC<ProductTypeTileProps> = ({ type, title }) => (
  <Typography variant="h6" className="tile">
    <Link to={getUrlByProductType(type)} activeClassName="active">
      {title}
    </Link>
  </Typography>
);

const ProductTypeLinksStyled = styled.div`
  margin: 2rem;

  .tile {
    text-transform: uppercase;
    color: ${p => p.theme.palette.secondary.main};
  }

  .active {
    text-decoration: underline;
  }
`;
