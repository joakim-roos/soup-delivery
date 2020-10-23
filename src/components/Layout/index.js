import React from 'react'
import styled from 'styled-components'
import Onboard from '../Onboard'
import Navigation from '../Navigation'
import ProfileNavigation from '../Profile'
import BackgroundImage from '../Background'
import Modal from '../Modal'

const MainWrapper = styled.main`
    background: transparent; 
    position: relative; 
    height: 100vh;
    width: 100vw;
    overflow: scroll;
`;

const Layout = (props) => {

    return (
        <MainWrapper>
            <Modal
                handleModal={props.handleModal}
                isModalOpen={props.isModalOpen}
                wrapperRef={props.wrapperRef}
            />
            <Onboard />
            <Navigation />
            <ProfileNavigation />
            {props.children}
            <BackgroundImage />
        </MainWrapper>
    )
}

export default Layout