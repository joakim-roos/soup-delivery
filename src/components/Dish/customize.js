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
        width: 15px;
        text-align: center;
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


const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error('Something went wrong')
    }
}

const CounterButtons = ({ ingredient, handleIncrement, handleDecrement }) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <ButtonWrapper>
            <RoundButton
                primary
                disabled={state.count === 0 ? true : false}
                onClick={() => { dispatch({ type: 'decrement' }); handleDecrement(ingredient); }}
            />
            <p>{state.count}</p>
            <RoundButton
                disabled={state.count === 5 ? true : false}
                increment
                primary
                onClick={() => { dispatch({ type: 'increment' }); handleIncrement(ingredient); }}
            />
        </ButtonWrapper>
    )
}

const Customize = ({ custom, handleIncrement, handleDecrement }) => {
    if (!custom) return null;

    return (
        <CardWrapper>
            <BackgroundOpacity />
            <h2>Customize</h2>

            {custom.map(ingredient => (
                <Ingredient key={ingredient.id}>
                    <p>{ingredient.name}</p>
                    <p>+ {ingredient.price} kr</p>
                    <CounterButtons
                        ingredient={ingredient}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement} />
                </Ingredient>
            ))}
        </CardWrapper>
    )
}

export default Customize