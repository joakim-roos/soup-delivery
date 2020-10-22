import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
  --background: #FFF;
  --font-color-primary: #333333;
  --font-color-secondary: #4F4F4F;
  --size-xs: 10px;
  --size-sm: 12px;
  --size-base: 14px;
  --size-md: 16px;
  --size-lg: 20px;
  --size-xl: 22px;
  --spacing-wide: 0.3px;
  --spacing-wider: 0.5px;
  --border-rounded-input: 14px;
  --border-rounded-button: 12px;
  --border-rounded-card: 8px;
  --border-rounded: 4px;
  --color-yellow: #FFCB40;
  --color-yellow-secondary: #FFE59F;
  --color-gray-lighter: #949494;
  --color-gray-light: #828282;
  --letter-spacing-wide: 0.3px;
  --letter-spacing-wider: 0.5px;
}

html {
  box-sizing: border-box;
  font-size: 16px;
  -webkit-text-size-adjust: none;
  margin: auto;
  
}

*{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 400px;
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