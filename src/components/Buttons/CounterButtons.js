import React, { useReducer } from 'react'
import styled from 'styled-components'
import { RoundButton } from './index'

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    
    & p {
        width: 15px;
        text-align: center;
        font-size: var(--size-xl);

    }
`;

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            if (state.count === 5) return { count: 5 }
            return { count: state.count + 1 };
        case 'decrement':
            if (state.count === 0) return { count: 0 }
            return { count: state.count - 1 };
        default:
            throw new Error()
    }
}

const CounterButtons = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <ButtonWrapper>
            <RoundButton
                primary onClick={() => dispatch({ type: 'decrement' })} />

            <p>{state.count}</p>

            <RoundButton
                increment
                primary
                onClick={() => dispatch({ type: 'increment' })} />
        </ButtonWrapper>
    )
}

export default CounterButtons

