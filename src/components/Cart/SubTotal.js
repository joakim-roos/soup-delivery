import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import { baseCardWrapper, baseBackgroundOpacity } from '../../style'
import { OrderContext } from '../../context'
import { ACTION } from '../../state'

const CardWrapper = styled.section`
    ${baseCardWrapper}

    & h2 {
        font-weight: 500;
        font-size: var(--size-xl);
    }

    & div {
        display: flex;
        justify-content: space-between;
    }

    & p {
        font-size: var(--size-sm);
        color: var(--color-gray-light);
        font-weight: 400;
    }

    & div:last-of-type p {
        font-size: var(--size-base);
        color: var(--font-color-secondary);
        font-weight: 500;
    }
`;

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;




const SubTotal = () => {
    const { state, dispatch } = useContext(OrderContext)
    // tood: destructure

    useEffect(() => {
        //let arr = []
        /* arr = state.cart.map(item => (
            parseInt(item.price)
        ))
 */
        //arr = state.cart.map(({ price }) => Number(price));

        // let total = arr.reduce((a, b) => a + b, 0)

        // let total = state.cart.map(({ price }) => Number(price)).reduce((a, b) => a + b, 0)
        let total = state.cart.reduce((a, b) => a + Number(b.price), 0)

        dispatch(ACTION.total_price(total))
    }, [state.cart, dispatch])

    return (
        <CardWrapper>
            <h2>Total</h2>
            <BackgroundOpacity />
            <div>
                <p>Subtotal:</p>
                <p>{state.total_price} kr</p>
            </div>
            <div>
                <p>Delivery fee:</p>
                <p>{state.delivery.price ? state.delivery.price : '0'} kr</p>
            </div>
            <div>
                <p>Total:</p>
                <p>{state.total_price + state.delivery.price} kr</p>
            </div>
        </CardWrapper>
    )
}

export default SubTotal