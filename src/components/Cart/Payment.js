import React from 'react'
import styled, { css } from 'styled-components'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs'
import { baseCardWrapper, baseBackgroundOpacity } from '../../style'
import images from 'react-payment-inputs/images';

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

const CardNumberWrapper = styled.div`
  background-color: white;
  border-radius: var(--border-rounded-card);
  border: 1px solid var(--color-gray-light);
  padding: 0.5rem;
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
`;

const Payment = () => {
    const { meta, wrapperProps, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs()

    const style = {
        fieldWrapper: {
            base: css`
                background: transparent;
            `,
        },
        inputWrapper: {
            base: css`
            display: flex;
            flex-wrap: wrap;
            height: 100px;
            justify-content: center;
            border: none;
            border-radius: var(--border-rounded-card);
            background: transparent;
            box-shadow: none;
            `,
            errored: css`
              border-color: red;
            `,
        },
        input: {
            base: css`
              border-radius: var(--border-rounded-card);
            `,

            expiryDate: css`
                border: 1px solid var(--color-gray-light);
                flex-basis: 30%;
                margin-right: 0.5rem;
                padding: 0.5rem;
            `,

            cardNumber: css`
            `,

            cvc: css`
                flex-basis: 30%;
                padding: 0.5rem;
                border: 1px solid var(--color-gray-light);
            `,
            focused: css`
                border-color: blue;
            `,
        }
    }


    const handleChangeCardNumber = () => (console.log('sss'))
    const handleChangeExpiryDate = () => (console.log('ss'))
    const handleChangeCVC = () => (console.log('sssss'))

    const handleSubmit = (e) => {
        e.preventDefault()
        return (
            console.log(e.target.value)
        )

    }

    return (
        <>
            <CardWrapper>
                <BackgroundOpacity />
                <h2>Payment</h2>
                <form
                    id='form'
                    onSubmit={(e) => handleSubmit(e)}>
                    <PaymentInputsWrapper styles={style} {...wrapperProps}>

                        <CardNumberWrapper>
                            <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} />
                            <svg {...getCardImageProps({ images })} />
                        </CardNumberWrapper>
                        <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} />
                        <input {...getCVCProps({ onChange: handleChangeCVC })} />

                    </PaymentInputsWrapper>
                </form>
            </CardWrapper>
        </>
    )
}

export default Payment