import React from 'react'
import styled from 'styled-components'
import LoadImage, { placeHolder } from '../LoadImage'


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
        width: 100%;
        border-radius: var(--border-rounded);
    }
`;

const Img = (props) => (
    <img src={props.src} alt='' />
)

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;


const Info = (props) => {
    return (
        <CardWrapper>
            <BackgroundOpacity />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <LoadImage
                placeholder={placeHolder(345)}
                src={props.imageUrl}
            />
        </CardWrapper>

    )
}

export default Info