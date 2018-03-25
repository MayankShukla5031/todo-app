import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import { NavLink } from 'react-router-dom'

import '../css/topbar.css'

const Topbar = ({ handleLogout }) => (
  <div className="Topbar">
    <ul>
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink exact to="/todoList">Todos List</NavLink></li>
      <li><NavLink exact to="/todo/create">Create Todo</NavLink></li>
      <li className="User-Profile"><FlatButton label="Logout" onClick={handleLogout} /></li>
    </ul>
  </div>
)

Topbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
}

export default Topbar
