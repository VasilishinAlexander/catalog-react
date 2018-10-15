import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import user from "./reducers/UserReducer";
import products from "./reducers/ProductsReducer";
export default createStore(
    combineReducers({
        user,
        products
    }),
    applyMiddleware(thunk)
);