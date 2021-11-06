import { ImageElement } from '@kentico/gatsby-kontent-components';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { getKontentAttrs } from '../../../_ui-components/kontentSmartlink/KontentSmartlink';
import { getUrlByProductType } from '../../../constants/urls';
import { ProductTypeModel } from '../../../models/products/productTypes';
import { ProductsPageWrapper } from '../ProductsPageWrapper';

type Props = {
  readonly productTypes: ReadonlyArray<ProductTypeModel>;
};

export const ProductsDisambiguation: React.FC<Props> = ({ productTypes }) => (
  <ProductsPageWrapper>
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      {productTypes.map(t => (
        <Grid
          key={t.type}
          item
          style={{ display: 'flex' }}
          xl={2}
          lg={2}
          md={3}
          sm={4}
          xs={12}
        >
          <Tile type={t} />
        </Grid>
      ))}
    </Grid>
  </ProductsPageWrapper>
);

type TileProps = {
  readonly type: ProductTypeModel;
};

export const Tile: React.FC<TileProps> = ({ type }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: '100%' }}
      raised={isHovered}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Link to={getUrlByProductType(type.type)} {...getKontentAttrs(type.id, 'image')}>
        <CardMedia>
          <ImageElement
            image={type.img}
            alt={type.img?.description ?? 'Typ produktu'}
          />
        </CardMedia>
      </Link>
      <Link to={getUrlByProductType(type.type)}>
        <CardContent>
          <Typography variant="h6" component="h2" align="center" style={{ textTransform: 'uppercase' }}>
            {type?.title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};
