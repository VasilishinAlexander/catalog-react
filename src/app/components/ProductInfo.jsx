import React from 'react'
import ProductRate from './ProductRate'
const ProductInfo = props => {
  const product = props.data;
  return (
    <div className='row productInfoBlock'>
      <div className='col-md-6'>
        <div className='productInfoBlock__img'>
          <img src={product.img} alt=''/>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='productInfoBlock__text'>
          <div className='productInfoBlock__title'>
            {product.title}
          </div>
          <div className='productInfoBlock__description'>
            {product.text}
          </div>
          <div className='productInfoBlock__rate'>
            <span>Рейтинг:</span>
            <ProductRate rate={props.avarageRate} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductInfo