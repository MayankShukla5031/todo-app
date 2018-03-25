import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const RegisterUser = ({
  handleNameChange,
  handlePasswordChange,
  handleEmailChange,
  handleRegisterUser,
  ...restProps
}) => (
  <div className="User">
    <div>
      <h3>Welcome</h3>
      <p>Kindly fill the details</p>
      <TextField
        autoFocus
        style={{}}
        hintText="abc"
        floatingLabelText="Name *"
        value={restProps.name}
        onChange={handleNameChange}
      />
      <TextField
        style={{}}
        hintText="abc@gmail.com"
        floatingLabelText="Email Id *"
        value={restProps.email_id}
        onChange={handleEmailChange}
      />
      <TextField
        type="password"
        style={{}}
        hintText="****"
        floatingLabelText="Password *"
        value={restProps.password}
        onChange={handlePasswordChange}
      />
    </div>
    <RaisedButton
      primary
      className="Button"
      label="Create"
      onClick={handleRegisterUser}
    />
    <div>
      <Link
        to="/login"
      >
        Login
      </Link>
    </div>
  </div>
)

RegisterUser.propTypes = {
  name: PropTypes.string.isRequired,
  email_id: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleRegisterUser: PropTypes.func.isRequired,
}

export default RegisterUser
