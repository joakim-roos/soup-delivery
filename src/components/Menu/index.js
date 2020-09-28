import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import menu from './menu.json'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { Tomato_Soup, Right_Arrow } from '../../images'


const Article = styled.article`
    border-radius: ${props => props.theme.border.radius_card};
    display: flex;
    position: relative;
    margin: 10px;
    padding: 10px;
`;

const BackgroundOpacity = styled.div`
    background-color: ${props => props.theme.color.background};
    border-radius: ${props => props.theme.border.radius_card};
    opacity: 0.8;
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
`;

const Img = styled.img`
    border-radius: ${props => props.theme.border.radius_card};
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
    font-size: ${props => props.theme.text.size_md};
}
& p:first-of-type {
    font-size: ${props => props.theme.text.size_sm};
    color: ${props => props.theme.color.font_Grey_Secondary};
    margin-bottom: 2rem;
}
& p:last-of-type {
    font-size: ${props => props.theme.text.size_md};
    color: ${props => props.theme.color.font_Grey_Primary};
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