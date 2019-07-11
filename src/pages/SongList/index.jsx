import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSongList } from '../../store/actions/songListAction'
import Cookies from 'universal-cookie';
// component
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SongListCom from '@/components/SongListCom'
// 样式
import style from './index.module.scss'

class SongList extends Component{
  constructor(props) {
    super()
    let params = props.match.params
    this.state = {
      title: '歌曲列表',
      cookies: new Cookies(),
      id: params.id
    }
  }

  // created
  componentWillMount() {
    let rp = {
      id: this.state.id
    }
    let user = this.state.cookies.get('user')
    if(user) {
      // 获取数据
      this.props.dispatch(getSongList(rp))
    } else {
      this.props.history.push({'pathname': '/login'})
    }
  }

  render() {
    return (
      <div className="wrap-songlist">
        <Header title={this.state.title}/>
        <section className={style.songList}>
          <SongListCom playlist={this.props.songList}/>
        </section>
        <Footer />
      </div>
    )
  }
}

export default connect(
  state => ({
    songList: state.songListReducer.songList || {}
  })
)(withRouter(SongList))
