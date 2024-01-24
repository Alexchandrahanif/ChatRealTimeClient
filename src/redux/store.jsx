import { createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { UserReducer } from './reducer/user'

let reducer = combineReducers({ UserReducer })

const store = createStore(reducer, applyMiddleware(thunk))

export default store
