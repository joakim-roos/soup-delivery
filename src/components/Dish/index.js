import React from 'react'

import { useParams } from 'react-router-dom'
import menu from '../Menu/menu.json'

import Info from './Info'
import Customize from './Customize'
import DrinksAndExtras from './DrinksAndExtras'
import AddToCart from './AddToCart'
const DishPage = () => {
    const { dish } = menu
    const { slug } = useParams()


    const filtered = dish.filter(dish => dish.uid === slug)

    return (
        <>
            <Info />
            <Customize />
            <DrinksAndExtras />
            <AddToCart />
        </>
    )
}

export default DishPage