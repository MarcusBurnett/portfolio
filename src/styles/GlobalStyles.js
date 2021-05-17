import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
/* box sizing fix - https://css-tricks.com/box-sizing */
html {
  box-sizing: border-box;
  overscroll-behavior: none;
}

*,
*:before,
*:after {
  overscroll-behavior: none;
  box-sizing: inherit;
}

/* Responsive images */
img {
  max-width: 100%;
}

/* Reset ul styles */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

body {
  transition: background-color 0.4s ease;
}
`;

export default GlobalStyles;
