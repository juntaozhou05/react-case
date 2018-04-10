import React, { Component } from "react";
import icon from "../../static/imgs/default.png";

import "./top.css";

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="top">
        <img src={icon} alt="" />
        <input type="text" placeholder="搜索" />
        <i class="icon iconfont icon-other" />
      </div>
    );
  }
}

export default Top;
