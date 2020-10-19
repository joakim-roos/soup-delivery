import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import CartPanel from './CartPanel'
import * as ROUTES from '../../constants/routes'
import Layout from '../Layout'
import { Tomato_Soup, Right_Arrow } from '../../images'
import { baseBackgroundOpacity, baseCardWrapper } from '../../style'
import { OrderContext, AuthUserContext, ModalContext } from '../../context'

const Article = styled.article`
    ${baseCardWrapper}
    display: flex;
`;

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;

const Img = styled.img`
    border-radius: var(--border-rounded-card);
`;


const StyledLink = styled(Link)`
    position: absolute; 
    right: 10px;
    bottom: 12px;
`;

const StyledSVG = styled(SVG)`
    display: block;
`;

const CourseInfo = styled.div`
    margin: 5px 0 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

& h3 {
    font-weight: 500;
    font-size: var(--size-md);
}

& p:first-of-type {
    font-size: var(--size-sm);
    color: var(--color-gray-light);
    margin-bottom: 2rem;
}

& p:last-of-type {
    font-size: var(--size-md);
    color: var(--font-color-secondary);
}
`;

const MenuPage = ({ menu }) => {
    const [isCartVisible, setIsCartVisible] = useState(false)
    const { state } = useContext(OrderContext)
    const { toggleModal } = useContext(ModalContext)
    const history = useHistory()
    const authUser = useContext(AuthUserContext)

    useEffect(() => {
        state.cart.length === 0
            ?
            setIsCartVisible(false)
            :
            setIsCartVisible(true)
    }, [state.cart.length])

    useEffect(() => {
        if (state.cart.length >= 1 && authUser) toggleModal(false)
    }, [authUser, state.cart.length, toggleModal])

    const onViewCartOnClick = () => {
        state.cart.length >= 1 && authUser
            ?
            history.push(ROUTES.CART)
            : toggleModal(true)
    }


    if (!menu) return null;
    return (
        <Layout>

            {menu.soups.map((soup) => (
                <Article key={soup.id}>

                    <BackgroundOpacity />

                    <Img src={Tomato_Soup} alt=''></Img>

                    <CourseInfo>
                        <h3>
                            {soup.name}
                        </h3>

                        <p>
                            {soup.keywords}
                        </p>

                        <p>
                            {soup.price} kr
                        </p>
                        <StyledLink to={`/menu/${soup.uid}`}>
                            <StyledSVG src={Right_Arrow} />
                        </StyledLink>
                    </CourseInfo>

                </Article>
            ))}

            {isCartVisible
                ?
                <CartPanel
                    cart={state.cart}
                    onButtonClick={onViewCartOnClick} />
                :
                null
            }

        </Layout>
    )
}

export default MenuPage