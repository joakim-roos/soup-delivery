import React, { useContext } from 'react'
import styled from 'styled-components'
import { Icon, Close_Icon } from '../../images'

import NavigationContext from '../Navigation/Navigation.Context'

const Modal = styled.div`
    position: absolute;
    background-color: ${props => props.theme.color.background};
    display: ${props => props.isHidden ? 'none' : 'block'};
    width: 100vw; /* Full width (cover the whole page) */
    height: calc(100vh - 57px); 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
     /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
`;




const ProfileNavigation = () => {
    const { isHidden } = useContext(NavigationContext)

    return (

        <Modal isHidden={isHidden}>
            <Icon src={Close_Icon} />
            <p>Profile Nav</p>
        </Modal>
    )
}

export default ProfileNavigation