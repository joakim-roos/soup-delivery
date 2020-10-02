import React, { useState, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import Info from './Info'
import Customize from './Customize'
import DrinksAndExtras from './DrinksAndExtras'
import AddToCart from './AddToCart'
import { OrderContext } from '../../context'
import { includesInArray } from '../../helpers'

const INITIAL_ORDER =
{
    name: '',
    custom: [],
    extras: [],
    total: '',
    uid: ''
}

function filterOutByIndex(arr, value) {
    return arr.filter((val, i) => i !== value)
}
function filterOutByValue(arr, value) {
    return arr.filter(obj => value !== obj.id)
}
function findIndexInArray(arr, value) {
    return arr.findIndex(obj => value === obj.id)
}

const reducer = (state, action) => {
    let arr;
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                custom: [...state.custom, action.payload]
            }

        case 'decrement':
            /* let index = state.custom.findIndex(obj => action.payload === obj.id) */
            let index = findIndexInArray(state.custom, action.payload)
            /* arr = state.custom.filter((val, i) => i !== index); */
            arr = filterOutByIndex(state.custom, index)
            return {
                ...state,
                custom: [...arr]
            }

        case 'add':
            return {
                ...state,
                extras: [...state.extras, action.payload]
            }

        case 'remove':
            /* arr = state.extras.filter(obj => action.payload !== obj.id) */
            arr = filterOutByValue(state.extras, action.payload)
            return {
                ...state,
                extras: [...arr]
            }

        default:
            throw new Error()
    }
}

const DishPage = ({ menu }) => {
    const [order, dispatch] = useReducer(reducer, INITIAL_ORDER)
    const [data, setData] = useState()
    const { slug } = useParams()

    useEffect(() => {
        if (!menu) return;
        const data = menu.soups.filter(i => i.uid === slug)
        setData(...data)
    }, [menu, slug])

    const handleIncrement = ingredient => {
        dispatch({
            type: 'increment',
            payload: ingredient
        })
    }
    const handleDecrement = ingredient => {
        dispatch({
            type: 'decrement',
            payload: ingredient.id
        })
    }

    const handleAdd = (product) => {
        const includes = includesInArray(order.extras, product.id)

        includes ?
            dispatch({
                type: 'remove',
                payload: product.id
            }) :
            dispatch({
                type: 'add',
                payload: product
            })
    }


    if (!data) return null;

    return (
        <>
            <OrderContext.Provider value={{ order, handleIncrement, handleDecrement, handleAdd }}>
                <Info
                    description={data.description}
                    name={data.name}
                    imageUrl={data.imageUrl}
                />

                <Customize
                    custom={data.ingredients_customizable}
                />

                <DrinksAndExtras
                    addOnProducts={menu.extras} />
                <AddToCart />
            </OrderContext.Provider>
        </>
    )
}

export default DishPage