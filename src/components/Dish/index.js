import React from 'react'

import { useParams } from 'react-router-dom'
import menu from '../Menu/menu.json'

import Info from './Info'
import Customize from './Customize'
import DrinksAndExtras from './DrinksAndExtras'
import AddToCart from './AddToCart'

const DishPage = () => {
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