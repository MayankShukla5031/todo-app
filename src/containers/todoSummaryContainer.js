import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoSummary from '../components/todoSummary'

import * as todoActions from '../actions/todoActions'

class TodoSummaryContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.props.fetchSummary()
  }

  render() {
    return (
      <div>
        <TodoSummary todoSummary={this.props.todoSummary} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  todoSummary: store.todoListReducer.todoSummary,
})

const mapDispatchToProps = dispatch => ({
  fetchSummary: () => dispatch(todoActions.fetchSummary()),
})

TodoSummaryContainer.propTypes = {
  fetchSummary: PropTypes.func.isRequired,
  todoSummary: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoSummaryContainer)
