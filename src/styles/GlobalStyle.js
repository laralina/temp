import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  *, *::before, *::after {
    box-sizing: border-box;

    a{
      text-decoration:none;
    }

    button{
      cursor: pointer;
    }
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 15px;
  }


`;

export default GlobalStyle;
