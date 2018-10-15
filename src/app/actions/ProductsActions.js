import axios from '../configs/axios';
import {SET_PRODUCTS, SET_PRODUCT, NEW_REVIEW} from './types'
export function setProducts () {
  return dispatch => {
    return axios.get('/products').then(response => {
      if (response.status === 500 || response.data.success === false) throw new Error(response.data.message || 'Server Error')
      response.data.forEach(product => {
        product.img = axios.defaults.static + product.img;
      })
      dispatch({
        type: SET_PRODUCTS,
        payload: response.data
      })
      return response;
    })
  }
}
export function setProduct (id) {
  return dispatch => {
    let product = {};
    return axios.get('/products').then((response) => {
      if (response.status === 500 || response.data.success === false) throw new Error(response.data.message || 'Server Error')
      const foundById = response.data.find(p => p.id === +id);
      if (!foundById) throw new Error('Product not found')
      Object.assign(product, foundById);
      return axios.get('/reviews/' + id)
    }).then(response => {
      if (response.status === 500 || response.data.success === false) throw new Error(response.data.message || 'Server Error')
      product.img = axios.defaults.static + product.img;
      product.reviews = response.data;
      dispatch({
        type: SET_PRODUCT,
        payload: product
      })
    })
  }
}
export function newReview (payload, id, token) {
  
  return dispatch => {
    return axios.post('/reviews/' + id, payload, {
      headers: {Authorization: `Token ${token}`}
    }).then(response => {
      if (response.data.success === false) throw new Error('Cant add new review not, try later')
      dispatch({
        type: NEW_REVIEW,
        payload: {
          created_at: new Date(),
          created_by: {
            username: 'user'
          },
          ...payload
        }
      })
    })
  }
}