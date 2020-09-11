import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FluidObject } from 'gatsby-image';
import { math } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { HeroImageQuery } from '../../../graphql-types';
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
        <h1 className="hero__text--title">Farmárske potraviny</h1>
        <h3 className="hero__text--subtitle">od výrobcov až na vaše pulty</h3>
        {isFeatureEnabled(Feature.ProductsPage) && (
          <Link to={PRODUCTS_URL} className="hero__text--cta Sortiment">Sortiment</Link>
        )}
      </div>
    </HeroHeader>
  );
};

const logoHeight = math(`3rem * 1.5`);
const titleFontSize = math(`3rem`);
const subtitleFontSize = math(`1.3rem`);
const titlePaddingVertical = math(`1.3rem`);
const titlePaddingHorizontal = math(`2.3rem`);
const shrinkConstant = math(`0.7`);

const HeroHeader = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: 30% 60%;

  background-size: cover;
  min-height: 100vh;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${p => p.theme.colors.lightGray};
  }

  .hero__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    .hero__text--logo {
      fill: ${p => p.theme.colors.primary};

      height: ${logoHeight};
      margin: ${logoHeight}/4;
    }

    .hero__text--title {
      font-size: ${titleFontSize};
      line-height: ${titleFontSize};
      padding: ${titlePaddingVertical} ${titlePaddingHorizontal};
      border: 0.3rem solid ${p => p.theme.colors.primary};
      margin: 0;
    }

    .hero__text--subtitle {
      font-size: ${subtitleFontSize};
      line-height: ${subtitleFontSize};
    }

    .hero__text--cta {
      text-transform: uppercase;
      color: ${p => p.theme.colors.white};
      padding: 0.8rem 1rem;
      background-color: rgba(255, 255, 255, 0.3);
      text-decoration: none;

      &:hover {
        background-color: rgba(255, 219, 11, 1);
        border-color: rgba(255, 255, 255, 0.7);
        color: ${p => p.theme.colors.black};
      }
    }

    @media (max-width: ${p => p.theme.media.sm} + 1) {
      .hero__text--logo {
        height: ${logoHeight} * ${shrinkConstant};
      }

      .hero__text--title {
        font-size: ${titleFontSize} * ${shrinkConstant};
        line-height: ${titleFontSize} * ${shrinkConstant};
        padding: ${titlePaddingVertical} * ${shrinkConstant} ${titlePaddingHorizontal} * ${shrinkConstant};
      }

      .hero__text--subtitle {
        font-size: ${subtitleFontSize} * 0.8;
        line-height: ${subtitleFontSize} * 0.8;
      }
    }

    @media (max-width: ${p => p.theme.media.xs} + 1) {
      .hero__text--logo {
        height: ${logoHeight} * ${shrinkConstant};
      }

      .hero__text--title {
        font-size: ${titleFontSize} * ${shrinkConstant} * ${shrinkConstant};
        line-height: ${titleFontSize} * ${shrinkConstant} * ${shrinkConstant};
        padding: ${titlePaddingVertical} * ${shrinkConstant} * ${shrinkConstant} ${titlePaddingHorizontal} * ${shrinkConstant} * ${shrinkConstant};
      }

      .hero__text--subtitle {
        font-size: ${subtitleFontSize} * 0.7;
        line-height: ${subtitleFontSize} * 0.7;
      }
    }
`;
