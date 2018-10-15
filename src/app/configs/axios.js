import axios from 'axios'

export default axios.create({
  baseURL: 'http://smktesting.herokuapp.com/api/',
  static: 'http://smktesting.herokuapp.com/static/'
})