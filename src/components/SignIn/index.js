import React, { useState } from 'react'
import styled from 'styled-components'
import { useFirebase } from '../Firebase'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const FormWrapper = styled.form`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & input {
        border-radius: var(--border-rounded-input);
        margin-bottom: 0.5rem;
        padding: 0.7rem 1rem 0.7rem 1rem;
        border: 1px solid var(--color-gray-light);
        width: 350px;
        font-size: var(--size-md);
        font-family: 'Poppins Medium';
        letter-spacing: .5px;
        
        ::placeholder {
            color: var(--font-color-secondary);
        } 
    }
`;

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}




const SignInPage = () => {
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
        <FormWrapper onSubmit={(e) => onSubmit(e)}>

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

            <button
                disabled={isInvalid}
                type="submit"
            >
                Sign In
            </button>

            {error && <p>{error.message}</p>}

        </FormWrapper>
    )
}

export default SignInPage