import React, { useState, useEffect, useContext, useMemo } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { Tomato_Soup, Right_Arrow } from '../../images'
import { baseBackgroundOpacity, baseCardWrapper } from '../../style'
import { ProceedButton } from '../Buttons'
import * as ROUTES from '../../constants/routes'

import { OrderContext } from '../../context'
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

const Panel = styled.div`
    background-color: var(--background);
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;

    & div {
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
    }
    & div p:first-of-type {
        font-weight: 400;
        margin-bottom: 0.5rem;
        font-size: var(--size-sm);
        color: var(--color-gray-lighter);
    }

    & div p:last-of-type {
        font-weight: 500;
        font-size: var(--size-sm);
        color: var(--font-color-secondary);
    }
`;

const Cart = ({ cart }) => {
    const history = useHistory()

    const onClickHandler = () => {
        history.push(ROUTES.CART)
    }
    return (
        <Panel>
            <div>
                <TotalPrice cart={cart} />
            </div>
            <ProceedButton
                primary
                onClick={() => onClickHandler()}
            >
                View Cart
            </ProceedButton>
        </Panel>
    )
}

function TotalPrice({ cart }) {
    const calculatedPrice = useMemo(() => {
        let arr = [];
        for (let i = 0; i < cart.length; i++) {
            arr.push(parseInt(cart[i].price))
        }
        return arr.reduce((a, b) => a + b, 0)
    }, [cart])

    return (
        <>
            <p>You have {cart.length} soups in the cart.</p>
            <p>Total: {calculatedPrice} kr</p>
        </>
    )
}



const MenuPage = ({ menu }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const { state, dispatch } = useContext(OrderContext)

    useEffect(() => {
        state.cart.length === 0
            ?
            setIsVisible(false)
            :
            setIsVisible(true)
    }, [state.cart.length])

    useEffect(() => {
        console.log('MENU RAN')
    }, [])

    if (!menu) return null;



    return (
        <>
            {isLoading && <div>Hold on...</div>}

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
                        <StyledLink to={`/${soup.uid}`}>
                            <StyledSVG src={Right_Arrow} />
                        </StyledLink>
                    </CourseInfo>

                </Article>
            ))}

            {isVisible
                ?
                <Cart cart={state.cart} />
                :
                null
            }

        </>
    )
}

export default MenuPage