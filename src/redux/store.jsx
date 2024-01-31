import { createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { UserReducer } from './reducer/user'
import { ContactReducer } from './reducer/contact'
import { ChatReducer } from './reducer/chat'
import { GroupChatReducer } from './reducer/groupChat'
import { GroupReducer } from './reducer/group'

let reducer = combineReducers({
  UserReducer,
  ContactReducer,
  ChatReducer,
  GroupChatReducer,
  GroupReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
