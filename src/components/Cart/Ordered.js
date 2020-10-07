import React, { useContext } from 'react'
import styled from 'styled-components'
import { baseCardWrapper, baseBackgroundOpacity } from '../../style'
import { OrderContext } from '../../context'
import { Lemon_Juice } from '../../images'

const CardWrapper = styled.section`
    ${baseCardWrapper}

    & h2 {
        font-weight: 500;
        font-size: var(--size-xl);
    }
`;
const Img = styled.img`
    border-radius: var(--border-rounded-card);
`;
const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 1rem;
    
    & div {
        min-width: 8rem;
        margin-right: 1rem;
    }

    & h3 {
        width: 150px;
        font-weight: 500;
        font-size: var(--size-md);
    }
    & span {
        color: var(--color-gray-light);
        font-size: var(--size-xs);
    }

    & > :last-child {
        margin-top: 3.5rem;
        font-size: var(--size-base);
        color: var(--font-color-secondary);
    }
`;
const Ordered = () => {
    const { state, dispatch } = useContext(OrderContext)



    const customToString = (custom) => {
        if (custom.amount === 0) {
            return (
                <span>No {custom.name}, </span>
            )
        } else return (
            <span>{custom.amount} Extra {custom.name}, </span>
        )
    }

    return (
        <CardWrapper>
            <BackgroundOpacity />

            {state.cart.map(product => (
                <Card>
                    <Img src={Lemon_Juice} alt=' ' />
                    <div>
                        <h3>{product.name}</h3>

                        {product.custom.map(custom => {
                            return customToString(custom)
                        })}

                        {product.extras.map(extras => (
                            <p>{extras.name}</p>
                        ))}
                    </div>
                    <p>{product.price} kr</p>
                </Card>
            ))}
        </CardWrapper>
    )
}

export default Ordered