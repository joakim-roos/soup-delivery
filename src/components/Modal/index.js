import React, { useRef, useEffect, useState, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: var(--background);
    border-radius: var(--border-rounded-card);
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
            }
        }

        document.addEventListener("mousedown", onClickOutside);

        return () => {
            document.removeEventListener('mousedown', onClickOutside)
        }
    }, [ref])
}

const SignInModal = (props) => {
    const wrapperRef = useRef(null)
    const buttonRef = useRef(null)
    const history = useHistory()
    useClickOutside(wrapperRef, props.toggleModal)

    const onClickHandler = (e) => {
        e.persist()
        props.toggleModal(false)

        setTimeout(() => {
            if (e.target.value === 'sign in') return history.push(ROUTES.SIGN_IN)
            if (e.target.value === 'sign up') return history.push(ROUTES.SIGN_UP)
        }, 300)
    }

    return (

        <Wrapper ref={wrapperRef}
        >
            <p>It seems that you're not logged in.</p>

            <button
                value='sign in'
                ref={buttonRef}
                onClick={(e) => onClickHandler(e)}
            >
                Sign in
            </button>

            <button
                ref={buttonRef}
                value='sign up'
                onClick={(e) => onClickHandler(e)}
            >
                Sign up
            </button>

        </Wrapper>
    )
}

const CartModal = (props) => {
    return (
        <Wrapper
            isDisplayNone={props.isDisplayNone}
        >
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
                isStopped={props.lottie.isStopped}
            >
            </Lottie>
            <p>Product was added to your cart!</p>
            <StyledProceedButton
                primary
                onClick={() => props.onButtonClick()}
            >
                Thanks!
                </StyledProceedButton>
        </Wrapper>
    )
}

const Modal = () => {
    const location = useLocation()
    const [lottie, setLottie] = useState({ isStopped: false })
    const { isModalOpen, toggleModal } = useContext(ModalContext)
    const history = useHistory()


    const transition = useTransition(isModalOpen, null, {
        from: { opacity: '0', position: 'fixed', zIndex: '1000' },
        enter: { opacity: '1', position: 'fixed', zIndex: '1000' },
        leave: { opacity: '0' },
        config: { duration: 200 }
    })

    const onButtonClick = () => {
        toggleModal(false)
        setTimeout(() => {
            history.goBack()
        }, 300)
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
                    {
                        transition.map(
                            ({ item, key, props }) =>
                                item && (
                                    <animated.div
                                        key={key}
                                        style={props}
                                    >
                                        <SignInModal
                                            toggleModal={toggleModal}
                                        />
                                    </animated.div>
                                )
                        )
                    }
                    <BackgroundFilter
                        isModalOpen={isModalOpen} />


                </>
                :
                <>
                    {
                        transition.map(
                            ({ item, key, props }) =>
                                item && (
                                    <animated.div
                                        key={key}
                                        style={props}
                                    >
                                        <CartModal
                                            isModalOpen={isModalOpen}
                                            onButtonClick={onButtonClick}
                                            toggleModal={toggleModal}
                                            lottie={lottie}
                                        />

                                    </animated.div>
                                )
                        )
                    }
                    <BackgroundFilter
                        isModalOpen={isModalOpen} />
                </>

            }

            {/* {location.pathname === ROUTES.CART && isModalOpen
                ?
                <>
                <animated.div
                    style={style} >

                    <CartModal
                        isDisplayNone={isDisplayNone}
                        isModalOpen={isModalOpen}
                        onButtonClick={onButtonClick}
                        toggleModal={toggleModal}
                        lottie={lottie}

                    />
                </animated.div>
                : null
                        
            }*/}

        </>
    )
}

export default Modal