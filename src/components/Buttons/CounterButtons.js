import React, { useReducer, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { RoundButton } from '../Buttons'
import { ACTION_TYPE, ACTION, buttonReducer, initState } from '../../state'
import { OrderContext } from '../../context'


const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    
    & p {
        width: 15px;
        text-align: center;
        font-size: var(--size-xl);
        margin: .5rem;

    }
`;




const CounterButtons = ({ ingredient, isCartButton, initialCount }) => {
    const [buttonState, buttonDispatch] = useReducer(buttonReducer, initialCount, initState)
    const { state, dispatch } = useContext(OrderContext)
    const { count } = buttonState

    useEffect(() => {
        if (!state) return;
        buttonDispatch(ACTION.reset(initialCount))

    }, [state.cart])


    const onClickHandler = (type) => {
        buttonDispatch({
            type: type
        });

        if (type === ACTION_TYPE.INCREMENT_BUTTON && isCartButton) return dispatch(ACTION.increment_amount(count))
        if (type === ACTION_TYPE.DECREMENT_BUTTON && isCartButton) return dispatch(ACTION.decrement_amount(count))

        if (type === ACTION_TYPE.INCREMENT_BUTTON) return dispatch(ACTION.increment_custom(ingredient.id, count))
        if (type === ACTION_TYPE.DECREMENT_BUTTON) return dispatch(ACTION.decrement_custom(ingredient, count))

    }
    const isMinValue = () => {
        if (isCartButton) {
            return count === 1;
        } else return count === 0;
    }
    return (
        <ButtonWrapper>
            <RoundButton
                primary
                disabled={isMinValue()}
                onClick={() => onClickHandler(ACTION_TYPE.DECREMENT_BUTTON)}
            />
            <p>{count && count}</p>
            <RoundButton
                disabled={count && count === 5 ? true : false}
                increment
                primary
                onClick={() => onClickHandler(ACTION_TYPE.INCREMENT_BUTTON)}
            />
        </ButtonWrapper>
    )
}

export default CounterButtons

