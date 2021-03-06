import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import BackgroundImage from '../Background'
import SignOutButton from '../SignOut'

import { NavigationContext } from '../../context'
import { AuthUserContext } from '../../context'

import * as ROUTES from '../../constants/routes'

const Modal = styled.div`
    position: fixed;
    background-color: var(--background);
    display: ${props => props.isHidden ? 'none' : 'block'};
    margin-top: 57px;
    min-height: calc(100vh -57px); 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: -100px;
    margin-top: 4rem;

& ul li {
    font-weight: 700;
    font-size: var(--size-lg);
    letter-spacing: var(--spacing-wider);
    margin-bottom: 1rem;
}
`;

const ProfileNonAuth = () => {
    const history = useHistory()
    const { toggleProfileNavigation } = useContext(NavigationContext)
    const onClick = () => {
        toggleProfileNavigation()
        history.push(ROUTES.SIGN_IN)
    }
    return (
        <Wrapper>
            <ul>
                <li
                    onClick={() => onClick()}>
                    Sign in
                </li>
            </ul>
        </Wrapper>
    )
}

const ProfileAuth = () => {

    return (
        <Wrapper>
            <ul>
                <li>
                    My Orders
                </li>
                <li>
                    My Adresses
                </li>
                <li>
                    Wallet
                </li>
                <li>
                    Need Help?
                </li>
                <SignOutButton label='Log Out' />
            </ul>
        </Wrapper>
    )
}

const ProfileNavigation = () => {
    const { isHidden } = useContext(NavigationContext)
    const authUser = useContext(AuthUserContext)

    return (
        <Modal isHidden={isHidden}>
            <BackgroundImage />
            {authUser ?
                <ProfileAuth /> :
                <ProfileNonAuth />
            }
        </Modal>
    )
}

export default ProfileNavigation