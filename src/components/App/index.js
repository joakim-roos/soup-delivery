import React, { useState, useEffect, useReducer } from 'react'
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
import { useAuthentication } from '../Session'
import { useFirebase } from '../Firebase'
import { NavigationContext, AuthUserContext, OrderContext } from '../../context'
import { INITIAL_ORDER } from '../../constants/state'
import { orderReducer } from '../../state'

import * as ROUTES from '../../constants/routes'

import { BackgroundImage } from '../Background'


function App() {
    const authUser = useAuthentication();
    const firebase = useFirebase()
    const [isHidden, setIsHidden] = useState(true)
    const [menu, setMenu] = useState(JSON.parse(localStorage.getItem('menu')))
    const [state, dispatch] = useReducer(orderReducer, INITIAL_ORDER)
    const toggleProfileNavigation = () => setIsHidden(!isHidden)


    useEffect(() => {
        firebase
            .menu()
            .on('value', snapshot => {
                const menu = snapshot.val()
                localStorage.setItem('products', JSON.stringify(menu))
                setMenu(menu)

            })
        return () => firebase.menu().off()
    }, [firebase])

    return (
        <>
            <AuthUserContext.Provider value={authUser}>
                <ThemeProvider theme={theme}>
                    <NavigationContext.Provider value={{ isHidden, toggleProfileNavigation }}>
                        <OrderContext.Provider value={{ state, dispatch }}>
                            <GlobalStyle />
                            <Onboard />
                            <BackgroundImage />

                            <Router>
                                <Navigation />
                                <ProfileNavigation />

                                <main style={{ position: 'relative', background: 'transparent', height: 'calc(100vh - 57px)', overflow: 'scroll' }}>

                                    <Switch>
                                        <Route exact path={ROUTES.MENU} render={() => <MenuPage menu={menu} />} />
                                        <Route path={ROUTES.CART} component={CartPage} />
                                        <Route path={ROUTES.CHECKOUT} component={CheckoutPage} />
                                        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                                        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                                        <Route path={ROUTES.PROFILE} component={ProfilePage} />
                                        <Route path={ROUTES.DISH} render={() => <DishPage menu={menu} />} />
                                    </Switch>

                                </main>

                            </Router>
                        </OrderContext.Provider>
                    </NavigationContext.Provider>
                </ThemeProvider>
            </AuthUserContext.Provider>
        </>
    )
}

export default App