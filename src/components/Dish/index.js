import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Info from './Info'
import Customize from './Customize'
import DrinksAndExtras from './DrinksAndExtras'
import AddToCart from './AddToCart'
import { OrderContext } from '../../context'
import { ACTION } from '../../state'


const DishPage = ({ menu }) => {
    const [data, setData] = useState(null)
    const { slug } = useParams()
    const { dispatch } = useContext(OrderContext)
    console.log(data)

    useEffect(() => {
        if (menu?.soups) {
            let data = menu.soups.filter(i => i.uid === slug)
            setData(...data)
        }
    }, [menu, slug])

    useEffect(() => {
        if (data) {
            dispatch(ACTION.set_base_price(data.price))
            dispatch(ACTION.update_name(data.name))
            dispatch(ACTION.set_base_custom(data.ingredients_customizable))
            dispatch(ACTION.set_image(data.images.small))
        }
    }, [data, dispatch])


    if (data === null) return <></>;

    return (
        <>
            <Info
                description={data.description}
                name={data.name}
                imageUrl={data.images.medium}
            />

            <Customize
                custom={data.ingredients_customizable}
            />

            <DrinksAndExtras
                addOnProducts={menu.extras}
            />

            <AddToCart />
        </>
    )
}

export default DishPage