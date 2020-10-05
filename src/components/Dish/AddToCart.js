import React, { useContext, useEffect } from 'react';

import styled from 'styled-components'
import { ProceedButton, CounterButtons } from '../Buttons'
import { OrderContext } from '../../context'
import { ACTION } from '../../state'
import { INITIAL_ORDER } from '../../constants/state'

const Panel = styled.div`
    background-color: var(--background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Price = styled.div`
    margin-left: 2rem;
    color: var(--font-color-secondary);
`;

const AddToCart = () => {
    const { state, dispatch } = useContext(OrderContext)
    const { price, base_price, custom, extras, amount } = state.order
    const { order } = state

    useEffect(() => {
        if (!custom) return;
        let arr = []
        for (let i = 0; i < custom.length; i++) {
            let price = custom[i].price
            arr.push(parseInt(price))
        }
        for (let j = 0; j < extras.length; j++) {
            let price = extras[j].price
            arr.push(parseInt(price))
        }

        let number = arr.reduce((a, b) => a + b, 0) + parseInt(base_price)
        number = number * amount

        dispatch(ACTION.update_price(number.toString()))

    }, [custom, extras, base_price, amount, dispatch])

    const onClickHandler = () => {
        dispatch(ACTION.add_to_cart(order))
        dispatch(ACTION.reset_order(INITIAL_ORDER.order))
    }


    return (
        <Panel>
            <CounterButtons
                isCartButton
                initialCount={1} />
            <Price>{price} kr</Price>
            <ProceedButton
                onClick={() => onClickHandler()}
                primary
            >
                Add to cart
                </ProceedButton>
        </Panel>
    )
}

export default AddToCart