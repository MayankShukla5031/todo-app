import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import RegisterUser from '../components/registerUser'
import * as userActions from '../actions/userActions'
import '../css/registerUser.css'

class RegisterContainer extends React.Component {
  state = {
    name: '',
    email_id: '',
    password: '',
  }

  handleNameChange = (e, value) => this.setState({ name: value })

  handlePasswordChange = (e, date) => this.setState({ password: date })

  handleEmailChange = (e, date) => this.setState({ email_id: date })

  handleRegisterUser = () => {
    this.props.handleRegisterUser(this.state, () => {
      this.props.history.push('/login')
    })
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />
    }
    return (
      <RegisterUser
        {...this.state}
        handleNameChange={this.handleNameChange}
        handlePasswordChange={this.handlePasswordChange}
        handleEmailChange={this.handleEmailChange}
        handleRegisterUser={this.handleRegisterUser}
      />
    )
  }
}

const mapStateToProps = store => ({
  isLoggedIn: store.userInfoReducer.isLoggedIn,
})

const mapDispatchToProps = () => ({
  handleRegisterUser: (data, callback) => userActions.handleRegisterUser(data, callback),
  // handleLogout: () => dispatch(loginActions.doLogout()),
  // fetchUserProfile: () => dispatch(loginActions.doFetchUserProfile()),
})

RegisterContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleRegisterUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
