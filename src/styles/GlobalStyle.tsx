import { createGlobalStyle } from 'styled-components';
import '../styles/font-face.css';
import './global.css';

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
    font-family: 'Titillium Web', 'Open Sans', sans-serif;
    text-align: justify;
  
    // gatsby wrappers hack
    #___gatsby { 
      width: 100%;
    }
  }
  
  a {
    text-decoration: none;
  
    &:hover {
      text-decoration: underline;
    }
  }
`
