import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoList from '../components/todoList'
import '../css/todoList.css'

import * as todoActions from '../actions/todoActions'

class TodoListContainer extends React.Component {
  state = {
    openConfirmationBox: false,
  }

  componentDidMount() {
    this.props.fetchTodoList()
  }

  handleTodoDelete = todoId => {
    this.props.handleTodoDelete(todoId)
  }

  render() {
    return (
      <div>
        <TodoList
          todoList={this.props.todoList}
          handleTodoDelete={this.handleTodoDelete}
          openConfirmationBox={this.state.openConfirmationBox}
        />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  todoList: store.todoListReducer.todoList,
})

const mapDispatchToProps = dispatch => ({
  // handleLogout: () => dispatch(loginActions.doLogout()),
  fetchTodoList: () => dispatch(todoActions.fetchTodoList()),
  handleTodoDelete: todoId => dispatch(todoActions.handleTodoDelete(todoId)),
})

TodoListContainer.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTodoList: PropTypes.func.isRequired,
  handleTodoDelete: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
