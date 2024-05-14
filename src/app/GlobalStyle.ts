import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    color: black;
  }

  body {
        margin: 0;
        padding: 0;
      }
  
      p,
      h1,
      h2,
      h3 {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-weight: 400;
      }
`;
