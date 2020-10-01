import React from 'react';

import styled from 'styled-components'
import { ProceedButton, CounterButtons } from '../Buttons'

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
    return (
        <Panel>
            <CounterButtons />
            <Price>129 kr</Price>
            <ProceedButton primary />
        </Panel>
    )
}

export default AddToCart