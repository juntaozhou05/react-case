import React, { Component } from "react";

import Top from "./top";
import Tabs from "./Tabs";
import "./main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <Top />
        <Tabs />
      </div>
    );
  }
}

export default Main;
