import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Login extends Component{
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="wrap-login">
        i am Login Page
      </div>
    )
  }
}

export default withRouter(Login)