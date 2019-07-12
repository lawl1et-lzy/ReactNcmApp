import React, { Component } from 'react'
import style from './index.module.scss'

class SongSheetList extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  // 处理歌单列表点击事件
  handleItemClick(id) {
    this.props.handleSongSheetItemClick(id)
  }
  componentWillReceiveProps(props) {
    let { list } = props
    if(list) {
      this.setState({
        list
      })
    }
  }
  render() {
    return (
      <div className={style.section}>
        <div className={style.scrollView}>
          {
            this.state.list && this.state.list.map((item, index) => {
              let template = (
                <div 
                  className={style.scrollViewItem} 
                  key={index} 
                  onClick={() => this.handleItemClick(item.id)}
                >
                  <img className={style.img} src={item.coverImgUrl} alt={index}></img>
                  <div className={style.sheet}>
                    <div className={style.sheetName}>{ item.name }</div>
                    <div className={style.sheetNum}>{ item.trackCount }首</div>
                  </div>
                </div>
              )
              return template
            })
          }
        </div>
      </div>
    )
  }
}

export default SongSheetList
