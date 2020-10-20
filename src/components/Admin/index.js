import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useFirebase } from '../Firebase'
import { AuthUserContext } from '../../context'
import { useAuthorization } from '../Session'
import * as ROLES from '../../constants/roles'


const Wrapper = styled.div`
    display: flex; 
    flex-direction: row;
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
    orders: [],
    total_amount: null
}


const NotAuthorized = () => (
    <div>You're not authorized to enter this page.</div>
)



const AdminPage = () => {
    const firebase = useFirebase()
    const authUser = useContext(AuthUserContext)
    const [state, setState] = useState(INITIAL_STATE)
    useAuthorization(condition)

    const calculateTotalAmount = () => {
        return state.orders.reduce((a, b) => a + Number(b.total_price), 0)
    }

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
    <>
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
                    
                <h2>Total Amount:</h2>
                <div>
                    <p>{calculateTotalAmount()}</p>
                </div>
                </>
                : 
                <NotAuthorized />
            }
        </>
    )
}

export default AdminPage