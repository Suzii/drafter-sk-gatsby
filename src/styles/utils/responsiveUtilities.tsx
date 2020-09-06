import { css } from 'styled-components';

const invisibleMixin = css`
  display: none !important;
`;

export const responsiveUtilities = css`
  .hidden-xs {
    @media (max-width: ${props => props.theme.media.sm}+1) {
      ${invisibleMixin}
    }
  }
  
  .hidden-sm {
    @media (max-width: ${props => props.theme.media.md}+1) {
      ${invisibleMixin}
    }
  }
  
  .hidden-md {
    @media (max-width: ${props => props.theme.media.lg}+1) {
      ${invisibleMixin}
    }
  }
  
  .hidden-lg {
    @media (min-width: ${props => props.theme.media.lg}) {
      ${invisibleMixin}
    }
  }
`;
