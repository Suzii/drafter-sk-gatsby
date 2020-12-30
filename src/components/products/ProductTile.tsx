import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React, { useState } from 'react';
import { ProductCommon } from '../../models/products';
import { AllKnownProductTaxonomies } from '../../models/taxonomies/taxonomies';
import { ProductInfo } from './ProductInfo';

type Props<TGroupName extends AllKnownProductTaxonomies> = {
  readonly product: ProductCommon<TGroupName>;
};

const useStyles = makeStyles({
  media: {},
});

export const ProductTile = <TGroupName extends AllKnownProductTaxonomies>({ product }: Props<TGroupName>) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: '100%' }}
      data-kontent-item-id={product.id}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      raised={isHovered}
    >
      <CardMedia className={classes.media}>
        <Img
          fluid={product.img?.fluid as FluidObject}
          alt={product.img?.description ?? name ?? 'Product image'}
        />
      </CardMedia>
      <CardContent>
        <Link to={product.url}>
          <Typography gutterBottom variant="h5" component="h2" data-kontent-element-codename={`name`}>
            {product.name}
          </Typography>
        </Link>
        <Typography variant="body2" color="textSecondary" component="div">
          <ProductInfo properties={product.properties} />
        </Typography>
      </CardContent>
    </Card>
  );
};
