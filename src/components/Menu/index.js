import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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

const MenuPage = ({ menu }) => {
    const [isLoading, setIsLoading] = useState(false)

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
        </>
    )
}

export default MenuPage