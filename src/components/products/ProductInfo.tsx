import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { ProductCommon } from '../../models/product';

export type ProductInfoProps = {
  readonly info: ProductCommon;
};

export const ProductInfo: React.FC<ProductInfoProps> = ({ info }) => (
  <ProductInfoStyled>
    <Typography variant="body2" color="textSecondary" component="div">
      <div className="label">Výrobca:</div>
      <div className="value">{info.producer?.name ?? '-'}</div>

      <div className="label">Krajina:</div>
      <div className="value">{info.country?.name ?? '-'}</div>
    </Typography>
  </ProductInfoStyled>
);

const ProductInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0;
  width: 100%;

  .label {
    width: 30%;
    margin-bottom: 10px;
  }

  .value {
    width: 70%;
    margin-bottom: 10px;
  }
`;
