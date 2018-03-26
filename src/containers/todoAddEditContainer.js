import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoAddEdit from '../components/todoAddEdit'
import * as todoActions from '../actions/todoActions'

class TodoAddEditContainer extends React.Component {
  state = {
    name: '',
    status: 'Pending',
    priority: '',
    created_on: new Date(),
    completion_date: new Date(),
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchTodoDetails(this.props.match.params.id)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todoDetails) {
      const obj = { ...nextProps.todoDetails }
      obj.completion_date = new Date(obj.completion_date)
      obj.created_on = new Date(obj.created_on)
      this.setState(obj)
    }
  }

  handleNameChange = (e, value) => this.setState({ name: value })

  handleStatusChange = (e, index, value) => this.setState({ status: value })

  handlePriorityChange = (e, index, value) => this.setState({ priority: value })

  handleCreationDateChange = (e, date) => this.setState({ created_on: date })

  handleCompletionDateChange = (e, date) => this.setState({ completion_date: date })

  handleCreateTodo = () => {
    const obj = { ...this.state }
    obj.created_on = obj.created_on.toDateString()
    obj.completion_date = obj.completion_date.toDateString()
    if (obj.todo_id) {
      this.props.handleUpdateTodo(obj, this.changeRoute)
    } else {
      this.props.handleCreateTodo(obj, this.changeRoute)
    }
  }

  changeRoute = () => {
    this.props.history.push('/todoList')
  }

  render() {
    return (
      <TodoAddEdit
        {...this.state}
        isCreationView={!this.props.match.params.id}
        handleNameChange={this.handleNameChange}
        handleStatusChange={this.handleStatusChange}
        handlePriorityChange={this.handlePriorityChange}
        handleCreationDateChange={this.handleCreationDateChange}
        handleCompletionDateChange={this.handleCompletionDateChange}
        handleCreateTodo={this.handleCreateTodo}
      />
    )
  }
}

const mapStateToProps = state => ({
  todoDetails: state.todoListReducer.todoDetails,
})

const mapDispatchToProps = dispatch => ({
  handleCreateTodo: (data, callback) => dispatch(todoActions.handleCreateTodo(data, callback)),
  fetchTodoDetails: id => dispatch(todoActions.fetchTodoDetails(id)),
  handleUpdateTodo: (data, callback) => dispatch(todoActions.handleUpdateTodo(data, callback)),
  // handleLogout: () => dispatch(loginActions.doLogout()),
  // fetchUserProfile: () => dispatch(loginActions.doFetchUserProfile()),
})

TodoAddEditContainer.propTypes = {
  handleCreateTodo: PropTypes.func.isRequired,
  todoDetails: PropTypes.shape({}).isRequired,
  handleUpdateTodo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  fetchTodoDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAddEditContainer)
