import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Ubuntu', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  @media (max-width: 1080px) {
      html {
          font-size: 93.75%;
      }
  }

  @media (max-width: 720px) {
      html {
          font-size: 87.5%;
      }
  }
`;
