import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'


const Wrapper = styled.div`
    position: fixed;
    display: ${props => props.isModalOpen ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
    border-radius: var(--border-rounded-card);
    z-index: 1000;
    padding: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & p {
        text-align: center;
    }
`;

const BackgroundFilter = styled.div`
    display: ${props => props.isModalOpen ? 'block' : 'none'};
    position: fixed;
    z-index: 4;
    background: transparent;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(80%) blur(.5px);
`;


const Modal = (props) => {
    const wrapperRef = useRef(null)
    props.useClickOutside(wrapperRef)

    return (

        <>
            <BackgroundFilter
                isModalOpen={props.isModalOpen}
            />
            <Wrapper
                isModalOpen={props.isModalOpen}
                ref={wrapperRef}
            >
                <p>It seems that you're not logged in.</p>

                <Link
                    to={ROUTES.SIGN_IN}>Sign in
                </Link>

                <Link
                    to={ROUTES.SIGN_UP}>Sign up
                </Link>

            </Wrapper>
        </>
    )
}

export default Modal