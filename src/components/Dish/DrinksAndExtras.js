import React from 'react'
import styled from 'styled-components'
import { baseCardWrapper, baseBackgroundOpacity } from '../../style'

import { Lemon_Juice } from '../../images'
import { AddButton } from '../Buttons'

const CardWrapper = styled.section`
    ${baseCardWrapper}

    & h2 {
        font-weight: 500;
        font-size: var(--size-xl);
    }
`;

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;


const Img = styled.img`
    border-radius: var(--border-rounded-card);
`;

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 1rem;
    
    & div {
        margin-bottom: 2rem;
    }

    & h3 {
        font-weight: 500;
        font-size: var(--size-md);
    }
    & p {
        color: var(--color-gray-light);
        font-size: var(--size-sm);
    }
    & button {
        margin-top: 2.5rem;
    }
`;


const DrinksAndExtras = () => {
    return (
        <CardWrapper>
            <BackgroundOpacity />
            <h2>Drinks and Extras</h2>

            <Card>
                <Img src={Lemon_Juice} alt='' />

                <div>
                    <h3>Lemon Juice</h3>
                    <p>+ 39 kr</p>
                </div>

                <AddButton />
            </Card>

            <Card>
                <Img src={Lemon_Juice} alt='' />
                <div>
                    <h3>Lemon Juice</h3>
                    <p>+ 39 kr</p>
                </div>

                <AddButton />
            </Card>

        </CardWrapper>
    )
}

export default DrinksAndExtras