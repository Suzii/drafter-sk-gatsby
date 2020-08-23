import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('gatsby-plugin-config').default;
const usePreviewApi = config.NODE_ENV === 'development';

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
        projectId: 'f408ff21-bb77-0017-334f-f1ea95739f2a',
        languageCodenames: [`sk-SK`],
        includeTaxonomies: true,
        usePreviewUrl: usePreviewApi,
        authorizationKey: usePreviewApi ? config.KONTENT_PREVIEW_API_KEY : undefined,
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
