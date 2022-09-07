import React from 'react'

// component
import Detail from './Detail'

const Favorite = props => {
  const { category, description, id, image, price, rating, title } = props.favorite
  const { rate, count } = rating || {}

  return <Detail product={props.favorite} />
}

export default Favorite
