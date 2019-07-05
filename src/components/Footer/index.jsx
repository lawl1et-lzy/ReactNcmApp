import React, { Component } from 'react'
import router from '@/router'
import style from './index.module.scss'
import { withRouter } from 'react-router-dom'

class Footer extends Component {
  constructor(props) {
    super()
  }

  // 底部导航
  handleSubNavClick(path) {
    if(!path) return
    this.props.history.push({'pathname': path})
  }

  render() {
    return (
      <footer className={style.footer}>
        {
          router.map(({ name, footerObj, path }, index) => {
            let footerNav
            if(footerObj && footerObj.show) {
              footerNav = 
              <div className={style.nav} key={index} onClick={() => this.handleSubNavClick(path)}>
                <i className={`fa fa-${footerObj.icon} ${style.faFontsize} fa-lg`}></i>
                <div className={style.subName}>
                  { name }
                </div>
              </div>
            }
            return footerNav
          })
        }
      </footer>
    )
  }
}

export default withRouter(Footer)
