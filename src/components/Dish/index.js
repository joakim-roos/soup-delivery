import React from 'react'
import { useParams } from 'react-router-dom'
import menu from '../Menu/menu.json'
const DishPage = () => {
  const { dish } = menu
  const { slug } = useParams()


  const filtered = dish.filter(dish => dish.uid === slug)
  console.log(filtered)
  return (
    <div>DishPage: {slug} and {filtered[0].name}</div>
  )
}

export default DishPage