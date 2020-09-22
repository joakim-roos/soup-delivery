import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

import MenuPage from '../Menu'
import CartPage from '../Cart'
import CheckoutPage from '../Checkout'
import SignInPage from '../SignIn'
import SignUpPage from '../SignUp'

function App() {
  return (
    <Router>
      <main>
        <Route exact path={ROUTES.MENU} component={MenuPage} />
        <Route path={ROUTES.CART} component={CartPage} />
        <Route path={ROUTES.CHECKOUT} component={CheckoutPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      </main>
    </Router>
  )
}

export default App