import { ImageElement } from '@kentico/gatsby-kontent-components';
import { Link } from 'gatsby';
import React from 'react';
import { getKontentAttrs } from '../../_ui-components/kontentSmartlink/KontentSmartlink';
import { PRODUCTS_URL } from '../../constants/urls';
import { IntroType } from '../../models/intro';
import { Feature, isFeatureEnabled } from '../../utils/featureToggles';
import { nbsp } from '../../utils/stringUtils';
import { Logo, LogoType } from '../Logo';

type Props = {
  readonly intro: IntroType;
};

export const HeroSection: React.FC<Props> = ({ intro }) => {
  return (
    <div className="relative flex items-center justify-center h-[calc(100vh_-_theme(space.navHeight))]">
      <div className="z-10 absolute w-full h-full bg-black/60" />
      {intro.image && (
        <div className="z-0 absolute w-full h-full">
          <ImageElement
            image={intro.image}
            alt=""
            className="w-full h-full"
          />
        </div>
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
            className="bg-gray-100/30 text-white py-xs px-sm text-gray-100 no-underline hover:no-underline hover:bg-primary hover:bg-opacity-100 text-sm sm:text-md md:text-xl lg:text-xl font-medium"
            {...getKontentAttrs(intro.id, 'cta')}
          >
            {intro.cta}
          </Link>
        )}
      </div>
    </div>
  );
};
