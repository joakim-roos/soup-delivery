import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
/* Poppins font. Weights: 400 (regular), 500 (medium) and 700 (bold) */

html {
  box-sizing: border-box;
  font-size: 16px;
}

*{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


html, body {
  background-color: ${props => props.theme.color.background};
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, p, ol, ul {
  margin: 0;
  padding: 0;
  font-family: 'Poppins';
  font-weight: 500;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins';
  font-weight: 700;
  margin: 0;
  padding: 0;
}


ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyle