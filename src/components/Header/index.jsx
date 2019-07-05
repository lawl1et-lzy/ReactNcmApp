import React, { Component } from 'react'
import style from './index.module.scss'
import { withRouter } from 'react-router-dom'
class Header extends Component {
  constructor(props) {
    super()
  }

  // 返回按钮
  handleGoBackClick() {
    window.history.back()
  }

  render() {
    return (
      <header className={style.header}>
        <div className={style.both}>
          <div className={style.iconAngle}>
            <i className="fa fa-angle-left fa-lg" onClick={() => this.handleGoBackClick()}></i>
          </div>
          <div className="header-right"></div>
        </div>
        <div className={style.title}>{this.props.title}</div>
      </header>
    )
  }
}

export default withRouter(Header);
