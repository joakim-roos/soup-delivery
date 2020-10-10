import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const SubmitButton = styled.button`
    ${baseButton}
    text-decoration: none;
    border-radius: var(--border-rounded-button);
    font-size: var(--size-base);
`;

const PaymentPanel = () => {

    return (
        <Panel>
            <SubmitButton
                type='submit'
                form='payment'>
                Pay
            </SubmitButton>
        </Panel>
    )
}

export default PaymentPanel