import React, { useContext } from 'react'
import styled from 'styled-components'
import { BackgroundImage } from '../Background'
import NavigationContext from '../Navigation/Navigation.Context'

const Modal = styled.div`
    position: absolute;
    background-color: ${props => props.theme.color.background};
    display: ${props => props.isHidden ? 'none' : 'block'};
    width: 100vw; 
    height: calc(100vh - 57px); 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: -100px;
margin-top: 4rem;

& ul li {
    font-weight: 700;
    font-size: ${props => props.theme.text.size_lg};
    letter-spacing: ${props => props.theme.text.spacing_wider};
    margin-bottom: 1rem;
}
`;

const ProfileNavigation = () => {
    const { isHidden } = useContext(NavigationContext)

    return (
        <Modal isHidden={isHidden}>
            <BackgroundImage />
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
                    <br />
                    <li>
                        Log out
                    </li>
                </ul>
            </Wrapper >
        </Modal >
    )
}

export default ProfileNavigation