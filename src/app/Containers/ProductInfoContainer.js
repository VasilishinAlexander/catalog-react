import React from 'react'
import ProductInfo from '../components/ProductInfo'
import ProductReviewList from '../components/ProductReviewList'
import NewReviewContainer from './NewReviewContainer'
import FetchData from '../HOC/FetchData'
import {setProduct} from '../actions/ProductsActions'
import {connect} from 'react-redux'
import { throws } from 'assert';
class ProductInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avarageRate: 0
    }
  }
  calculateAvarageRate () {
    if (!this.props.product.reviews) return this.avarageRate = 0;
    const reviews = this.props.product.reviews;
    const avarageRate = reviews.reduce((avarage, current) => {
      return avarage + current.rate
    }, 0) / reviews.length;
    this.setState({
      avarageRate
    })
  }
  componentWillMount () {
    this.calculateAvarageRate();
  }
  render () {
    return (
      <div className='container'>
        <div className='productInfoContainer'>
          <ProductInfo data={this.props.product} avarageRate={this.state.avarageRate}/>
          {this.props.auth && (<NewReviewContainer id={this.props.product.id} token={this.props.token} />)}
          <ProductReviewList reviews={this.props.product.reviews || []} />
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    product: state.products.product,
    auth: !!state.user.token,
    token: state.user.token
  }
}
export default FetchData(connect(mapStateToProps)(ProductInfoContainer), {
  func: setProduct,
  getParam: 'id'
})