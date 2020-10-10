import React from 'react'
import styled, { css } from 'styled-components'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs'
import images from 'react-payment-inputs/images';
import { baseCardWrapper, baseButton } from '../../style'
import Address from './Adress'
import PaymentPanel from './PaymentPanel'

const CardWrapper = styled.section`
    ${baseCardWrapper}
    background: pink;
        & h2 {
        font-weight: 500;
        font-size: var(--size-xl);
        }
`;

const SubmitButton = styled.button`
    ${baseButton}
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
            border: none;
            padding: 0 0.5rem;
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
                border: 1px solid var(--color-gray-light);
                padding: 0.5rem;
            `,
            cardNumber: css`
                flex-basis: 70%;
            `,
            expiryDate: css`
                flex-basis: 30%;
                margin-left: 2rem;
                margin-right: 1rem;
            `,
            cvc: css`
                flex-basis: 30%;
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
                <h2>Payment</h2>
                <form
                    id='payment'
                    onSubmit={(e) => handleSubmit(e)}>
                    <PaymentInputsWrapper styles={style} {...wrapperProps}>
                        <svg {...getCardImageProps({ images })} />
                        <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} />
                        <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} />
                        <input {...getCVCProps({ onChange: handleChangeCVC })} />
                    </PaymentInputsWrapper>
                </form>
            </CardWrapper>
        </>
    )
}

const CheckoutPage = () => {
    return (
        <>
            <Address></Address>
            <Payment></Payment>
            <PaymentPanel></PaymentPanel>
        </>
    )
}

export default CheckoutPage