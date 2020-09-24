import React, { useState } from 'react'
import styled from 'styled-components'
import { BG_Yellow, BG_Mobile, Background, Logo_Onboard } from '../../images';

import { BackgroundImage } from '../Background'

const Overlay = styled.div`
  position: relative;
  display: ${props => props.isHidden ? 'none' : 'block'};
  width: 100vw; /* Full width (cover the whole page) */
  height: 100vh; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10; /* Specify a stack order in case you're using a different order for other elements */
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
    z-index: 10000;
  }
`;

const Logo = () => (
  <img src={Logo_Onboard} alt='' />
)


const OnBoard = () => {
  const [isHidden, setIsHidden] = useState(false)

  const onClick = () => {
    setIsHidden(!isHidden)
  }

  return (
    <Overlay isHidden={isHidden} onClick={() => onClick()} >
      <Logo />
      <BackgroundImage />
    </Overlay>
  )
}

export default OnBoard