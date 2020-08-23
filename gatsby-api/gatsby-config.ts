import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('gatsby-plugin-config').default;
const usePreviewUrl = config.KONTENT_PREVIEW_ENABLED === 'true';

module.exports = {
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
        projectId: config.KONTENT_PROJECT_ID,
        languageCodenames: [config.KONTENT_LANGUAGE_CODENAMES],
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
          './gatsby-api/**/*.{ts,tsx}',
        ],
        codegenPlugins: [
          {
            resolve: 'typescript',
          },
        ],
      },
    },
  ],
};
