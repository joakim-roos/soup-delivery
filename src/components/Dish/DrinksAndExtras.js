import React from 'react'
import styled from 'styled-components'
import { baseCardWrapper, baseBackgroundOpacity } from '../../style'
import { Lemon_Juice } from '../../images'
import { AddButton } from '../Buttons'
import LoadImage, { placeHolder } from '../LoadImage'


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
        min-width: 8rem;
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


const DrinksAndExtras = ({ addOnProducts }) => {

    return (
        <CardWrapper>
            <BackgroundOpacity />
            <h2>Drinks and Extras</h2>

            {addOnProducts.map(product => (
                <Card key={product.id}>
                    <Img src={Lemon_Juice} alt='' />
                    <LoadImage
                        placeholder={placeHolder(85)}
                        src={Lemon_Juice} />

                    <div>
                        <h3>{product.name}</h3>
                        <p>+ {product.price}</p>
                    </div>

                    <AddButton
                        product={product}
                    />
                </Card>
            ))}
        </CardWrapper>
    )
}

export default DrinksAndExtras