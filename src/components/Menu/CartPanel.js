import React, { useMemo } from 'react'
import styled from 'styled-components'
import { ProceedButton } from '../Buttons'

const Panel = styled.div`
    background-color: var(--background);
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;

    & div {
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
    }
    & div p:first-of-type {
        font-weight: 400;
        margin-bottom: 0.5rem;
        font-size: var(--size-sm);
        color: var(--color-gray-lighter);
    }

    & div p:last-of-type {
        font-weight: 500;
        font-size: var(--size-sm);
        color: var(--font-color-secondary);
    }
`;



function TotalPrice({ cart }) {
    const calculatedPrice = useMemo(() => {
        let arr = [];
        for (let i = 0; i < cart.length; i++) {
            arr.push(parseInt(cart[i].price))
        }
        return arr.reduce((a, b) => a + b, 0)
    }, [cart])

    return (
        <>
            <p>You have {cart.length} soups in the cart.</p>
            <p>Total: {calculatedPrice} kr</p>
        </>
    )
}

const CartPanel = ({ cart, onButtonClick }) => {

    return (
        <Panel>
            <div>
                <TotalPrice cart={cart} />
            </div>
            <ProceedButton
                primary
                onClick={() => onButtonClick()}
            >
                View Cart
            </ProceedButton>
        </Panel>
    )
}

export default CartPanel