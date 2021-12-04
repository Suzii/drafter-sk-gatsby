import { ImageElement } from '@kentico/gatsby-kontent-components';
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
    <HeroHeader className="relative flex items-center justify-center">
      <HeroGradient className="z-10 absolute w-full h-full" />
      {intro.image && (
        <ImageElement
          image={intro.image}
          alt=""
          className="hero__background-image z-0 absolute w-full h-full"
        />
      )}
      <div
        className="z-20 flex flex-col items-center m-auto text-center z-100 uppercase text-gray-100 space-y-md font-headings font-bold"
      >
        <Logo
          variant={LogoType.Compact}
          className="fill-current text-primary h-lg sm:h-xl lg:h-2xl"
        />

        <h1
          className="border-4 py-xs px-sm sm:py-sm sm:px-md md:py-md md:px-xl border-primary text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
          {...getKontentAttrs(intro.id, 'title')}
        >
          {intro?.title}
        </h1>

        {intro.subtitle && (
          <p
            className="text-md sm:text-sm md:text-xl lg:text-3xl"
            {...getKontentAttrs(intro.id, 'subtitle')}
          >
            {nbsp(intro.subtitle)}
          </p>
        )}

        {isFeatureEnabled(Feature.ProductsPage) && intro.cta && (
          <Link
            to={PRODUCTS_URL}
            className="bg-gray-100 bg-opacity-30 text-white py-xs px-sm text-gray-100 no-underline hover:no-underline hover:bg-primary hover:bg-opacity-100 text-sm sm:text-md md:text-xl lg:text-xl font-medium"
            {...getKontentAttrs(intro.id, 'cta')}
          >
            {intro.cta}
          </Link>
        )}
      </div>
    </HeroHeader>
  );
};

const HeroGradient = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56))
`

const HeroHeader = styled.header`
  min-height: ${`calc(100vh - ${navBarHeight})`};
`;
