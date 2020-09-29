import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../../style'
import MenuPage from '../Menu'
import CartPage from '../Cart'
import CheckoutPage from '../Checkout'
import SignInPage from '../SignIn'
import SignUpPage from '../SignUp'
import ProfilePage from '../Profile'
import DishPage from '../Dish'
import Onboard from '../Onboard'
import Navigation from '../Navigation'
import ProfileNavigation from '../Profile'

import NavigationContext from '../Navigation/Navigation.Context'

import * as ROUTES from '../../constants/routes'

import { BackgroundImage } from '../Background'


function App() {
    const [isHidden, setIsHidden] = useState(true)
    const toggleProfileNavigation = () => setIsHidden(!isHidden)

    return (
        <>
            <ThemeProvider theme={theme}>
                <NavigationContext.Provider value={{ isHidden, toggleProfileNavigation }}>
                    <GlobalStyle />
                    <Onboard />
                    <BackgroundImage />

                    <Router>
                        <Navigation />
                        <ProfileNavigation />

                        <main style={{ position: 'relative', background: 'transparent', height: 'calc(100vh - 57px)', overflow: 'scroll' }}>

                            <Switch>
                                <Route exact path={ROUTES.MENU} component={MenuPage} />
                                <Route path={ROUTES.CART} component={CartPage} />
                                <Route path={ROUTES.CHECKOUT} component={CheckoutPage} />
                                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                                <Route path={ROUTES.PROFILE} component={ProfilePage} />
                                <Route path={ROUTES.DISH} component={DishPage} />
                            </Switch>

                        </main>

                    </Router>

                </NavigationContext.Provider>
            </ThemeProvider>
        </>
    )
}

export default App