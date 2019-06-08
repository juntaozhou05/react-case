import "antd/dist/antd.css";
import React, { Component } from "react";
import store from "../../store/index";
import {
  getInputChange,
  addTodoItem,
  deleteTodoItem,
  getInitCreator
} from "../../store/actions";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  componentDidMount() {
    const action = getInitCreator();
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
        list={this.state.list}
      />
    );
  }
  handleInputChange(e) {
    const action = getInputChange(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBtnClick() {
    const action = addTodoItem();
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = deleteTodoItem(index);
    store.dispatch(action);
  }
}

export default TodoList;
