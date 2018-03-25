import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Topbar from '../components/topbar'
import PrivateRoutes from '../components/privateRoutes'
import * as userActions from '../actions/userActions'

class AppContainer extends React.Component {
  state = {}

  handleLogout = () => {
    this.props.handleLogout()
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <Topbar handleLogout={this.handleLogout} />
        <PrivateRoutes />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  isLoggedIn: store.userInfoReducer.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(userActions.handleLogout()),
})

AppContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
