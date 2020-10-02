import React, { useReducer, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { RoundButton } from '../Buttons'
import { ACTION_TYPE, ACTION, buttonReducer } from '../../state'
import { OrderContext } from '../../context'
import { initializeApp } from 'firebase'


const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    
    & p {
        width: 15px;
        text-align: center;
        font-size: var(--size-xl);

    }
`;



const CounterButtons = ({ ingredient, isCartButton, initialCount }) => {
    const [state, buttonDispatch] = useReducer(buttonReducer, initialCount, init)
    const { order, dispatch } = useContext(OrderContext)

    function init(initialCount) {
        return { count: initialCount }
    }

    const onClickHandler = (type) => {
        buttonDispatch({
            type: type
        });

        if (type === ACTION_TYPE.INCREMENT_BUTTON && isCartButton) return dispatch(ACTION.increment_amount(state.count))
        if (type === ACTION_TYPE.DECREMENT_BUTTON && isCartButton) return dispatch(ACTION.decrement_amount(state.count))

        if (type === ACTION_TYPE.DECREMENT_BUTTON) return dispatch(ACTION.decrement_custom(ingredient))
        if (type === ACTION_TYPE.INCREMENT_BUTTON) return dispatch(ACTION.increment_custom(ingredient))
    }
    const isMinValue = () => {
        if (isCartButton) {
            return state.count === 1;
        } else return state.count === 0;
    }
    return (
        <ButtonWrapper>
            <RoundButton
                primary
                disabled={isMinValue()}
                onClick={() => onClickHandler(ACTION_TYPE.DECREMENT_BUTTON)}
            />
            <p>{state.count}</p>
            <RoundButton
                disabled={state.count === 5 ? true : false}
                increment
                primary
                onClick={() => onClickHandler(ACTION_TYPE.INCREMENT_BUTTON)}
            />
        </ButtonWrapper>
    )
}

export default CounterButtons

