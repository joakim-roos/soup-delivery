import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { useHistory, useLocation } from 'react-router-dom'
import { Arrow_Icon, Profile_Icon, Close_Icon } from '../../images'

import NavigationContext from './Navigation.Context'


const Wrapper = styled.header`
    height: 57px;
    width: 100vw;
    overflow: hidden;
    border-bottom: 1px solid ${props => props.theme.color.font_Secondary};

& > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
 
& h2 {
    text-align: center;
    font-size: ${props => props.theme.text.size_lg};
}

& > div > button {
    display: flex;
    padding: 1rem;
    border: none;
    background-color: ${props => props.theme.color.background}
}

& > div > button:first-child > svg {
    opacity: ${props => props.isButtonDisabled ? 0 : 1};
}

`;

const Icon = (props) => (
    <SVG src={props.icon} />
)

const Navigation = () => {
    const [path, setPath] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const history = useHistory()
    const location = useLocation()
    const { isHidden, toggleProfileNavigation } = useContext(NavigationContext)

    useEffect(() => {

        let path = location.pathname

        path === '/'
            ?
            setIsButtonDisabled(true)
            :
            setIsButtonDisabled(false)


        switch (path) {
            case '/':
                path = 'Menu'
                break;
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
                path = 'Error'
        }
        setPath(path)


    }, [location])

    const onGoBack = (e) => {
        if (history.length === 0) return
        history.goBack()
        e.preventDefault()
    }

    return (
        <Wrapper isButtonDisabled={isButtonDisabled}>
            <div>

                <button disabled={isButtonDisabled} onClick={(e) => onGoBack(e)}>
                    <Icon icon={Arrow_Icon} />
                </button>

                <h2>{path}</h2>

                <button onClick={(e) => toggleProfileNavigation(e)}>
                    <Icon icon=
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