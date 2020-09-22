import React from 'react';

const HtmlAttributes = {
  lang: 'sk',
};

const HeadComponents = [
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
