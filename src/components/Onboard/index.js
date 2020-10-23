import React, { useState } from 'react'
import styled from 'styled-components'
import { Logo_Onboard } from '../../images';

import BackgroundImage from '../Background'

const Modal = styled.div`
    position: fixed;
    background-color: var(--background);
    display: ${props => props.isHidden ? 'none' : 'block'};
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    z-index: 900; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
    
    & img {
        position: absolute;
        display: block;
        top: 50%;
        transform: translateY(-50%);
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
    }

    & h1 {
        z-index: 2;
    }
`;

const Logo = () => (
    <img src={Logo_Onboard} alt='' />
)


const OnBoard = () => {
    const [isHidden, setIsHidden] = useState(JSON.parse(sessionStorage.getItem('isHidden')))

    const onClick = () => {
        setIsHidden(true)
        sessionStorage.setItem('isHidden', JSON.stringify(true))
    }

    return (
        <>
            {isHidden ?
                null :
                <Modal isHidden={isHidden} onClick={() => onClick()} >
                    <Logo />
                    <BackgroundImage />
                </Modal>
            }
        </>
    )
}

export default OnBoard