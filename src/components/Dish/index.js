import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Info from './Info'
import Customize from './Customize'
import DrinksAndExtras from './DrinksAndExtras'
import AddToCart from './AddToCart'
import Layout from '../Layout'
import { OrderContext } from '../../context'
import { ACTION } from '../../state'


const DishPage = ({ menu }) => {
    const [data, setData] = useState()
    const { slug } = useParams()
    const { dispatch } = useContext(OrderContext)

    useEffect(() => {
        if (!menu) return;
        let data = menu.soups.filter(i => i.uid === slug)
        setData(data)
    }, [menu, slug])


    useEffect(() => {
        if (!data || data === undefined) return;
        dispatch(ACTION.set_base_price(data[0].price))
        dispatch(ACTION.update_name(data[0].name))
        dispatch(ACTION.set_base_custom(data[0].ingredients_customizable))
        dispatch(ACTION.set_image(data[0].imageUrl))
    }, [data, dispatch])


    if (!data) return null;

    return (
        <Layout>

            <Info
                description={data[0].description}
                name={data[0].name}
                imageUrl={data[0].imageUrl}
            />

            <Customize
                custom={data[0].ingredients_customizable}
            />

            <DrinksAndExtras
                addOnProducts={menu.extras}
            />

            <AddToCart />
        </Layout>
    )
}

export default DishPage