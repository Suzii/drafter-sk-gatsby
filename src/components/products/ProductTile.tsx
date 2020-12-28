import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React, { useState } from 'react';
import { Kontent_Item_Asset_Element, KontentAssetFluid } from '../../../graphql-types';
import { Maybe, Uuid } from '../../@types/global';
import { PRODUCT_URL } from '../../constants/urls';

type ProductTileProps = {
  readonly id: Maybe<Uuid>;
  readonly name: Maybe<string>;
  readonly urlSlug: Maybe<string>;
  readonly img: Maybe<(
    Pick<Kontent_Item_Asset_Element, 'description'>
    & { fluid?: Maybe<Pick<KontentAssetFluid, 'aspectRatio' | 'base64' | 'sizes' | 'src' | 'srcSet'>> }
    )>;
};

const useStyles = makeStyles({
  media: {
  },
});

export const ProductTile: React.FC<ProductTileProps> = ({ id, img, name, urlSlug }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      data-kontent-item-id={id}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      raised={isHovered}
    >
      <CardMedia className={classes.media}>
        <Img
          fluid={img?.fluid as FluidObject}
          alt={img?.description ?? name ?? 'Product image'}
        />
      </CardMedia>
      <CardContent>
        <Link to={PRODUCT_URL(urlSlug)}>
          <Typography gutterBottom variant="h5" component="h2" data-kontent-element-codename={`name`}>
            {name}
          </Typography>
        </Link>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};
