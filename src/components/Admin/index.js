import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useFirebase } from '../Firebase'
import { AuthUserContext } from '../../context'
import { useAuthorization } from '../Session'
import * as ROLES from '../../constants/roles'

import Layout from '../Layout'

const Wrapper = styled.div`
    display: flex; 
    flex-direction: row;
    background-color: gray;
    justify-content: space-between;

    & div {
        display: flex;
    }
    & div p {
        margin: 0.5rem;
    }
    & a {
        margin: 0.5rem;
    }
`;

const condition = authUser =>
    authUser && !!authUser.roles[ROLES.ADMIN];

const INITIAL_STATE = {
    users: [],
    orders: []
}


const NotAuthorized = () => (
    <div>You're not authorized to enter this page.</div>
)



const AdminPage = () => {
    const firebase = useFirebase()
    const authUser = useContext(AuthUserContext)
    const [state, setState] = useState(INITIAL_STATE)

    useAuthorization(condition)

    useEffect(() => {
        firebase
            .orders().once('value', snapshot => {
                const ordersObject = snapshot.val()

                const ordersList = Object.keys(ordersObject).map(key => ({
                    ...ordersObject[key],
                    uid: key
                })).reverse()

                setState(state => ({
                    ...state,
                    orders: ordersList
                }))
            })

        firebase
            .users().once('value', snapshot => {
                const usersObject = snapshot.val()
                const usersList = Object.keys(usersObject).map(key => ({
                    ...usersObject[key],
                    uid: key
                }))
                setState(state => ({
                    ...state,
                    users: usersList
                }))
            })

    }, [firebase])

    return (
        <Layout>
            {authUser
                ?
                <>
                <h2>Users</h2>
            <div>
                {state && state.users.map((user) => (
                    <p>{user.email}</p>
                ))}
            </div>
            <h2>Orders</h2>
            <div>
                {state && state.orders.map((order) => (
                    <Wrapper>
                        <div>
                            <p>{order.created_at.date}</p>
                            <p>{order.created_at.time}</p>
                        </div>
                        <Link to='/'>Details</Link>
                    </Wrapper>
                ))}
            </div>
                    <h2>Popular Extras</h2>
                    </>
                : 
                <NotAuthorized />
            }
        </Layout>
    )
}

export default AdminPage