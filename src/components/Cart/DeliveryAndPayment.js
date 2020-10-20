import React, { useContext } from 'react'
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

    & p {
        font-size: var(--size-base);
        color: var(--color-gray-light);
        font-weight: 400;
        margin-left: 10px;
        margin-top: 10px;
    }
`;

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;

const Form = styled.form`
    white-space: nowrap;
`;

const OptionsInput = styled.input`
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

const AddressField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & input:first-of-type {
        margin-top: 0.5rem;
    }
    & input {
        border-radius: var(--border-rounded-card);
        margin-bottom: 0.5rem;
        padding: 0.6rem;
        border: 1px solid var(--color-gray-light);
        width: 90%;
        
        ::placeholder {
            font-size: var(--size-md);
            color: var(--color-gray-lighter);
        }
    }
`;

/* const OptionsField = styled.select`
    display: block;
    font-size: 16px;
    color: var(--font-color-secondary);
    line-height: 1.3;
    padding: .6rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid var(--color-gray-light);
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: var(--border-rounded-card);
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;

`; */


const INITIAL_ERROR = {
    errors: {
        street: '',
        postal_code: '',
        phone_number: '',
    }
}
const DeliveryAndPayment = ({ handleAddressSubmit, handlePaymentSubmit }) => {
    const { state, dispatch } = useContext(OrderContext)
    /* const [error, setError] = useState(INITIAL_ERROR) */

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleAddressSubmit(e)
        handlePaymentSubmit(e)
    }

    const handleDeliveryOptions = (e, price) => {
        dispatch(ACTION.set_delivery_option(e.target.value, price))
    }

    /* const PHONE_NUMBER_REG = /^0[7][0-9]{7}$/
    const STREET_REG = /\d/ */

    const handleAddressField = (e) => {
        const { name, value } = e.target;
        /* const { phone_number, postal_code, other_info, street } = state.delivery.address
        const { errors } = error */

        /* switch (name) {

            case 'street':
                errors.street =
                    STREET_REG.test(street)
                        ? 'Address has to include a number.'
                        : ''
                break;

            case 'postal_code':
                errors.postal_code =
                    postal_code && postal_code.length < 5
                        ? 'Your postal code has to be 5 digits.'
                        : ''
                break;

            case 'phone_number':
                errors.phone_number =
                    PHONE_NUMBER_REG.test(phone_number)
                        ? ''
                        : 'Phone number is not valid!'
                break;
            default:
                break;
        }
        setError({ errors }, () => console.log(error)) */
        dispatch(ACTION.set_delivery_address(name, value))
    }

    return (
        <CardWrapper>
            <BackgroundOpacity />
            <h2>Delivery Options</h2>
            <p>Would you like to pick up your order at our restaurant or get it delivered?</p>
            <Form
                id='form'
                onSubmit={(e) => handleFormSubmit(e)}>
                <OptionsInput
                    type='radio'
                    id='Pick up'
                    value='Pick up'
                    name='Delivery Option'
                    defaultChecked={state.delivery.option === 'Pick up'}
                    onChange={(e) => handleDeliveryOptions(e, 0)} />
                <Label
                    htmlFor='Pick up'>
                    Pick up at restaurant
            </Label>

                <OptionsInput
                    type='radio'
                    id='Delivery'
                    value='Delivery'
                    name='Delivery Option'
                    defaultChecked={state.delivery.option === 'Delivery'}
                    onChange={(e) => handleDeliveryOptions(e, 49)}
                />
                <Label htmlFor='Delivery'>
                    Delivery
            </Label>
                {/* <OptionsField>
                    <option>This is a native select element</option>
                    <option>Apples</option>
                    <option>Bananas</option>
                    <option>Grapes</option>
                    <option>Oranges</option>
                </OptionsField> */}
                {state.delivery.option === 'Delivery' ?

                    <AddressField>
                        <input
                            type='text'
                            placeholder='Street'
                            name='street'
                            onChange={e => handleAddressField(e)}
                        />
                        <input
                            type='text'
                            placeholder='Postal Code'
                            name='postal_code'
                            maxLength='5'
                            onChange={e => handleAddressField(e)}
                        />
                        <input
                            type='text'
                            placeholder='Phone Number'
                            name='phone_number'
                            onChange={e => handleAddressField(e)}
                        />
                        <input
                            type='text'
                            placeholder='Other Info'
                            name='other_info'
                            onChange={e => handleAddressField(e)}
                        />

                    </AddressField>
                    : null}
            </Form>
            {state.delivery.option === 'Pick up' ?
                <div>It's ready for pick up in 20 minutes!</div> :
                null}
        </CardWrapper >
    )
}

export default DeliveryAndPayment