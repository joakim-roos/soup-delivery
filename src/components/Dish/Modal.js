import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ProceedButton } from '../Buttons'
import Lottie from 'react-lottie'
import animationData from './lottie.json'

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

const StyledProceedButton = styled(ProceedButton)`
margin-top: 4rem;
`;

const Modal = ({ handleModal, isModalOpen }) => {
    const [lottie, setLottie] = useState({ isStopped: false })
    const defaultOptions = {
        loop: false,
        autoplay: false,
        play: false,
        /* onComplete: setLottie({ ...lottie, isStopped: true }), */
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

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
                    onClick={handleModal}
                >
                    Thanks!
                </StyledProceedButton>
            </Wrapper>
        </>
    )
}

export default Modal