import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon from "../../static/imgs/default.png";
import "./top.css";

import { inject, observer } from "mobx-react";
@inject("store")
// 观察者
@observer
class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const store = this.props.store;
    return (
      <div className="top">
        <img src={icon} alt="" onClick={store.changeShow} />
        <input type="text" placeholder="搜索" />
        <Link to={`/`}>
          <i className="icon iconfont icon-other" />
        </Link>
      </div>
    );
  }
}

export default Top;
