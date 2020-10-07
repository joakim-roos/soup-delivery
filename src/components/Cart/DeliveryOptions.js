import React from 'react'
import styled from 'styled-components'

import { baseCardWrapper, baseButton, baseBackgroundOpacity } from '../../style'

const CardWrapper = styled.section`
     ${baseCardWrapper}
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

const RadioButtonForm = ({ children }) => {
    return (
        <>
            {children}

            <Form>
                <Input
                    type='radio'
                    id='Pick up at restaurant'
                    value='Pick up at restaurant'
                    name='Delivery Option' />
                <Label
                    htmlFor='Pick up at restaurant'>
                    Pick up at restaurant
            </Label>

                <Input
                    type='radio'
                    id='Delivery'
                    value='Delivery'
                    name='Delivery Option' />
                <Label htmlFor='Delivery'>
                    Delivery
            </Label>
            </Form>
        </>
    )
}
const DeliveryOptions = () => {
    return (
        <CardWrapper>
            <BackgroundOpacity />
            <RadioButtonForm>
                Delivery Options
            </RadioButtonForm>
        </CardWrapper >
    )
}

export default DeliveryOptions