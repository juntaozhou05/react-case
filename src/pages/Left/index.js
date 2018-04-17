import React, { Component } from "react";

import "./left.css";
import icon from "../../static/imgs/default.png";

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0
    };
  }
  render() {
    return (
      <div className="left" style={{ left: this.state.left }}>
        <div className="content">
          <div className="leftTop">
            <img src={icon} alt="" />
            <p>用户名</p>
          </div>
          <div className="middle">
            <div className="item">
              <i class="icon iconfont icon-songhuohuoche" />
              <p>形成</p>
            </div>
            <div className="item">
              <i class="icon iconfont icon-songhuohuoche" />
              <p>形成</p>
            </div>
            <div className="item">
              <i class="icon iconfont icon-songhuohuoche" />
              <p>形成</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Left;
