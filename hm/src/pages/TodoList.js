import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = e => {
      const inputValue = e.target.value;
      this.setState(() => ({
        inputValue
      }));
    };
    this.handleButtonClick = () => {
      this.setState(prevState => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      }));
    };
    this.handleDeleteItem = index => {
      this.setState(prevState => {
        const list = [...prevState.list];
        list.splice(index, 1);
        return { list };
      });
    };
  }
  render() {
    return (
      <div className="test">
        <div className="top">
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul className="content">{this.getTodoItem()}</ul>
      </div>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          handleDeleteItem={this.handleDeleteItem}
        />
      );
    });
  }
}
