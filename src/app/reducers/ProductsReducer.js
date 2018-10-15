import {SET_PRODUCTS, SET_PRODUCT, NEW_REVIEW} from '../actions/types'
const ProductReducer = (state = {
  products: [],
  product: {}
}, action) => {
  // eslint-disable-next-line
  switch(action.type) {
      case SET_PRODUCTS:
        state = {
          ...state,
          products: action.payload
        }
        break;
        case SET_PRODUCT:
        state = {
          ...state,
          product: action.payload
        }
        break;
        case NEW_REVIEW:
        const payload = action.payload;
        payload.id = state.product.reviews[state.product.reviews.length - 1].id + 1;
        state = {
          ...state,
          product: {
            ...state.product,
            reviews: [...state.product.reviews, action.payload]
          }
        }
        break;
  }

  return state;
}

export default ProductReducer;