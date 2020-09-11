import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'
import { responsiveUtilities } from './utils/responsiveUtilities';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${responsiveUtilities}

  html {
    font-size: 18px;
    line-height: 1.5rem;
  }
  
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  
    font-family: 'Titillium Web', 'Open Sans', sans-serif;
    font-weight: ${p => p.theme.fontWeight.normal};
    color: ${p => p.theme.colors.darkGray};
    line-height: 1.6;
    text-align: justify;
  
    // gatsby wrappers hack
    & > div { 
      width: 100%;
    }
  }
  
  .a {
    text-decoration: none;
  
    &:hover {
      text-decoration: underline;
    }
  }
  
  h1,
  h2,
  h3 {
    color: ${p => p.theme.colors.secondary};
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeight.bolder};
  }
`

