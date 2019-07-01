import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SongSheet extends Component{
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="wrap-songsheet">
        i am SongSheet page
      </div>
    )
  }
}

export default withRouter(SongSheet)