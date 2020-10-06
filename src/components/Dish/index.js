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
    const { state, dispatch } = useContext(OrderContext)
    const history = useHistory()


    useEffect(() => {
        if (!menu) return;
        let data = menu.soups.filter(i => i.uid === slug)

        setData(...data)
        dispatch(ACTION.update_name(data[0].name))
        dispatch(ACTION.set_base_price(data[0].price))
    }, [menu, slug, state.cart])


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

            <AddToCart
                handleModal={handleClosedModal} />
        </>
    )
}

export default DishPage