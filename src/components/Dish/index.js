import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Info from './Info'
import Customize from './Customize'
import DrinksAndExtras from './DrinksAndExtras'
import AddToCart from './AddToCart'
import { OrderContext } from '../../context'
import { ACTION } from '../../state'
import Modal from './Modal'
import * as ROUTES from '../../constants/routes'

const DishPage = ({ menu }) => {
    const [data, setData] = useState()
    const { slug } = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { dispatch } = useContext(OrderContext)
    const history = useHistory()

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

    const handleClosedModal = () => {
        setIsModalOpen(true)
    }

    const handleOpenModal = () => {
        setIsModalOpen(false)
        history.push(ROUTES.MENU)
    }

    if (!data) return null;

    return (
        <>
            <Modal
                handleModal={handleOpenModal}
                isModalOpen={isModalOpen}
            />

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

            <AddToCart
                handleModal={handleClosedModal}
                isModalOpen={isModalOpen}

            />

        </>
    )
}

export default DishPage