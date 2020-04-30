import React, { Component } from 'react'

import * as apiCalls from '../utils/apiCalls'

class LoginContainer extends Component {

  handleClick = () => {
    // apiCalls.getCall('/api/service_providers');
    // return;
    apiCalls.postCall('/api/accounts', {
      // user: {
        name: "Ajit",
        email: "abcacdsdcqwdda.com",
        password: "Test@123"
      // }
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        Click Here
      </div>
    )
  }
}

export default LoginContainer
