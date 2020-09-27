import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import SVG from 'react-inlinesvg'

import { Background, BG_Mobile } from '../../images'

const Wrapper = styled.div`
    overflow: hidden; 
    position: absolute; 
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -200;

    & svg {
        display: block;
    }
  
    & svg > .bg_color { 
        /* Change color on background image here using fill. */
        fill: ${props => props.color}
    }
`;

const WrapperTop = styled.div`
    overflow: hidden; 
    position: absolute;
    transform: rotate(180deg);
    top: 0;
    left: 0;
    width: 100%;
    z-index: 200;

    & svg {
    display: block;
    
    }

    & svg > .bg_color { 
    /* Change color on background image here using fill. */
        fill: ${props => props.color}
    }
`;

const BackgroundImage = ({ color }) => {
    const isMobileDevice = useMediaQuery({ maxWidth: 500 })
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 501 })

    return (
        <>
            {/* <WrapperTop>
                <SVG src={BG_Mobile} />
            </WrapperTop> */}
            <Wrapper color={color}>

                {isMobileDevice &&
                    <SVG src={BG_Mobile} />
                }

                {isDesktopOrLaptop &&
                    <SVG src={Background} />
                }

            </Wrapper>
        </>
    )
}

export default BackgroundImage