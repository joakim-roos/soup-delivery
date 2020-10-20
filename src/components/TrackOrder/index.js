import React from 'react'
import styled from 'styled-components'
import { baseCardWrapper, baseBackgroundOpacity } from '../../style'

const CardWrapper = styled.div`
    ${baseCardWrapper}
    position: absolute; 
    bottom: 0;
    width: 97%;

    & span {
        display: block;
    }
`;

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;

const StyledUntilDelivery = styled.div`
    text-align: center;
    top: 25%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
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

        <div>
            <UntilDelivery></UntilDelivery>
            <CardWrapper>
                <BackgroundOpacity />
                <span>Order Number: #23954</span>
                <span>Delivery Adress: Lotta Svärds Gränd 3</span>
            </CardWrapper>

        </div>
    )
}

export default TrackOrderPage
