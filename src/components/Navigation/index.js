import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { useHistory, useLocation } from 'react-router-dom'
import { Arrow_Icon, Profile_Icon, Close_Icon } from '../../images'

import { NavigationContext } from '../../context'


const Wrapper = styled.header`
    height: 57px;
    width: 100vw;
    overflow: hidden;
    border-bottom: 1px solid var(--font-color-secondary);
    background-color: var(--background);
    position: sticky; 
    top: 0;
    z-index: 100;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
 
    & h2 {
        text-align: center;
        font-size: var(--size-lg);
    }

    & > div > button {
        display: flex;
        padding: 1rem;
        border: none;
        background-color: var(--background);
    }

    & > div > button:first-child > svg {
        opacity: ${props => props.isButtonDisabled ? 0 : 1};
}
`;

const Icon = (props) => (
    <SVG src={props.src} />
)


const Navigation = () => {
    const [path, setPath] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const history = useHistory()
    const location = useLocation()
    const { isHidden, toggleProfileNavigation } = useContext(NavigationContext)


    useEffect(() => {

        let path = location.pathname
        switch (path) {
            case '/signin':
                path = 'Sign In'
                break;
            case '/signup':
                path = 'Sign Up'
                break;
            case '/profile':
                path = 'Hi, Stranger'
                break;
            case '/cart':
                path = 'Cart'
                break;
            case '/checkout':
                path = 'Checkout'
                break;
            default:
                path = 'Menu'
        }
        setPath(path)

        location.pathname === '/'
            ?
            setIsButtonDisabled(true)
            :
            setIsButtonDisabled(false)

    }, [location.pathname])

    const onGoBack = (e) => {
        if (history.length === 0) return
        history.goBack()
        e.preventDefault()
    }

    return (
        <Wrapper isButtonDisabled={isButtonDisabled}>
            <div>

                <button disabled={isButtonDisabled} onClick={(e) => onGoBack(e)}>
                    <Icon src={Arrow_Icon} />
                </button>

                <h2>{path}</h2>

                <button onClick={(e) => toggleProfileNavigation(e)}>
                    <Icon src=
                        {isHidden ?
                            Profile_Icon :
                            Close_Icon
                        }
                    />
                </button>

            </div>
        </Wrapper >
    )
}
export default Navigation