import React, { Component } from 'react'
import style from './index.module.scss'

class UserInfo extends Component {
  constructor(props) {
    super()
    this.state = {
      profile: {},
      level: 0
    }
  }

  componentWillReceiveProps(props) {
    if(props.userInfo) {
      let { profile, level } = props.userInfo
      this.setState({
        profile,
        level
      })
    }
  }
  render() {
    return (
      <div className={style.user}
        style={{
          backgroundImage: `url(${this.state.profile.backgroundUrl})`,
          backgroundOrigin: 'border-box',
          backgroundSize: '100% auto',
          backgroundRepeat:'no-repeat',
          backgroundPosition: '0 -80px'
        }}
      >
        <div className={style.userHead}>
          <img className={style.img} src={this.state.profile.avatarUrl} alt={this.state.profile.avatarUrl} />
          <div className={style.btnUserEdit}>编辑</div>
        </div>
        <div className={style.userInfo}>
          <div className={style.infoName}>{ this.state.profile.nickname }</div>
          <div className={style.infoF}>
            <div className={style.fFollows}>关注 { this.state.profile.follows }</div>
            <div className={style.verticalLine}>|</div>
            <div className={style.fFolloweds}>粉丝 { this.state.profile.followeds }</div>
          </div>
          <div className={style.infoLabel}>
            <div className={`${style.label} ${style.labelLevel}`}>Lv.{ this.state.level }</div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfo
