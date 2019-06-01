import React, { Component } from "react";

export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "hello",
      list: []
    };
    this.handleInputChange = e => {
      console.log(this);
      this.setState({ inputValue: e.target.value }, () => {
        console.log(123);
      });
    };
  }
  render() {
    return (
      <div className="test">
        <div className="top">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>提交</button>
        </div>
        <ul className="content">
          <li>fds</li>
        </ul>
      </div>
    );
  }
}
