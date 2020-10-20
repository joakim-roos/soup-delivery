import React from 'react'
import { animated, useTransition } from 'react-spring'
import { useLocation, Route, Switch, Redirect, useHistory } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import MenuPage from '../Menu'
import CartPage from '../Cart'
import SignInPage from '../SignIn'
import SignUpPage from '../SignUp'
import ProfilePage from '../Profile'
import DishPage from '../Dish'
import AdminPage from '../Admin'
import TrackOrderPage from '../TrackOrder'
import Layout from '../Layout'


const Routing = ({ menu }) => {
    const location = useLocation()
    const history = useHistory()
    const transitions = useTransition(location, location => location.pathname, ({
        from: { opacity: .5, transform: `translate3d(${history.action === 'POP' ? '-100%' : '100%'},0,0`, position: 'absolute' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0' },
        leave: { opacity: .5, transform: `translate3d(${history.action === 'POP' ? '100%' : '-100%'},0,0`, position: 'absolute' },

    }))

    return (
        <>
            {
                transitions.map(({ item: location, props, key }) => (
                    <animated.div style={props} key={key}>
                        <Switch location={location}>
                            <Route exact path={ROUTES.MENU} render={() => <MenuPage menu={menu} />} />
                            <Route path={ROUTES.ADMIN} component={AdminPage} />
                            <Route path={ROUTES.CART} component={CartPage} />
                            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                            <Route path={ROUTES.PROFILE} component={ProfilePage} />
                            <Route path={ROUTES.TRACK_ORDER} component={TrackOrderPage} />
                            <Route path={ROUTES.DISH} render={() => <DishPage menu={menu} />} />
                            <Redirect from={'*'} to={ROUTES.MENU} />
                        </Switch>
                    </animated.div>
                ))
            }
        </>

    )
}

export default Routing