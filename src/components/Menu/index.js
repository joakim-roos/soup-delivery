import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import menu from './menu.json'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { Tomato_Soup, Right_Arrow } from '../../images'
import { baseBackgroundOpacity, baseCardWrapper } from '../../style'

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

const MenuPage = () => {
    const [orderMenu, setOrderMenu] = useState()


    useEffect(() => {
        if (!menu) return
        setOrderMenu(JSON.parse(JSON.stringify(menu)))
    }, [])

    return (
        <>
            {orderMenu && orderMenu.dish.map((dish) => (
                <Article key={dish.id}>

                    <BackgroundOpacity />

                    <Img src={Tomato_Soup} alt=''></Img>

                    <CourseInfo>
                        <h3>
                            {dish.name}
                        </h3>

                        <p>
                            {dish.main_ingredients}
                        </p>

                        <p>
                            {dish.price} kr
                        </p>
                        <StyledLink to={`/${dish.uid}`}>
                            <StyledSVG src={Right_Arrow} />
                        </StyledLink>
                    </CourseInfo>

                </Article>
            ))}
        </>
    )
}

export default MenuPage