import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { baseButton } from '../../style'
import { useFirebase } from '../Firebase'
import { AuthUserContext, OrderContext } from '../../context'
import { v4 as uidv4 } from 'uuid';

import * as ROUTES from '../../constants/routes'

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

const Button = styled.button`
    ${baseButton}
    text-decoration: none;
    border-radius: var(--border-rounded-button);
    font-size: var(--size-base);
`;


const CheckoutPanel = () => {
    const firebase = useFirebase()
    const authUser = useContext(AuthUserContext)
    const { state } = useContext(OrderContext)
    const history = useHistory()

    const handleOnClick = () => {
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes();
        if (state.cart.length === 0) return null;

        const id = uidv4()

        firebase
            .user(authUser.uid)
            .child('orders')
            .push({
                id: id,
                created_at: {
                    date: date,
                    time: time
                },
                items: { ...state.cart },
                total_price: state.total_price,
                delivery: state.delivery,
            })
            .then(
                firebase
                    .orders().push({
                        id: id,
                        created_at: {
                            date: date,
                            time: time
                        },
                        items: { ...state.cart },
                        total_price: state.total_price,
                        delivery: state.delivery,
                        user: authUser.uid
                    })
            )
        history.push(ROUTES.TRACK_ORDER)
    }

    return (
        <Panel>
            <Button
                primary
                disabled={state.cart.length === 0}
                type='submit'
                form='form'
                onClick={() => handleOnClick()}
            >
                Pay {state.total_price} kr
            </Button>
        </Panel>
    )
}

export default CheckoutPanel