import React from 'react'
import Catalog from '../components/Catalog'
import FetchData from '../HOC/FetchData';
import {setProducts} from '../actions/ProductsActions'
import { connect } from 'react-redux';
class CatalogContainer extends React.Component  {
  render () {
    return (
      <div>
        <Catalog items={this.props.products} />
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    products: state.products.products
  }
}
export default FetchData(connect(mapStateToProps)(CatalogContainer), {
  func: setProducts
})