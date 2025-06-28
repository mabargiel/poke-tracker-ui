import { createGlobalStyle } from 'styled-components'

import { CONSTANTS } from '@/utils/constants.ts'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    height: 100%;
    overflow: hidden;
  }

  body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
    background-color: ${CONSTANTS.uiColors.background};
    color: ${CONSTANTS.uiColors.textPrimary};
    line-height: 1.6;
  }
`

export default GlobalStyles
