import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class My extends Component{
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="wrap-my">
        i am My Page
      </div>
    )
  }
}

export default withRouter(My)