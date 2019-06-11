import React, { Component } from "react";
import header from "./index.module.css";
import "../common.css";
import logoImg from "../../static/logo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleMainLink = this.handleMainLink.bind(this);
  }
  render() {
    return (
      <div className={header.headerWrapper}>
        <img
          onClick={this.handleMainLink}
          className={header.img}
          src={logoImg}
          alt=""
        />
        <div className={header.nav}>
          <div
            className={[header.navItem, header.floatLeft, header.active].join(
              " "
            )}
          >
            首页
          </div>
          <div className={[header.navItem, header.floatLeft].join(" ")}>
            下载App
          </div>
          <input
            type="text"
            className={[header.navSearch].join(" ")}
            placeholder="搜索"
          />
          <div className={[header.navItem, header.floatRight].join(" ")}>
            登陆
          </div>
          <div className={[header.navItem, header.floatRight].join(" ")}>
            Aa
          </div>
        </div>
        <div className={header.addition}>
          <div className={[header.button, header.writting].join(" ")}>
            写文章
          </div>
          <div className={[header.button, header.reg].join(" ")}>注册</div>
        </div>
      </div>
    );
  }
  handleMainLink() {
    window.location.href = "/";
  }
}
