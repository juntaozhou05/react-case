import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import header from "./index.module.css";
import "../common.css";
import logoImg from "../../static/logo.png";
import { actionCreator } from "./store";

class Header extends Component {
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
          <CSSTransition
            in={this.props.focused}
            timeout={2000}
            className={[
              header.navSearch,
              this.props.focused ? "slide" : ""
            ].join(" ")}
          >
            <input
              type="text"
              placeholder="搜索"
              onFocus={this.props.handleFocuse}
              onBlur={this.props.handlBlur}
            />
          </CSSTransition>
          <span
            className={[
              "iconfont",
              "iconai219",
              header.iconai219,
              this.props.focused ? header.iconfocused : ""
            ].join(" ")}
          />
          <div className={[header.navItem, header.floatRight].join(" ")}>
            登陆
          </div>
          <div className={[header.navItem, header.floatRight].join(" ")}>
            <span className="iconfont iconAa" />
          </div>
        </div>
        <div className={header.addition}>
          <div className={[header.button, header.writting].join(" ")}>
            <span className="iconfont iconbi" />
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
const mapStateToProps = state => {
  return {
    // focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"])
  };
};
const mapDispatchToPorps = dispatch => {
  return {
    handleFocuse() {
      dispatch(actionCreator.searchFocus());
    },
    handlBlur() {
      dispatch(actionCreator.searchBlur());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(Header);
