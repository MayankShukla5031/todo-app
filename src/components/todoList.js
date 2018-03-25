import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

let deleteTodoRef

const actionCellFormat = (cell, row) => (
  <span>
    <Link to={`/todo/update/${row.todo_id}`}>Edit | </Link>
    <a href="" onClick={handleDeleteCell(row.todo_id)}>Delete</a>
  </span>
)

const handleDeleteCell = todoId => e => {
  e.preventDefault()
  deleteTodoRef(todoId)
}

const TodoList = ({ todoList, handleTodoDelete }) => {
  deleteTodoRef = handleTodoDelete
  return (
    <div className="Todo-Table">
      <BootstrapTable data={todoList} striped hover>
        <TableHeaderColumn isKey hidden dataField="todo_id">Todo Id</TableHeaderColumn>
        <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
        <TableHeaderColumn dataField="created_on">Created on</TableHeaderColumn>
        <TableHeaderColumn dataField="status">Status</TableHeaderColumn>
        <TableHeaderColumn dataField="completion_date">Done by</TableHeaderColumn>
        <TableHeaderColumn dataField="completion_date" dataFormat={actionCellFormat}>Action</TableHeaderColumn>
      </BootstrapTable>

    </div>
  )
}

TodoList.propTypes = {
  // openConfirmationBox: PropTypes.bool.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleTodoDelete: PropTypes.func.isRequired,
}

export default TodoList
