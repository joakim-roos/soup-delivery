import React from 'react';

import styled from 'styled-components'
import { RoundButton } from '../Buttons'
import { ProceedButton } from '../Buttons'


const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    
    & p {
        font-size: var(--size-xl);
        margin: 0 0.5rem 0 0.5rem;
    }
`;

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

const IncrementButtonGroup = () => (
    <ButtonWrapper>
        <RoundButton primary />
        <p>1</p>
        <RoundButton increment primary />
    </ButtonWrapper>
)

const AddToCart = () => (
    <Panel>
        <IncrementButtonGroup />
        <Price>129 kr</Price>
        <ProceedButton primary />
    </Panel>
)

export default AddToCart