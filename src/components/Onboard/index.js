import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { BG_Yellow, BG_Yellow_Mobile, Background, Logo_Onboard } from '../../images';

const Overlay = styled.div`
  width: 100vw; /* Full width (cover the whole page) */
  height: 100vh; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  
  & img {
    position: relative;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    margin: auto;
  }
`;

const Logo = () => (
  <img src={Logo_Onboard} alt='' />
)

const BackgroundImage = () => (
  <div style={{ overflow: "hidden", position: 'absolute', bottom: '0', left: '0', zIndex: '100', width: '100%' }} >

    <svg width="100%" height="100%" viewBox="0 0 1440 538" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class='top' d="M1108.9 0.99883C1290.05 0.998836 1439.99 79.4343 1439.99 79.4343L1439.99 537.999L-0.0129395 537.999L-0.012949 78.2732C119.987 111.53 422.79 138.872 659.264 118.377C843.115 102.442 857.336 0.998822 1108.9 0.99883Z" fill="#FFCB40" fill-opacity="0.2" />
      <path class='bottom' d="M1116.13 46.3711C1305.53 46.3711 1439.99 113.729 1439.99 113.729L1439.99 537.855L-0.0130615 537.855L-0.0129501 82.371C127.674 116.486 425.681 161.812 662.156 142.634C846.007 127.723 883.36 46.371 1116.13 46.3711Z" fill="#FFCB40" fill-opacity="0.4" />
      <path class='middle' d="M1133.48 89.279C1295.65 89.279 1439.99 148.513 1439.99 148.513L1439.99 537.855L-0.0130615 537.855L-0.0129512 87.129C127.674 118.753 426.444 182.979 662.919 165.201C846.77 151.379 887.698 89.279 1133.48 89.279Z" fill="#FFCB40" />
    </svg>

  </div>
)

const OnBoard = () => {
  return (
    <Overlay>
      <Logo />
      <BackgroundImage />
    </Overlay>
  )
}

export default OnBoard