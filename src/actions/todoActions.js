import * as apiCalls from '../utils/apiCalls'
import * as actionTypes from '../constants/actionTypes'
import { TODO, TODO_SUMMARY } from '../constants/urls'

const getUserId = () => localStorage.getItem('user_id')

export const fetchTodoList = () => dispatch => {
  apiCalls.getCall(TODO)
    .then(res => {
      if (res && res.status === 200) {
        dispatch({
          type: actionTypes.TODO_LIST,
          payload: { data: res.data },
        })
      }
    })
}

export const handleCreateTodo = (data, callback) => dispatch => {
  apiCalls.postCall(TODO, { ...data, user_id: getUserId() })
    .then(res => {
      if (res && res.status === 200) {
        dispatch({
          type: actionTypes.CREATE_TODO,
          payload: { data: res.data },
        })
        callback()
      }
    })
}

export const handleUpdateTodo = (data, callback) => dispatch => {
  apiCalls.putCall(TODO, data)
    .then(res => {
      if (res && res.status === 200) {
        dispatch({
          type: actionTypes.UPDATE_TODO,
          payload: { data: res.data },
        })
        callback()
      }
    })
}

export const fetchTodoDetails = id => dispatch => {
  apiCalls.getCall(TODO, { todo_id: id })
    .then(res => {
      if (res && res.status === 200) {
        dispatch({
          type: actionTypes.TODO_DETAIL,
          payload: { data: res.data },
        })
      }
    })
}

export const handleTodoDelete = todoId => dispatch => {
  apiCalls.deleteCall(TODO, todoId)
    .then(res => {
      if (res && res.status === 200) {
        dispatch({
          type: actionTypes.TODO_DELETE,
          payload: { data: todoId },
        })
      }
    })
}

export const fetchSummary = () => dispatch => {
  apiCalls.getCall(TODO_SUMMARY, {})
    .then(res => {
      if (res && res.status === 200) {
        dispatch({
          type: actionTypes.TODO_SUMMARY,
          payload: { data: res.data },
        })
      }
    })
}
