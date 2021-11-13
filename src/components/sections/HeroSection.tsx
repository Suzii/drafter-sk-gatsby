import { ImageElement } from '@kentico/gatsby-kontent-components';
import { Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { getKontentAttrs } from '../../_ui-components/kontentSmartlink/KontentSmartlink';
import { PRODUCTS_URL } from '../../constants/urls';
import { IntroType } from '../../models/intro';
import { navBarHeight } from '../../styles/GlobalStyle';
import { Feature, isFeatureEnabled } from '../../utils/featureToggles';
import { nbsp } from '../../utils/stringUtils';
import { Logo, LogoType } from '../Logo';

type Props = {
  readonly intro: IntroType;
};

export const HeroSection: React.FC<Props> = ({ intro }) => {
  return (
    <HeroHeader>
      <HeroGradient />
      {intro.image && (
        <ImageElement
          image={intro.image}
          alt=""
          className="hero__background-image"
        />
      )}
      <div className="hero__text">
        <Logo variant={LogoType.Compact} className="hero__text--logo" />

        <Typography variant="h1" component="h1" className="hero__text--title" {...getKontentAttrs(intro.id, 'title')}>
          {intro?.title}
        </Typography>

        {intro.subtitle && (
          <Typography variant="h5" component="p" className="hero__text--subtitle" {...getKontentAttrs(intro.id, 'subtitle')}>
            {nbsp(intro.subtitle)}
          </Typography>
        )}

        {isFeatureEnabled(Feature.ProductsPage) && intro.cta && (
          <Typography variant="button" {...getKontentAttrs(intro.id, 'cta')}>
            <Link to={PRODUCTS_URL} className="hero__text--cta">
              {intro.cta}
            </Link>
          </Typography>
        )}
      </div>
    </HeroHeader>
  );
};

const HeroGradient = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56))
`

const HeroHeader = styled.header`
  min-height: ${`calc(100vh - ${navBarHeight})`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .hero__background-image {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
}

  .hero__text {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // margin: auto;
    // text-align: center;
    // z-index: 10;
    //
    // color: ${p => p.theme.palette.common.lightGray};
    // text-transform: uppercase;
    //
    // * {
    //   margin: 0.8rem 1.2rem;
    // }
    //
    // .hero__text--logo {
    //   fill: ${p => p.theme.palette.primary.main};
    //   height: 4.5rem;
    // }
    //
    // .hero__text--title {
    //   padding: 1.3rem 2.3rem;
    //   border: 0.3rem solid ${p => p.theme.palette.primary.main};
    // }
    //
    // .hero__text--cta {
    //   color: ${p => p.theme.palette.common.white};
    //   padding: 0.8rem 1rem;
    //   background-color: rgba(255, 255, 255, 0.3);
    //   text-decoration: none;
    //
    //   &:hover {
    //     background-color: ${p => p.theme.palette.primary.main};
    //     border-color: rgba(255, 255, 255, 0.7);
    //     color: rgba(0, 0, 0, 0.7);;
    //   }
    // }
`;
