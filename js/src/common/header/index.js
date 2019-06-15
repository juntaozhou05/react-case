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
    const {
      focused,
      list,
      handleFocuse,
      mouseIn,
      handlBlur,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    const pageList = [];
    const newList = list.toJS();
    if (newList.length > 0) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <a key={i} href="" className={header.searchInfoItem}>
              {newList[i]}
            </a>
          );
        }
      }
    }

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
          <div>
            <CSSTransition
              in={focused}
              timeout={2000}
              className={[
                header.navSearch,
                focused || mouseIn ? "slide" : ""
              ].join(" ")}
            >
              <input
                type="text"
                placeholder="搜索"
                onFocus={() => {
                  handleFocuse(list);
                }}
                onBlur={handlBlur}
              />
            </CSSTransition>
            <span
              className={[
                "iconfont",
                "iconai219",
                header.iconai219,
                focused || mouseIn ? header.iconfocused : ""
              ].join(" ")}
            />
            <div
              className={[
                header.searchInfo,
                focused || mouseIn ? header.isShowList : header.isHideList
              ].join(" ")}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={[header.searchInfoTitle].join(" ")}>
                热门搜索
                <span
                  className={header.searchInfoChange}
                  onClick={() => {
                    handleChangePage(page, totalPage);
                  }}
                >
                  <span className="iconfont iconshuaxin" />
                  换一换
                </span>
              </div>
              <div className={[header.searchInfoList].join(" ")}>
                {pageList}
              </div>
            </div>
            <div className={[header.navItem, header.floatRight].join(" ")}>
              登陆
            </div>
            <div className={[header.navItem, header.floatRight].join(" ")}>
              <span className="iconfont iconAa" />
            </div>
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
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"])
  };
};
const mapDispatchToPorps = dispatch => {
  return {
    handleFocuse(list) {
      list.size === 0 && dispatch(actionCreator.getList());
      dispatch(actionCreator.searchFocus());
    },
    handlBlur() {
      dispatch(actionCreator.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreator.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreator.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      console.log(page, totalPage);
      if (page < totalPage) {
        dispatch(actionCreator.changePage(page + 1));
      } else {
        dispatch(actionCreator.changePage(1));
      }
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(Header);
