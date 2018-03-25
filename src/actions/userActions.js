import * as apiCalls from '../utils/apiCalls'
import * as actionTypes from '../constants/actionTypes'
import { REGISTER, LOGIN } from '../constants/urls'

export const handleRegisterUser = (data, callback) => {
  apiCalls.postCall(REGISTER, data)
    .then(() => {
      callback()
    })
}

export const handleLogin = data => dispatch => {
  apiCalls.postCall(LOGIN, data)
    .then(res => {
      if (res && res.status === 200) {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          payload: { data: res.data },
        })
        localStorage.setItem('user_id', res.data.user_id)
      }
    })
}

export const handleLogout = () => {
  localStorage.clear()
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  }
}
