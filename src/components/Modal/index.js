import React, { useRef, useEffect, useState, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import { ProceedButton } from '../Buttons'
import Lottie from 'react-lottie'
import animationData from './lottie.json'
import { ModalContext } from '../../context'

const StyledProceedButton = styled(ProceedButton)`
margin-top: 4rem;
`;

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

const defaultOptions = {
    loop: false,
    autoplay: false,
    play: false,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const useClickOutside = (ref, setIsModalOpen) => {

    useEffect(() => {

        const onClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsModalOpen(false)
                console.log('true')
            }
        }

        document.addEventListener("mousedown", onClickOutside);

        return () => {
            document.removeEventListener('mousedown', onClickOutside)
        }
    }, [ref])
}

const Modal = () => {
    const location = useLocation()
    const wrapperRef = useRef(null)
    const [lottie, setLottie] = useState({ isStopped: false })
    const { isModalOpen, toggleModal } = useContext(ModalContext)
    const history = useHistory()
    useClickOutside(wrapperRef, toggleModal)

    const onButtonClick = () => {
        toggleModal(false)
        history.push('/menu')
    }


    useEffect(() => {
        setTimeout(() => {
            isModalOpen
                ?
                setLottie({ isStopped: false })
                :
                setLottie({ isStopped: true })
        }, 300)
    }, [isModalOpen])


    return (

        <>
            {location.pathname === ROUTES.MENU
                ?
                <>
                    <BackgroundFilter
                        isModalOpen={isModalOpen}
                    />
                    <Wrapper
                        isModalOpen={isModalOpen}
                        ref={wrapperRef}
                    >
                        <p>It seems that you're not logged in.</p>

                        <Link
                            to={ROUTES.SIGN_IN}
                            onClick={() => toggleModal(false)}
                        >
                            Sign in
                        </Link>

                        <Link
                            to={ROUTES.SIGN_UP}
                            onClick={() => toggleModal(false)}
                        >
                            Sign up
                        </Link>

                    </Wrapper>
                </>
                :
                <>
                    <BackgroundFilter
                        isModalOpen={isModalOpen}
                    />
                    <Wrapper
                        isModalOpen={isModalOpen}
                    >
                        <Lottie
                            options={defaultOptions}
                            height={200}
                            width={200}
                            isStopped={lottie.isStopped}
                        >
                        </Lottie>
                        <p>Product was added to your cart!</p>
                        <StyledProceedButton
                            primary
                            onClick={() => onButtonClick()}
                        >
                            Thanks!
                </StyledProceedButton>
                    </Wrapper>
                </>
            }
        </>
    )
}

export default Modal