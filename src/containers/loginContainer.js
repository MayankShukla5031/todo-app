import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Login from '../components/login'

import * as userActions from '../actions/userActions'

class LoginContainer extends Component {
  state = {
    email: '',
    password: '',
  }

  handleEmailChange = event => this.setState({ email: event.target.value })

  handlePasswordChange = event => this.setState({ password: event.target.value })

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      this.handleLogin()
    }
  }

  handleLogin = () => {
    const { email, password } = this.state
    this.props.handleLogin({ email, password })
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />
    }
    return (
      <Login
        handleLogin={this.handleLogin}
        handleKeyDown={this.handleKeyDown}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
      />
    )
  }
}

const mapStateToProps = store => ({
  isLoggedIn: store.userInfoReducer.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({
  handleLogin: data => dispatch(userActions.handleLogin(data)),
})

LoginContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
