import React from 'react'
import styled from 'styled-components'

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



const Img = (props) => (
    <img src={props.src} alt='' />
)

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;


const Info = ({ description, name, imageUrl }) => {


    return (
        <CardWrapper>
            <BackgroundOpacity />
            <h2>{name}</h2>
            <p>{description}</p>
            <Img src={imageUrl} />
        </CardWrapper>

    )
}

export default Info