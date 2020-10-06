import React from 'react'

import styled from 'styled-components'
import { ProceedButton } from '../Buttons'


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

const CheckoutPanel = () => {
    return (
        <Panel>
            <ProceedButton
                primary
                onClick={() => console.log('click')}
            >
                Checkout
            </ProceedButton>
        </Panel>
    )
}

export default CheckoutPanel