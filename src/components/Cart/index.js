import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Ordered from './Ordered'
import DeliveryOptions from './DeliveryOptions'
import SubTotal from './SubTotal'
import CheckoutPanel from './CheckoutPanel'
import { ACTION } from '../../state'

import { OrderContext } from '../../context'

const CartPage = (e) => {
    const { state, dispatch } = useContext(OrderContext)

    const handleFormSubmit = (option) => {
        console.log(option)
    }



    /* useEffect(() => {
        dispatch(ACTION.set_delivery())
    }, [state.delivery]) */

    return (
        <>
            <Ordered />

            <DeliveryOptions
                handleFormSubmit={handleFormSubmit}
            />

            <SubTotal />

            <CheckoutPanel
            />
        </>
    )
}

export default CartPage