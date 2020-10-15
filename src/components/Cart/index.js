import React, { useContext, useEffect } from 'react'
import Ordered from './Ordered'
import DeliveryAndPayment from './DeliveryAndPayment'
import SubTotal from './SubTotal'
import CheckoutPanel from './CheckoutPanel'
import Payment from './Payment'
import * as ROUTES from '../../constants/routes'
import { AuthUserContext } from '../../context'
import { useHistory } from 'react-router-dom'

const CartPage = (e) => {
    const authUser = useContext(AuthUserContext)
    const history = useHistory()

    useEffect(() => {
        if (!authUser) history.push(ROUTES.MENU)
    }, [authUser, history])

    const handleAddressSubmit = (option) => {

    }

    const handlePaymentSubmit = (option) => {
        console.log('handlePauyment')
    }

    return (
        <>
            <Ordered />

            <DeliveryAndPayment
                handleAddressSubmit={handleAddressSubmit}
                handlePaymentSubmit={handlePaymentSubmit}
            />

            <Payment />

            <SubTotal />

            <CheckoutPanel
            />
        </>
    )
}

export default CartPage