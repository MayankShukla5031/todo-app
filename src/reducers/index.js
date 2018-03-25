import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import combinedReducers from './combinedReducers'

/*
  rootReducer is required to clear all the redux store data once user is logged-out,
  data of one user should not be visible to any other user
*/
const rootReducer = (state, action) => {
  let isReset = false
  if (action.type === 'LOGOUT_SUCCESS') {
    isReset = true
  }
  // whenever we return state value 'undefined', all the reducer will get reset to initial state
  return combinedReducers(isReset ? undefined : state, action)
}

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
