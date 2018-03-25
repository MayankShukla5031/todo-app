import * as actionTypes from '../constants/actionTypes'

const initialState = {
  todoList: [],
  todoDetails: {},
  todoSummary: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE_TODO:
      return { ...state, todoList: [...state.todoList, payload.data] }
    case actionTypes.TODO_LIST:
      return { ...state, todoList: payload.data }
    case actionTypes.TODO_DETAIL:
      return { ...state, todoDetails: payload.data }
    case actionTypes.TODO_DELETE:
      return {
        ...state,
        todoList: state.todoList.filter(el => (el.todo_id !== payload.data)),
      }
    case actionTypes.UPDATE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(el => (el.todo_id === payload.data.todo_id ?
          payload.data : el)),
      }
    case actionTypes.TODO_SUMMARY:
      return { ...state, todoSummary: payload.data }
    default:
      return state
  }
}
