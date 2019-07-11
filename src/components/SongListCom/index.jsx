import React, { Component } from 'react'
import style from './index.module.scss'
import cogoToast from 'cogo-toast';

class SongList extends Component {
  constructor(props) {
    super()
  }

  // 处理歌曲点击事件
  handleSongclick() {
    cogoToast.success('后续功能等待开发，敬请期待',{
      hideAfter: 2,
    })
  }

  render() {
    return (
      <div className={style.section}>
        <div className={style.detail}>
          <img className={style.img} src={ this.props.playlist.coverImgUrl } />
          <div className={style.detailInfo}>
            <div className={style.infoName}>{ this.props.playlist.name }</div>
            <div className={style.infoUser}>
              <img className={style.userImg} src={ this.props.playlist.creator && this.props.playlist.creator.avatarUrl } />
              <div className={style.userName}>{ this.props.playlist.creator && this.props.playlist.creator.nickname }</div>
            </div>
            <div className={style.infoEdit}>编辑简介</div>
          </div>
        </div>
          <div
            className={style.list}
          >
            {
              this.props.playlist.tracks && this.props.playlist.tracks.map((item, index) => {
                let template = (
                  <div
                    className={style.song}
                    key={item.id}
                    onClick={() => this.handleSongclick()}
                  >
                    <div className={style.songIndex}>
                      { index + 1 }
                    </div>
                    <div className={style.songInfo}>
                      <div className={style.infoName}>
                        { item.name }{ item.alia.length > 0 ? '(' + item.alia + ')': '' }
                      </div>
                      <div className={style.infoAuthor}>
                        { item.ar[0].name }
                      </div>
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

export default SongList
