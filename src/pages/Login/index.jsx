import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.module.scss' 
import Cookies from 'universal-cookie';
import Api from '@/api/index.api'
import cogoToast from 'cogo-toast';

class Login extends Component{
  constructor() {
    super()
    this.state = {
      account: '',
      password: '',
      cookies: new Cookies()
    }
  }

  // created
  componentWillMount() {
  }

  // 账号
  handleAccountEnter = (e) => {
    this.setState({
      account: e.target.value
    })
  }

  // 密码
  handlePwdEnter = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  // 登录
  handleLogin () {
    let rp = {
      phone: this.state.account,
      password: this.state.password
    }
    this.fetchLogin(rp)
  }

  // 请求登录
  fetchLogin(rp) {
    Api.getLogin(rp)
      .then(res => {
        let { code, account } = res
          if(code && code === 200) {
            let user = account ? JSON.stringify(account) : ''
            if(user) {
              this.state.cookies.set('user', user)
              cogoToast.success(`登录成功`,{
                hideAfter: 2,
              })
              this.handleAfterLogin() // 登录后的处理
            } else {
              cogoToast.error(`暂无登录信息`,{
                hideAfter: 2,
              })
            }
          } else {
            cogoToast.error(`登录失败，错误代码：${code}`,{
              hideAfter: 2,
            })
          }
      })
      .catch(err => {
        cogoToast.error(`系统错误：${err}`,{
          hideAfter: 2,
        })
      })
  }

  // 登录后的处理
  handleAfterLogin() {
    let redirectUrl = document.referrer
    let origin = window.location.origin
    if(!redirectUrl) {
      redirectUrl = `${origin}`
    }
    window.location.replace(redirectUrl)
  }

  render() {
    return (
      <div className={style.wrapLogin}>
        <div className={style.loginBox}>
          <div className={style.formGroup}>
            <input
              type="test"
              className={`${style.formControl} ${style.account}`}
              name="account"
              placeholder="please input account"
              value={this.state.account}
              onChange={this.handleAccountEnter}
            />
          </div>
          <div className={style.formGroup}>
            <input 
              type="password"
              className={`${style.formControl} ${style.password}`}
              name="password"
              placeholder="please input password"
              onChange={this.handlePwdEnter}
            />
          </div>
          <button className={style.btnLogin} onClick={() => this.handleLogin()}>
            Sign In
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)