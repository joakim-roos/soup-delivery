import React from 'react'
import styled from 'styled-components'
import { baseButton } from '../../style'

const Panel = styled.div`
    background-color: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    position: sticky;
    padding-left: 1rem;
    padding-right: 1rem;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Button = styled.button`
    ${baseButton}
    text-decoration: none;
    border-radius: var(--border-rounded-button);
    font-size: var(--size-base);
`;


const CheckoutPanel = ({ handleAddressSubmit, handlePaymentSubmit }) => {

    return (
        <Panel>
            <Button
                type='submit'
                form='form'

            >
                Checkout
            </Button>
        </Panel>
    )
}

export default CheckoutPanel