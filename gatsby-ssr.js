import React from 'react';

const HtmlAttributes = {
  lang: 'sk',
};

const HeadComponents = [
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />,
  <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />,
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />,
  <title>Drafter, s.r.o.</title>,
  <meta name="author" content="suzii" />,
  <meta name="description" content="Drafter - farmárske produkty, od výrobcov až na vaše pulty." />,
  <meta name="keywords" content="mliečne výrobky, syry, kozie, ovčie, ajvar, mlieko, bryndza, jogurty, oštiepok" />,
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />,
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />,
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />,
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffc914" />,
  <meta name="msapplication-TileColor" content="#26471f" />,
  <meta name="theme-color" content="#ffffff" />,
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
