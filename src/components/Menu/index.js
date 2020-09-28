import React, { useState, useEffect } from 'react'
import menu from './menu.json'
import styled from 'styled-components'

import { Tomato_Soup } from '../../images'


const Article = styled.article`
border-radius: ${props => props.theme.border.radius_card};
display: flex;
position: relative;
margin: 10px;
padding: 10px;
`;

const Background = styled.div`
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
    const [orderMenu, setOrderMenu] = useState(null)

    useEffect(() => {
        if (!menu) return
        setOrderMenu(JSON.parse(JSON.stringify(menu)))
    }, [])

    return (
        <>
            {orderMenu && orderMenu.courses.map((course) => (
                <Article key={course.id}>

                    <Background />

                    <Img src={Tomato_Soup} alt=''></Img>

                    <CourseInfo>
                        <h3>
                            {course.name}
                        </h3>
                        <p>
                            {course.main_ingredients}
                        </p>
                        <p>
                            {course.price} kr
                        </p>
                    </CourseInfo>

                </Article>
            ))}
        </>
    )
}

export default MenuPage