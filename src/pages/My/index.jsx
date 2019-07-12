import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { connect } from 'react-redux'
import { getUserInfo } from './store/actions'
import { getSongSheetList } from '@/store/actions/todoAction'
// component
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SongSheetList from '@/components/SongSheetList'
import UserInfo from '@/components/UserInfo'
// 样式
import style from './index.module.scss'
class My extends Component{
  constructor() {
    super()
    this.state = {
      title: '个人信息',
      cookies: new Cookies(),
    }
  }

  componentWillMount() {
    let rp = {
      uid: ''
    }
    let user = this.state.cookies.get('user')
    if(user) {
      rp.uid = user.id
      this.props.dispatch(getUserInfo(rp)) // 获取个人信息
      this.props.dispatch(getSongSheetList(rp)) // 获取歌单列表
    } else {
      this.props.history.push({'pathname': '/login'})
    }
  }

  // SongSheetList 子组件的歌单点击事件
  handleSongSheetItemClick(id) {
    if(!id) return
    this.props.history.push({
      'pathname': `/songlist/${id}`
    })
  }

  render() {
    return (
      <div className="wrap-my">
        <Header title={this.state.title}/>
        <section className={style.wrapUser}>
          <UserInfo 
            userInfo={this.props.userInfo}
          />
          <SongSheetList
            list={this.props.songSheetList}
            handleSongSheetItemClick={(id) => this.handleSongSheetItemClick(id)}
          />
        </section>
        <Footer />
      </div>
    )
  }
}

export default connect(
  state => ({
    songSheetList: state.todoReducer.songSheetList,
    userInfo: state.userInfoReducer.userInfo
  })
)(withRouter(My))