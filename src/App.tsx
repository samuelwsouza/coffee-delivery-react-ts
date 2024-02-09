import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { FormProviderWrapper } from './contexts/FormProviderWrapper'

/*
  ThemeProvider
  Context.Provider
  React Router DOM
  Além do CoffeeContextProvider, tenho o FormProviderWrapper para info do form
  do Checkout para o Success
*/

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CoffeeContextProvider>
            <FormProviderWrapper>
              <Router />
            </FormProviderWrapper>
          </CoffeeContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
