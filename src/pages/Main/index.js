import React, { Component } from "react";

import Top from "./top";
import Tabs from "./Tabs";
import Bottom from "../Bottom";
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
        <Bottom />
      </div>
    );
  }
}

export default Main;
