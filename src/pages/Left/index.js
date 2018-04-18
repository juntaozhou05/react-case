import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import "./left.css";
import icon from "../../static/imgs/default.png";

@inject("store")
// 观察者
@observer
class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0
    };
  }
  render() {
    const store = this.props.store;
    return (
      <div
        className="left"
        style={{ left: store.todos.left }}
        onClick={store.changeHide}
      >
        <div className="content">
          <div className="leftTop">
            <img src={icon} alt="" />
            <p>用户名</p>
            {store.todos.left}
          </div>
          <div className="middle">
            <div className="item">
              <i className="icon iconfont icon-songhuohuoche" />
              <p>形成</p>
            </div>
            <div className="item">
              <i className="icon iconfont icon-songhuohuoche" />
              <p>形成</p>
            </div>
            <div className="item">
              <i className="icon iconfont icon-songhuohuoche" />
              <p>形成</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Left;
