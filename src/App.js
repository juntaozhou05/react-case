import React, { Component } from "react";
import "./static/css/reset.css";
import "./static/css/iconfont.css";
import "./App.css";

import Login from "./pages/login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
