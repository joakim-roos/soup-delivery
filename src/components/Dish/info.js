import React from 'react'
import styled from 'styled-components'

import { Tomato_Soup_Info } from '../../images';
import { baseBackgroundOpacity, baseCardWrapper } from '../../style'

const CardWrapper = styled.section`
    ${baseCardWrapper}

    & h2 {
        font-weight: 500;
        margin-bottom: .5rem;
    }

    & p {
        font-size: var(--size-sm);
        letter-spacing: var(--letter-spacing-wider);
        margin-bottom: .5rem;
    }

    & img {
        display: block;
        border-radius: var(--border-rounded);
    }
`;



const Img = () => (
    <img src={Tomato_Soup_Info} alt='' />
)

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;


const Info = () => {
    return (
        <CardWrapper>
            <BackgroundOpacity />
            <h2>Tomato Soup</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop. </p>
            <Img />
        </CardWrapper>

    )
}

export default Info