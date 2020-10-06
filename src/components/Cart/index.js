import React from 'react'
import styled from 'styled-components'
import Ordered from './Ordered'
import DeliveryOptions from './DeliveryOptions'
import SubTotal from './SubTotal'
import CheckoutPanel from './CheckoutPanel'


const CartPage = () => {
    return (
        <>
            <Ordered />

            <DeliveryOptions />

            <SubTotal />

            <CheckoutPanel />
        </>
    )
}

export default CartPage