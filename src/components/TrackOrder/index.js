import React from 'react'
import styled from 'styled-components'
import { baseCardWrapper, baseBackgroundOpacity } from '../../style'

const CardWrapper = styled.div`
    ${baseCardWrapper}
    padding: 1rem;
    & span {
        display: block;
    }
`;

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;

const StyledUntilDelivery = styled.div`
    width: 100%;
    margin: auto;
    display: inline-block;
    text-align: center;
    margin-top: 200px;

    & div:first-of-type {
        font-size: 70px;
        font-weight: 800;
    }
    & span {
        font-size: 20px; 
        font-weight: 800;
        white-space: nowrap;
    }
`;

const UntilDelivery = () => {
    return (
        <StyledUntilDelivery>
            <div>37</div>
            <span>minutes until delivery</span>
        </StyledUntilDelivery>
    )
}

const TrackOrderPage = () => {
    return (

        <div style={{ width: '100%' }}>
            <CardWrapper>
                <BackgroundOpacity />
                <span>Order Number: #23954</span>
                <span>Delivery Adress: Lotta Svärds Gränd 3</span>
            </CardWrapper>
            <UntilDelivery />
        </div>
    )
}

export default TrackOrderPage
