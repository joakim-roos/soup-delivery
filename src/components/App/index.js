import React, { useState, useEffect, useReducer } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../../style'

import { useAuthentication } from '../Session'
import { useFirebase } from '../Firebase'
import { NavigationContext, AuthUserContext, OrderContext, ModalContext } from '../../context'
import { INITIAL_ORDER } from '../../constants/state'
import { orderReducer } from '../../state'

import Routing from './Routing'
import Layout from '../Layout'

function App() {
    const authUser = useAuthentication();
    const firebase = useFirebase()
    const [isHidden, setIsHidden] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [menu, setMenu] = useState(JSON.parse(localStorage.getItem('menu')))
    const [state, dispatch] = useReducer(orderReducer, INITIAL_ORDER)

    const toggleProfileNavigation = () => setIsHidden(!isHidden)
    const toggleModal = (val) => setIsModalOpen(val)
    const handleClosedModal = () => setIsModalOpen(true)
    const handleOpenModal = () => setIsModalOpen(false)

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
        <Router>
            <AuthUserContext.Provider value={authUser}>
                <ThemeProvider theme={theme}>
                    <NavigationContext.Provider value={{
                        isHidden,
                        toggleProfileNavigation
                    }}>
                        <OrderContext.Provider value={{
                            state,
                            dispatch
                        }}>
                            <ModalContext.Provider value={{
                                isModalOpen,
                                handleOpenModal,
                                handleClosedModal,
                                toggleModal
                            }}>
                                <GlobalStyle />

                                <Layout>
                                    <Routing menu={menu} />
                                </Layout>

                            </ModalContext.Provider>
                        </OrderContext.Provider>
                    </NavigationContext.Provider>
                </ThemeProvider>
            </AuthUserContext.Provider>
        </Router>

    )
}

export default App