import { Typography } from '@material-ui/core';
import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { HeroImageQuery } from '../../../graphql-types';
import { navBarHeight } from '../../styles/theme';
import { Logo, LogoType } from '../Logo';
import { PRODUCTS_URL } from '../../constants/urls';
import { Feature, isFeatureEnabled } from '../../utils/featureToggles';

export const HeroSection: React.FC = () => {
  const heroImage = useStaticQuery<HeroImageQuery>(graphql`
      query HeroImage {
          file(relativePath: { eq: "hero.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 1920) {
                      aspectRatio
                      src
                      srcSet
                      sizes
                      base64
                  }
              }
          }
      }
  `);

  return (
    <HeroHeader
      Tag={`header`}
      fluid={[
        `linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56))`,
        heroImage.file!.childImageSharp!.fluid! as FluidObject
      ]}
    >
      <div className="hero__text">
        <Logo variant={LogoType.Compact} className="hero__text--logo" />
        <Typography variant="h1" component="h1" className="hero__text--title">Farmárske potraviny</Typography>
        <Typography variant="h5" component="p" className="hero__text--subtitle">od&nbsp;výrobcov až&nbsp;na&nbsp;vaše pulty</Typography>
        {isFeatureEnabled(Feature.ProductsPage) && (
          <Typography variant="button">
            <Link to={PRODUCTS_URL} className="hero__text--cta">Sortiment</Link>
          </Typography>
        )}
      </div>
    </HeroHeader>
  );
};

const HeroHeader = styled(BackgroundImage)`
  min-height: ${`calc(100vh - ${navBarHeight})`};
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: 30% 60%;
  background-size: cover;

  .hero__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    text-align: center;

    color: ${p => p.theme.palette.common.lightGray};
    text-transform: uppercase;
    
    * {
      margin: 0.8rem 1.2rem;
    }
    
    .hero__text--logo {
      fill: ${p => p.theme.palette.primary.main};
      height: 4.5rem;
    }

    .hero__text--title {
      padding: 1.3rem 2.3rem;
      border: 0.3rem solid ${p => p.theme.palette.primary.main};
    }

    .hero__text--cta {
      color: ${p => p.theme.palette.common.white};
      padding: 0.8rem 1rem;
      background-color: rgba(255, 255, 255, 0.3);
      text-decoration: none;

      &:hover {
        background-color: ${p => p.theme.palette.primary.main};
        border-color: rgba(255, 255, 255, 0.7);
        color: rgba(0, 0, 0, 0.7);;
      }
    }
`;
