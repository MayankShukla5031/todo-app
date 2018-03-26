import React from 'react'
import PropTypes from 'prop-types'

import DatePicker from 'material-ui/DatePicker'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'

const TodoAddEdit = ({
  handleNameChange,
  handleStatusChange,
  handlePriorityChange,
  handleCreationDateChange,
  handleCompletionDateChange,
  handleCreateTodo,
  ...restProps
}) => (
  <div className="Todo-Create">
    <div>
      <p>Fill the mandatory fields to create the todo item</p>
      <TextField
        autoFocus
        style={{}}
        hintText="task 1"
        floatingLabelText="Name *"
        value={restProps.name}
        onChange={handleNameChange}
      />
      <DatePicker
        disabled={restProps.isCreationView}
        floatingLabelText="Creation Date *"
        mode="landscape"
        minDate={new Date()}
        value={restProps.created_on || null}
        onChange={handleCreationDateChange}
      />
      <DatePicker
        floatingLabelText="Completion Date *"
        mode="landscape"
        minDate={new Date()}
        value={restProps.completion_date || null}
        onChange={handleCompletionDateChange}
      />
      <SelectField
        disabled={restProps.isCreationView}
        style={{ textAlign: 'left' }}
        floatingLabelText="Status *"
        value={restProps.status}
        onChange={handleStatusChange}
      >
        <MenuItem value="Pending" primaryText="Pending" />
        <MenuItem value="In Progress" primaryText="In Progress" />
        <MenuItem value="Done" primaryText="Done" />
      </SelectField>
      <SelectField
        style={{ textAlign: 'left' }}
        floatingLabelText="Priority *"
        value={restProps.priority}
        onChange={handlePriorityChange}
      >
        <MenuItem value="Top" primaryText="Top" />
        <MenuItem value="Medium" primaryText="Medium" />
        <MenuItem value="Low" primaryText="Low" />
      </SelectField>
    </div>
    <RaisedButton
      primary
      className="Button"
      label={restProps.isCreationView? 'Create' : 'Update'}
      onClick={handleCreateTodo}
    />
  </div>
)

TodoAddEdit.propTypes = {
  name: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  created_on: PropTypes.instanceOf(Date).isRequired,
  completion_date: PropTypes.instanceOf(Date).isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleStatusChange: PropTypes.func.isRequired,
  handleCreationDateChange: PropTypes.func.isRequired,
  handleCompletionDateChange: PropTypes.func.isRequired,
  handlePriorityChange: PropTypes.func.isRequired,
  handleCreateTodo: PropTypes.func.isRequired,
}

export default TodoAddEdit
