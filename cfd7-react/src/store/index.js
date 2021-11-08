import { applyMiddleware, createStore, compose } from "redux"
import { combineReducers } from "redux"
import { authReducer } from "./reducer/authReducer";
import {courseReducer} from "./reducer/courseReducer"

const reducer = combineReducers({
    auth: authReducer,
    course : courseReducer
})

const thunk = store => next => action => {
    if (typeof action === "function") {
        action(store.dispatch)
    } else {
        next(action)
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose


const store = createStore(reducer, applyMiddleware(thunk))

export default store