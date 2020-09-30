import React, { useReducer, useContext } from 'react'

import styled from 'styled-components'
import { baseCardWrapper, baseBackgroundOpacity } from '../../style'
import { CounterButtons } from '../Buttons'

const CardWrapper = styled.section`
    ${baseCardWrapper}

    & h2 {
        font-weight: 500;
        font-size: var(--size-xl);
    }
`;


const Ingredient = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p:nth-of-type(2) {
        color: var(--color-gray-light);
        font-size: var(--size-xs);
        margin-top: 2px;
        margin-right: 2rem;
    }
`;

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}`;


const Customize = () => {

    return (
        <CardWrapper>
            <BackgroundOpacity />

            <h2>Customize</h2>
            <Ingredient>
                <p>Chili</p>
                <p>+ 29 kr</p>
                <CounterButtons />
            </Ingredient>

            <Ingredient>
                <p>Chili</p>
                <p>+ 29 kr</p>
                <CounterButtons />
            </Ingredient>

            <Ingredient>
                <p>Chili</p>
                <p>+ 29 kr</p>
                <CounterButtons />
            </Ingredient>

        </CardWrapper>
    )
}

export default Customize