import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./static/css/reset.css";
import "./static/css/iconfont.css";
import "./App.css";

import Login from "./pages/Login";
import Main from "./pages/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={`/`} component={Login} />
          <Route path={`/main`} component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
