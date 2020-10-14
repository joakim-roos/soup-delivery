import React from 'react'
import Ordered from './Ordered'
import DeliveryAndPayment from './DeliveryAndPayment'
import SubTotal from './SubTotal'
import CheckoutPanel from './CheckoutPanel'
import Payment from './Payment'

const CartPage = (e) => {

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