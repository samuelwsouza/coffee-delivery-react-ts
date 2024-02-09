import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.background};      
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    /* overflow-y: hidden;  */
  } 

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }
`
