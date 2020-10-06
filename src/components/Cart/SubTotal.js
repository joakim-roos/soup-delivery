import React from 'react'
import styled from 'styled-components'

import { baseCardWrapper, baseBackgroundOpacity } from '../../style'

const CardWrapper = styled.section`
    ${baseCardWrapper}

    & div {
        display: flex;
        justify-content: space-between;
    }

    & p {
        font-size: var(--size-sm);
        color: var(--color-gray-light);
        font-weight: 400;
    }

    & div:last-of-type p {
        font-size: var(--size-base);
        color: var(--font-color-secondary);
        font-weight: 500;
    }
`;

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;


const SubTotal = () => {
    return (
        <CardWrapper>
            <BackgroundOpacity />
            <div>
                <p>Subtotal:</p>
                <p>288 kr</p>
            </div>
            <div>
                <p>Delivery fee:</p>
                <p>49 kr</p>
            </div>
            <div>
                <p>Total:</p>
                <p>337 kr</p>
            </div>
        </CardWrapper>
    )
}

export default SubTotal