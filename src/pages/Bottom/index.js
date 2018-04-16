import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./bottom.css";

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bottom">
        <Link to={`/main/`} className="item">
          <i class="icon iconfont icon-songhuohuoche" />
          <p>首页</p>
        </Link>
        <Link to={`/main/classes`} className="item">
          <i class="icon iconfont icon-jiangbei" />
          <p>分类</p>
        </Link>
        <div className="item">
          <i class="icon iconfont icon-gouwuche" />
          <p>菜单</p>
        </div>
        <div className="item">
          <i class="icon iconfont icon-qianbi" />
          <p>金钱</p>
        </div>
        <div className="item">
          <i class="icon iconfont icon-yonghuzhongxin" />
          <p>我的</p>
        </div>
      </div>
    );
  }
}

export default Bottom;
