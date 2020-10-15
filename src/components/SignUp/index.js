import React, { useState } from 'react'
import { useFirebase } from '../Firebase'
import { useHistory } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false
}


const SignUpPage = () => (
    <SignUpForm />
)

const SignUpForm = () => {
    const firebase = useFirebase()
    const history = useHistory()
    const [input, setInput] = useState(INITIAL_STATE)
    const [error, setError] = useState(null)

    const isInvalid =
        input.passwordOne !== input.passwordTwo ||
        input.passwordOne === '' ||
        input.email === '' ||
        input.username === '';

    const onChange = e => (
        setInput({ ...input, [e.target.name]: e.target.value })
    )

    const onSubmit = e => {
        const { email, passwordOne, username, isAdmin } = input

        const roles = {};

        if (isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }


        firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                return firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        roles,
                        orders: {}
                    })
            })
            .then(authUser => {
                setInput({ ...INITIAL_STATE })
                history.push(ROUTES.MENU)
            })
            .catch(error => {
                setError(error)
            })

        e.preventDefault()

    }

    const onChangeCheckbox = e => (
        setInput({ ...input, [e.target.name]: e.target.checked })
    )

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                name='username'
                value={input.username}
                onChange={(e) => onChange(e)}
                type='text'
                placeholder='Full Name'
            />

            <input
                name="email"
                value={input.email}
                onChange={(e) => onChange(e)}
                type="text"
                placeholder="Email Address"
            />

            <input
                name="passwordOne"
                value={input.passwordOne}
                onChange={(e) => onChange(e)}
                type="password"
                placeholder="Password"
            />

            <input
                name="passwordTwo"
                value={input.passwordTwo}
                onChange={(e) => onChange(e)}
                type="password"
                placeholder="Confirm Password"
            />

            <label>
                Admin:
                <input
                    name="isAdmin"
                    type="checkbox"
                    checked={input.isAdmin}
                    onChange={(e) => onChangeCheckbox(e)}
                />
            </label>

            <button
                type="submit"
                disabled={isInvalid}
            >
                Sign Up
            </button>

            {error && <p>{error.message}</p>}
        </form>
    )
}

export default SignUpPage