import React, { Component } from "react";
import { Route } from "react-router-dom";

import Top from "./top";
import Tabs from "../Tabs";
import Classes from "../Classes";
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
        <Route exact path={`/main/`} component={Tabs} />
        <Route path={`/main/classes`} component={Classes} />
        <Bottom />
      </div>
    );
  }
}

export default Main;
