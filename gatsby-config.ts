import * as dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const usePreviewUrl = !!process.env.KONTENT_PREVIEW_API_KEY;

const gatsbyConfig: GatsbyConfig = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'React',
        allExtensions: true,
      },
    },
    {
      resolve: '@kentico/gatsby-source-kontent',
      options: {
        projectId: process.env.GATSBY_KONTENT_PROJECT_ID,
        languageCodenames: [process.env.GATSBY_KONTENT_LANGUAGE_CODENAMES],
        includeTaxonomies: true,
        usePreviewUrl,
        authorizationKey: usePreviewUrl ? process.env.KONTENT_PREVIEW_API_KEY : undefined,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./graphql-types.ts`,
        documentPaths: [
          './src/**/*.{ts,tsx}',
          // './gatsby-api/**/*.{ts,tsx}',
          './node_modules/gatsby*/!(node_modules)/**/*.js',
        ],
        codegenPlugins: [
          {
            resolve: 'typescript',
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-use-query-params`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `./src/images`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: [
          "Content-Security-Policy: frame-ancestors \'self\' https://*.kontent.ai",
        ],
      },
    },
  ],
};

export default gatsbyConfig;
