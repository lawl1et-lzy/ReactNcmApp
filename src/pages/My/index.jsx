import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// component
import Header from '@/components/Header'
import Footer from '@/components/Footer'
class My extends Component{
  constructor(props) {
    super()
    this.state = {
      title: '个人信息'
    }
  }

  render() {
    return (
      <div className="wrap-my">
        <Header title={this.state.title}/>
        
        <Footer />
      </div>
    )
  }
}

export default withRouter(My)