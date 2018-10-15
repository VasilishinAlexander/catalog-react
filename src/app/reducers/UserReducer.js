import {LOGIN, LOGOUT} from '../actions/types'
const UserReducer = (state = {
    token: ''
}, action) => {
    // eslint-disable-next-line
    switch(action.type) {
        case LOGIN:
            state = {
                ...state,
                token: action.payload
            }
            break;
        case LOGOUT: 
            state = {
                ...state,
                token: ''
            }
            break;
    }

    return state;
}

export default UserReducer;