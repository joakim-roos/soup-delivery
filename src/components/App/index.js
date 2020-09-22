import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../../theme'
import MenuPage from '../Menu'
import CartPage from '../Cart'
import CheckoutPage from '../Checkout'
import SignInPage from '../SignIn'
import SignUpPage from '../SignUp'

import * as ROUTES from '../../constants/routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <main>
            <Route exact path={ROUTES.MENU} component={MenuPage} />
            <Route path={ROUTES.CART} component={CartPage} />
            <Route path={ROUTES.CHECKOUT} component={CheckoutPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          </main>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App