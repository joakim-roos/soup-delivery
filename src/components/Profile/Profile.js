import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon, Close_Icon } from '../../images'

const Modal = styled.div`
    position: relative;
    background-color: ${props => props.theme.color.background};
    display: ${props => props.isHidden ? 'none' : 'block'};
    width: 100vw; /* Full width (cover the whole page) */
    height: 100vh; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
     /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
`;




const ProfileContent = () => {
    const [isHidden, setIsHidden] = useState()

    const onClick = () => {
        console.log('hej')
    }
    return (
        <Modal onClick={() => onClick()}>
            <Icon src={Close_Icon} />
        </Modal>
    )
}

export default ProfileContent