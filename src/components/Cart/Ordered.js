import React, { useContext } from 'react'
import styled from 'styled-components'
import { baseCardWrapper, baseBackgroundOpacity } from '../../style'
import { OrderContext } from '../../context'
import LoadImage, { placeHolder } from '../LoadImage'

const CardWrapper = styled.section`
	${baseCardWrapper}

	& h2 {
		font-weight: 500;
		font-size: var(--size-xl);
	}
`

const BackgroundOpacity = styled.div`
	${baseBackgroundOpacity}
`

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
`

const StyledLoadImage = styled(LoadImage)`
        width: 80px;
        height: 80px;
`;

const customToString = (custom, key) =>
    custom.amount === 0 ? (
        <span key={key}> No {custom.name}.{' '}</span>
    ) : (
            <span key={key}>
                {custom.amount} Extra {custom.name}.{' '}
            </span>
        )

const extrasToString = (extras) => <span key={extras.name}>{extras.name}.{' '}</span>

const Ordered = () => {
    const { state } = useContext(OrderContext)
    console.log(state)
    return (
        <CardWrapper>
            <BackgroundOpacity />
            <h2>Your Order</h2>
            {state.cart.map((product, index) => (
                <Card key={product.name + index}>
                    <LoadImage
                        style={{ width: '80px', height: '80px' }}
                        placeholder={placeHolder(80)}
                        src={product.image_url}
                    />
                    <div key={product.name + 1}>
                        <h3>{product.name}</h3>
                        <div>
                            {product.custom.map((custom, index) =>
                                customToString(custom, index)
                            )}
                            <br />
                            {product.extras.map((extras) =>
                                extrasToString(extras)
                            )}
                        </div>
                    </div>
                    <p>{product.price} kr</p>
                </Card>
            ))}
        </CardWrapper>
    )
}

export default Ordered
