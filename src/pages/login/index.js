import React, { Component } from "react";
import icon from "../../static/imgs/default.png";
import { InputItem, Toast, Button } from "antd-mobile";

import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrorVal: false,
      hasErrorPw: false,
      value: "",
      passWord: ""
    };
  }
  onErrorClickVal = () => {
    if (this.state.hasErrorVal) {
      Toast.info("请输入正确的账号");
    }
  };
  onErrorClickPw = () => {
    if (this.state.hasErrorPw) {
      Toast.info("请输入正确的密码");
    }
  };
  onChangeVal = value => {
    console.log(value);
    if (value.replace(/\s/g, "").length < 3) {
      this.setState({
        hasErrorVal: true
      });
    } else {
      this.setState({
        hasErrorVal: false
      });
    }
    this.setState({
      value
    });
  };
  onChangePw = passWord => {
    if (passWord.replace(/\s/g, "").length < 6) {
      this.setState({
        hasErrorPw: true
      });
    } else {
      this.setState({
        hasErrorPw: false
      });
    }
    this.setState({
      passWord
    });
  };
  render() {
    return (
      <div className="login">
        <div className="top">
          <img className="icon" src={icon} alt="" />
          <div className="title">登录账号</div>
        </div>
        <div className="inputs">
          <InputItem
            type="text"
            placeholder="账号"
            error={this.state.hasErrorVal}
            onErrorClick={this.onErrorClickVal}
            onChange={this.onChangeVal}
            value={this.state.value}
          />
          <InputItem
            type="password"
            placeholder="密码"
            error={this.state.hasErrorPw}
            onErrorClick={this.onErrorClickPw}
            onChange={this.onChangePw}
            value={this.state.passWord}
          />
        </div>
        <div className="buttons">
          <Button className="loginBtn" type="primary">
            登录
          </Button>
          <Button className="registerBtn">注册</Button>
        </div>
        <div className="otherWay">
          <div className="line" />
          <div className="content">其他方式登录</div>
          <div className="line" />
        </div>
      </div>
    );
  }
}

export default Login;
