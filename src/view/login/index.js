import React, { Component } from 'react';
import { captcha } from '../../tool/api'
import { baseString } from '../../tool'
import './login.scss'

class Login extends Component {
  constructor() {
      super();
      this.state = {
          codeUrl:''
      }
  }

  componentDidMount() {
     this.getCaptcha()
  }

  changeCaptcha = () => {
     this.getCaptcha()  
  }

  getCaptcha = () => {
    captcha(
        'player',
        {
          _isLoading: true,
          _isModal: true
        }
    ).then((res) => {
        this.setState((prevState, props) => {
              return {
                codeUrl: baseString(res.data.data)
              }
        })
    })
  }

  render() {
    return (
      <div className='login'>
          <div className="logo">
            <span className="icon"></span>
            <span className="arrow" ><i></i>返回</span>
          </div>

          <div className="title">
              <span className="icon"></span>
              <span className="text">登录</span>
          </div>

          <div className="container">
                <ul className="list">
                    <li>
                        <div className="username inputstyle">
                            <span className="text">用户名</span>
                            <input type="text" placeholder="请输入您的用户名(4-10位)" ref="username"/>
                        </div>
                    </li>
                    <li>
                        <div className="password inputstyle">
                            <span className="text">密码</span>
                            <input type="password" placeholder="请输入您的密码" ref="passwordEl"/>
                            <span className="showpassword iconfont"></span>
                        </div>
                    </li>
                    <li>
                        <div className="invalid inputstyle">
                            <div className="left">
                                <span className="text">验证码</span>
                                <input type="text" placeholder="请输入验证码"/>
                            </div>
                            <div className="code" onClick={this.changeCaptcha}>
                                <img src={this.state.codeUrl} alt=""/>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>    
      </div>  
    );
  }
}

export default Login;