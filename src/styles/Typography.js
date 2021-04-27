import { createGlobalStyle } from 'styled-components/macro';
import { regular } from './fonts';

const Typography = createGlobalStyle`
html {
  font-size: 62.5%; /* Allows for easy rem conversion i.e 16px = 1.6rem */
}

body {
  font-family: "Dosis", sans-serif;
  font-weight: ${regular};
  font-size: 1.7rem;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: ${regular};
  color: #ffffff;
  margin: 0;
}

h1, h2 {
  font-size: 1.7rem;
}

h3 {
  font-size: 1.5rem;
}

p {
  margin: 0;
}

a {
  color: #ffffff;
  font-weight: ${regular};
  font-size: 1.5rem;
}
`;

export default Typography;
