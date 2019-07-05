import React, { Component } from 'react'
import router from '@/router'
import style from './index.module.scss'
import { withRouter } from 'react-router-dom'

class Footer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      router: []
    }
  }

  // created
  componentWillMount() {
    let newRouter = this.handleRouterAct(router)
    this.setState({
      router: newRouter
    })
  }

  // 处理底部高亮图标
  handleRouterAct(router) {
    let { match } = this.props
    router.forEach(item => {
      if(item.path === match.path) {
        item.active = true
      } else {
        item.active = false
      }
    })
    console.log('handleRouterAct', router)
    return router
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
          this.state.router.map(({ name, footerObj, path, active }, index) => {
            let footerNav
            if(footerObj && footerObj.show) {
              footerNav = 
              (
                <div className={style.nav} key={index} onClick={() => this.handleSubNavClick(path)}>
                  <i className={`fa fa-${ active ? footerObj.actIcon : footerObj.icon} ${style.faFontsize} fa-lg`}></i>
                  <div className={style.subName}>
                    { name }
                  </div>
                </div>
              )
            }
            return footerNav
          })
        }
      </footer>
    )
  }
}

export default withRouter(Footer)
