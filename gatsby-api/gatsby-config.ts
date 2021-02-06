import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('gatsby-plugin-config').default;
const usePreviewUrl = !!config.KONTENT_PREVIEW_API_KEY;

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true
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
        projectId: config.GATSBY_KONTENT_PROJECT_ID,
        languageCodenames: [config.GATSBY_KONTENT_LANGUAGE_CODENAMES],
        includeTaxonomies: true,
        usePreviewUrl,
        authorizationKey: usePreviewUrl ? config.KONTENT_PREVIEW_API_KEY : undefined,
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
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-use-query-params`,
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
      resolve: `@rshackleton/gatsby-transformer-kontent-image`,
    },
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
