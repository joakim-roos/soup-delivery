import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
/* Poppins font. Weights: 400 (regular), 500 (medium) and 700 (bold) */

:root {
  --background: #F5F5F5;
  --font-color-primary: #333333;
  --font-color-secondary: #4F4F4F;
  --size-xs: 10px;
  --size-sm: 12px;
  --size-md: 16px;
  --size-lg: 20px;
  --size-xl: 22px;
  --spacing-wide: 0.3px;
  --spacing-wider: 0.5px;
  --border-rounded-card: 8px;
  --border-rounded: 4px;
  --color-yellow: #FFCB40;
  --color-yellow-secondary: #FFE59F;
  --color-gray-light: #949494;
  --letter-spacing-wide: 0.3px;
  --letter-spacing-wider: 0.5px;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


body {
  background-color: var(--background);
}

html {
  color: var(--font-color-primary);
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