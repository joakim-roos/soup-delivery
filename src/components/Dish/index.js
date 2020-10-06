import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Info from './Info'
import Customize from './Customize'
import DrinksAndExtras from './DrinksAndExtras'
import AddToCart from './AddToCart'
import { OrderContext } from '../../context'
import { INITIAL_ORDER } from '../../constants/state'
import { orderReducer, ACTION } from '../../state'
import Modal from './Modal'


const DishPage = ({ menu }) => {
    const [data, setData] = useState()
    const { slug } = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { state, dispatch } = useContext(OrderContext)

    useEffect(() => {
        if (!menu) return;
        let data = menu.soups.filter(i => i.uid === slug)

        setData(...data)
        dispatch(ACTION.update_name(data[0].name))
        dispatch(ACTION.set_base_price(data[0].price))
    }, [menu, slug, state.cart])


    useEffect(() => {
        state.cart.length === 0
            ?
            setIsModalOpen(false)
            :
            setIsModalOpen(true)
    }, [state.cart])


    const handleModal = () => (
        setIsModalOpen(!isModalOpen)
    )

    if (!data) return null;
    return (
        <>

            <Modal
                handleModal={handleModal}
                isModalOpen={isModalOpen}
            />

            <Info
                description={data.description}
                name={data.name}
                imageUrl={data.imageUrl}
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