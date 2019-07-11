import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getSongSheetList } from '@/store/actions/todoAction'
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
// component
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SongSheetList from '@/components/SongSheetList'
// 样式
import style from './index.module.scss'

class SongSheet extends Component{
  constructor() {
    super()
    this.state = {
      title: '歌单列表',
      cookies: new Cookies(), // cookie 操作对象
    }
  }

  // created
  componentWillMount() {
    let rp = {
      uid: ''
    }
    let user = this.state.cookies.get('user')
    if(user) {
      rp.uid = user.id
      this.props.dispatch(getSongSheetList(rp))
    } else {
      this.props.history.push({'pathname': '/login'})
    }
  }

  render() {
    return (
      <div className="wrap-songsheet">
        <Header title={this.state.title}/>
        <section className={style.songSheetList}>
          <SongSheetList list={this.props.songSheetList} />
        </section>
        <Footer />
      </div>
    )
  }
}

export default connect(
  state => ({
    songSheetList: state.todoReducer.songSheetList || []
  }))(withRouter(SongSheet))