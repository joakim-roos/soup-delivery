import React from 'react'
import styled from 'styled-components'
import { baseCardWrapper } from '../../style'

const CardWrapper = styled.section`
    ${baseCardWrapper}
    & h2 {
        font-weight: 500;
        font-size: var(--size-xl);
        }
`;

const Address = () => {
    return (
        <CardWrapper>
            <h2>Delivery</h2>
        </CardWrapper>
    )
}

export default Address