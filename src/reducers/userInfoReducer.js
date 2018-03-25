import * as actionTypes from '../constants/actionTypes'

const isLoggedIn = !!localStorage.getItem('user_id')

const initialState = {
  isLoggedIn,
  userInfo: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, userInfo: payload.data }
    case actionTypes.LOGOUT_SUCCESS:
      return { ...initialState, isLoggedIn: false }
    default:
      return state
  }
}
