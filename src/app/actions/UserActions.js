import axios from '../configs/axios'
import {LOGIN, LOGOUT} from './types'
export function signup (credentials) {
    return dispatch => {
        return axios.post('/register/', credentials)
    }
}
export function login (credentials) {
    return dispatch => {
        return axios.post('/login/', credentials).then(response => {
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                dispatch({
                    type: LOGIN,
                    payload: response.data.token
                })
            }
            return response;
        })
    }
}
export function initializeUser () {
    return {
        type: LOGIN,
        payload: localStorage.getItem('token')
    }
}
export function logout () {
    localStorage.setItem('token', '');
    return {
        type: LOGOUT
    }
}