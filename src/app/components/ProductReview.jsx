import React from 'react'
import ProductRate from './ProductRate'
import {formatDate} from '../tools/dateformat'
const ProductReview = props => (
  <div className='product-review'>
    <div className='d-flex justify-content-between'>
      <div className='product-review__name'>{props.created_by.username}</div>
      <div className='product-review__date'>{formatDate(props.created_at)}</div>
    </div>
    <div className='product-review__text'>
      {props.text}
    </div>
    <div className='product-review__rate'>
      <ProductRate rate={props.rate} />
    </div>
  </div>
)

export default ProductReview