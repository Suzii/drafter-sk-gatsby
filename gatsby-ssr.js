import React from 'react';

const HtmlAttributes = {
  lang: 'sk',
};

const HeadComponents = [
  <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
];

const PreviewBodyAttributes = {
  'data-kontent-project-id': `${process.env.GATSBY_KONTENT_PROJECT_ID}`,
  'data-kontent-language-codename':`${process.env.GATSBY_KONTENT_LANGUAGE_CODENAMES}`,
};

const BodyAttributes = process.env.NODE_ENV === 'preview'
  ? PreviewBodyAttributes
  : {};

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
  setBodyAttributes(BodyAttributes);
};
