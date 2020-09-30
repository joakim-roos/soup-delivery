import React from 'react'
import styled from 'styled-components'
import { useFirebase } from '../Firebase'

const Button = styled.button`
background: none; 
outline: none;
border: none;
font-family: 'Poppins'; 
font-weight: 900;
font-size: var(--size-md);
padding: 0;
margin-top: 1rem;
`;

const SignOutButton = (props) => {
  const firebase = useFirebase()
  return (
    <Button type="button" onClick={() => firebase.doSignOut()}>
      {props.label}
    </Button>
  )
}

export default SignOutButton;