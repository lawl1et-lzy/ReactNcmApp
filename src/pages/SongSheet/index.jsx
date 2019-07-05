import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getSongSheetList } from '@/store/actions/todoAction'
import { connect } from 'react-redux'
// component
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SongSheetList from '@/components/SongSheetList'
// 样式
import style from './index.module.scss'

class SongSheet extends Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '歌单列表'
    }
    console.log('SongSheet props', props)
  }

  // created
  componentWillMount() {
    // TODO: EDIT
    let rp = {
      uid: '38390609'
    }
    this.props.dispatch(getSongSheetList(rp))
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