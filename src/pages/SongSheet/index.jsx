import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// component
import Header from '@/components/Header'
import Footer from '@/components/Footer'

class SongSheet extends Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '歌单列表'
    }
    console.log('SongSheet props', props)
  }

  render() {
    return (
      <div className="wrap-songsheet">
        <Header title={this.state.title}/>
        i am SongSheet page
        <Footer />
      </div>
    )
  }
}

export default withRouter(SongSheet)