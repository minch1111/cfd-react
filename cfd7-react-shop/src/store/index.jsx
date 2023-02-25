import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducer/authReducer";
import { tagsReducer } from "./reducer/tagsReducer";
import {cartReducer} from "./reducer/cartReducer";


const reducer = combineReducers({
    tags:tagsReducer,
    auth : authReducer,
    cart: cartReducer,
})

const store = createStore(reducer)

export default store