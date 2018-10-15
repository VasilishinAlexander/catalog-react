import React from 'react'
import {Link} from 'react-router-dom'
const ProductCard = props => (
  <div className='productCard'>
    <div className='productCard__img'>
      <img src={props.img} alt=''/>
    </div>
    <div className='productCard__title'>
      <Link to='/product'>{props.title}</Link>
    </div>
    <div className='productCard__action'>
      <Link to={`/product/${props.id}`} className='button-primary'>More</Link>
    </div>
  </div>
)
export default ProductCard