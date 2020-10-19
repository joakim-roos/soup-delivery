import React, { useState } from 'react'
import { useFirebase } from '../Firebase'
import { useHistory } from 'react-router-dom'
import Layout from '../Layout'

import * as ROUTES from '../../constants/routes'

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}


const SignInPage = () => (
    <SignInForm />
)

const SignInForm = () => {
    const [input, setInput] = useState(INITIAL_STATE)
    const [error, setError] = useState(null)
    const firebase = useFirebase()
    const history = useHistory()

    const isInvalid = input.password === '' || input.email === '';

    const onSubmit = e => {
        const { email, password } = input

        firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                setInput({ ...INITIAL_STATE })
                history.push(ROUTES.MENU)
            })
            .catch(error => {
                setError(error)
            })

        e.preventDefault()

    }

    const onChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <Layout>
            <form onSubmit={(e) => onSubmit(e)}>

                <input
                    name="email"
                    value={input.email}
                    onChange={(e) => onChange(e)}
                    type="text" placeholder="Email"
                />

                <input
                    name="password"
                    value={input.password}
                    onChange={(e) => onChange(e)} type="password"
                    placeholder="Password"
                />

                <button disabled={isInvalid} type="submit">
                    Sign In
            </button>

                {error && <p>{error.message}</p>}

            </form>
        </Layout>
    )
}

export default SignInPage