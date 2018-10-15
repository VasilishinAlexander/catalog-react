import React from 'react'
import ProductCard from './ProductCard'
const Catalog = props => (
  <div className='catalog-list container'>
    <div className='row'>
      { props.items.map(item => (<div className='col-md-3 col-sm-6 col-12' key={item.id}><ProductCard {...item} /></div>)) }
    </div>
  </div>
)
export default Catalog