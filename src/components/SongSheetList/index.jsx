import React, { Component } from 'react'
import style from './index.module.scss'

class SongSheetList extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className={style.section}>
        <div className={style.scrollView}>
          {
            this.props.list.map((item, index) => {
              let template;
              template = (
                <div className={style.scrollViewItem} key={index}>
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
