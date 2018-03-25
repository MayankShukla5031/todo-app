import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const Login = ({
  handleEmailChange,
  handlePasswordChange,
  handleLogin,
  handleKeyDown,
}) => (
  <div className="User">
    <div>
      <h2>Welcome!</h2>
      <p>Login to your account to start <br /> managing your todo list</p>
      <TextField
        autoFocus
        hintText="abc@gmail.com"
        floatingLabelText="Email *"
        onChange={handleEmailChange}
        onKeyDown={handleKeyDown}
      />
      <TextField
        type="password"
        floatingLabelText="Password *"
        onChange={handlePasswordChange}
        onKeyDown={handleKeyDown}
      />
    </div>
    <div>
      <RaisedButton
        label="Login"
        className="Button"
        primary
        onClick={handleLogin}
      />
      <div>
        <Link
          to="/register"
        >
          Register
        </Link>
      </div>
    </div>
  </div>
)

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
}
export default Login
