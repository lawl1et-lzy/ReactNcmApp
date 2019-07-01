import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SongList extends Component{
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="wrap-songlist">
        i am from SongList
      </div>
    )
  }
}

export default withRouter(SongList)