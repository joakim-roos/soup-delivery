import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

import MenuPage from '../Menu'
import CartPage from '../Cart'
import CheckoutPage from '../Checkout'
import SignInPage from '../SignIn'
import SignUpPage from '../SignUp'

import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    yellow_Primary: '#FFCB40',
    background: '#F5F5F5',
    font_Primary: '#333333',
    font_Secondary: '#4F4F4F',
    font_Gray_Primary: '',
    font_Gray_Secondary: '',
  },
  text: {
    spacing_Primary: '0.5px',
    spacing_Button: '0.3px'
  }
}
function App() {
  return (
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
  )
}

export default App