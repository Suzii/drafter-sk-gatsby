import React from 'react';

const HtmlAttributes = {
  lang: 'sk',
};

const HeadComponents = [
  <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
];

const BodyAttributes = {
  'data-kontent-project-id': `${process.env.GATSBY_KONTENT_PROJECT_ID}`,
  'data-kontent-language-codename':`${process.env.GATSBY_KONTENT_LANGUAGE_CODENAMES}`,
};

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
  setBodyAttributes(BodyAttributes);
};
