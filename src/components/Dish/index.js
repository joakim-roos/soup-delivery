import React from 'react'


import { useParams } from 'react-router-dom'
import menu from '../Menu/menu.json'

import Info from './info'

const DishPage = () => {
  const { dish } = menu
  const { slug } = useParams()


  const filtered = dish.filter(dish => dish.uid === slug)
  console.log(filtered)
  return (
    <div>
      <Info />
    </div>
  )
}

export default DishPage