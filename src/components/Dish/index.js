import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Info from './Info'
import Customize from './Customize'
import DrinksAndExtras from './DrinksAndExtras'
import AddToCart from './AddToCart'
import { OrderContext } from '../../context'


const INITIAL_ORDER = {
    order: [
        {
            name: null,
            custom: null,
            extras: null,
            total: null,
        }
    ]
}

const DishPage = ({ menu }) => {
    const [order, setOrder] = useState(INITIAL_ORDER)
    const { slug } = useParams()
    if (!menu) return null

    const addToOrder = add => setOrder({ ...order, add })

    let soupWithSlug = menu.soups.filter(i => i.uid === slug)
    const { description, name, imageUrl } = soupWithSlug[0]

    return (
        <>
            <OrderContext.Provider value={{ ...order, addToOrder }}>

                <Info
                    description={description}
                    name={name}
                    imageUrl={imageUrl}
                />

                <Customize />

                <DrinksAndExtras />

                <AddToCart />

            </OrderContext.Provider>
        </>
    )
}

export default DishPage