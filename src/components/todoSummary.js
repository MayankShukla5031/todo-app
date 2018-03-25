import React from 'react'
import PropTypes from 'prop-types'

import '../css/todoSummary.css'

const TodoSummary = ({ todoSummary }) => (
  <div>
    <div className="Center-Align">
      <table>
        <thead>
          <tr><td><h3> Summary </h3></td></tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Count</td>
            <td>{todoSummary.total || '0'}</td>
          </tr>
          <tr>
            <td>In Progress</td>
            <td>{todoSummary.in_progress || '0'}</td>
          </tr>
          <tr>
            <td>Pending</td>
            <td>{todoSummary.pending || '0'}</td>
          </tr>
          <tr>
            <td>Done</td>
            <td>{todoSummary.done || '0'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

TodoSummary.propTypes = {
  todoSummary: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default TodoSummary
