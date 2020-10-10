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
    
    & > div {
        min-width: 8rem;
        flex: 1;
        align-self: stretch;
        margin-left: 0.5rem;
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

const customToString = (custom) => (
    custom.amount === 0
        ?
        <span> No {custom.name}. </span>
        :
        <span>{custom.amount} Extra {custom.name}. </span>
)

const extrasToString = extras => (
    <span key={extras.name}>
        {extras.name}.
    </span>
)


const Ordered = () => {
    const { state } = useContext(OrderContext)

    return (
        <CardWrapper>
            <BackgroundOpacity />
            <h2>Your Order</h2>
            {state.cart.map(product => (
                <Card key={product.name + 1}>
                    <Img src={Lemon_Juice} alt='' />
                    <div key={product.name + 1}>
                        <h3>{product.name}</h3>
                        <div>
                            {product.custom.map(custom => (
                                customToString(custom)
                            ))}
                            <br />
                            {product.extras.map(extras => (
                                extrasToString(extras)
                            ))}
                        </div>
                    </div>
                    <p>{product.price} kr</p>
                </Card>
            ))}

        </CardWrapper>
    )
}

export default Ordered