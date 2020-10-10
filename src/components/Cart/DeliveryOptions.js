import React, { useReducer, useContext, useState } from 'react'
import styled from 'styled-components'
import { OrderContext } from '../../context'

import { baseCardWrapper, baseButton, baseBackgroundOpacity } from '../../style'

import { ACTION } from '../../state'

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



const Form = styled.form`
    display: flex;
     justify-content: space-between;
     white-space: nowrap;
`;

const Input = styled.input`
    opacity: 0; 
    position: fixed; 
    width: 0;

    :checked + label {
        transition: 0.1s ease-in-out;
        background-color: var(--color-yellow);
        color: var(--font-color-secondary);
    }
`;

const Label = styled.label`
    ${baseButton}
    width: auto;
    text-align: center;
    border-radius: var(--border-rounded-button);
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 14px;
    margin: 10px;
    height: 40px;
    color: var(--color-gray-lighter);
    
  
`;

const RadioButtonForm = ({ children, handleFormSubmit }) => {
    /* const [state, setState] = useState({ selectedOption: null }) */
    const { state, dispatch } = useContext(OrderContext)

    console.log(state.delivery)
    const handleSubmit = (e) => {
        e.preventDefault()
        /* handleFormSubmit(state.selectedOption) */
    }

    const handleOptionsChange = (e, price) => {
        dispatch(ACTION.set_delivery_option(e.target.value, price))
    }

    return (
        <>
            {children}

            <Form
                id='radioform'
                onSubmit={(e) => handleSubmit(e)}>
                <Input
                    type='radio'
                    id='Pick up'
                    value='Pick up'
                    name='Delivery Option'
                    defaultChecked={state.delivery.option === 'Pick up'}
                    onChange={(e) => handleOptionsChange(e, 0)} />
                <Label
                    htmlFor='Pick up'>
                    Pick up at restaurant
            </Label>

                <Input
                    type='radio'
                    id='Delivery'
                    value='Delivery'
                    name='Delivery Option'
                    defaultChecked={state.delivery.option === 'Delivery'}
                    onChange={(e) => handleOptionsChange(e, 49)}
                />
                <Label htmlFor='Delivery'>
                    Delivery
            </Label>
            </Form>
        </>
    )
}
const DeliveryOptions = ({ handleFormSubmit }) => {
    return (
        <CardWrapper>
            <h2>Delivery Options</h2>
            <BackgroundOpacity />
            <RadioButtonForm
                handleFormSubmit={handleFormSubmit} />
        </CardWrapper >
    )
}

export default DeliveryOptions