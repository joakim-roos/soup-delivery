import React, { useState, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import Info from './Info'
import Customize from './Customize'
import DrinksAndExtras from './DrinksAndExtras'
import AddToCart from './AddToCart'
import { OrderContext } from '../../context'

import { orderReducer, ACTION } from '../../state'


const INITIAL_ORDER =
{
    name: '',
    custom: [],
    extras: [],
    amount: 1,
    base_price: '',
    price: '',
    uid: ''
}

const DishPage = ({ menu }) => {
    const [order, dispatch] = useReducer(orderReducer, INITIAL_ORDER)
    const [data, setData] = useState()
    const { slug } = useParams()

    useEffect(() => {
        if (!menu) return;
        const data = menu.soups.filter(i => i.uid === slug)
        setData(...data)
        dispatch(ACTION.update_name(data[0].name))
        dispatch(ACTION.set_base_price(data[0].price))
    }, [menu, slug])

    if (!data) return null;
    return (
        <>
            <OrderContext.Provider value={{ order, dispatch }}>
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