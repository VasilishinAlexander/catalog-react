import React from 'react'
import ProductReview from './ProductReview'

const ProductReviewList = props => (
  <div className='product-review-list'>
    <div className='product-review-list__title'>Отзывы ({props.reviews.length})</div>
    <div className='row'>
      {props.reviews.map(review => (
        <div className='col-md-4 col-sm-6 col-12' key={review.id}>
          <ProductReview {...review}/>
        </div>
      ))}
    </div>
  </div>
)
export default ProductReviewList;