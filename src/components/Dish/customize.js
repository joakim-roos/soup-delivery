import React, { useReducer } from 'react'

import styled from 'styled-components'
import { baseCardWrapper, baseBackgroundOpacity } from '../../style'
import { RoundButton } from '../Buttons'

const CardWrapper = styled.section`
    ${baseCardWrapper}

    & h2 {
        font-weight: 500;
        font-size: var(--size-xl);
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    
    & p {
        font-size: var(--size-xl);
        margin: 0 0.5rem 0 0.5rem;
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


const IncrementButtonGroup = () => (
    <ButtonWrapper>
        <RoundButton primary />
        <p>1</p>
        <RoundButton increment primary />
    </ButtonWrapper>
)

function init(initialCount) {
    return { count: initialCount }
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload)
        default:
            throw new Error()
    }
}

const Customize = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <CardWrapper>

            <BackgroundOpacity />

            <h2>Customize</h2>
            <Ingredient>
                <p>Chili</p>
                <p>+ 29 kr</p>
                <IncrementButtonGroup />
            </Ingredient>

            <Ingredient>
                <p>Chili</p>
                <p>+ 29 kr</p>
                <IncrementButtonGroup />
            </Ingredient>

            <Ingredient>
                <p>Chili</p>
                <p>+ 29 kr</p>
                <IncrementButtonGroup />
            </Ingredient>

        </CardWrapper>
    )
}

export default Customize