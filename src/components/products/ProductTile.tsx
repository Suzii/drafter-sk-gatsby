import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React, { useState } from 'react';
import { getKontentAttrs } from '../../_ui-components/kontentSmartlink/KontentSmartlink';
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
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      raised={isHovered}
    >
      <CardMedia className={classes.media} {...getKontentAttrs(product.id, 'name')}>
        <Img
          fluid={product.img?.fluid as FluidObject}
          alt={product.img?.description ?? product.name ?? 'Obrázok produktu'}
        />
      </CardMedia>
      <CardContent>
        <Link to={product.url}>
          <Typography gutterBottom variant="h6" component="div">
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
