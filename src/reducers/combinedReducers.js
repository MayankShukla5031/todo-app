import { combineReducers } from 'redux'
import userInfoReducer from './userInfoReducer'
import todoListReducer from './todoListReducer'

const combinedReducers = combineReducers({
  userInfoReducer,
  todoListReducer,
})

export default combinedReducers
