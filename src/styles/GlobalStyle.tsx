import { createGlobalStyle } from 'styled-components';
import '../styles/font-face.css';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
        
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  
    font-family: 'Titillium Web', 'Open Sans', sans-serif;
    font-weight: ${p => p.theme.typography.fontWeightRegular};
    color: ${p => p.theme.palette.common.darkGray};
    text-align: justify;
  
    // gatsby wrappers hack
    & > div { 
      width: 100%;
      min-height: 100vh;
      
      & > div {
        min-height: 100vh;
      }
    }
  }
  
  a {
    text-decoration: none;
  
    &:hover {
      text-decoration: underline;
    }
  }
`
