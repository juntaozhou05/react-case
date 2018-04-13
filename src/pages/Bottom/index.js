import React, { Component } from "react";

import "./bottom.css";

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bottom">
        <div className="item">
          <i class="icon iconfont icon-songhuohuoche" />
          <p>首页</p>
        </div>
        <div className="item">
          <i class="icon iconfont icon-jiangbei" />
          <p>分类</p>
        </div>
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
