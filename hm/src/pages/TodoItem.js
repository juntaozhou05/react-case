import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDeleteItem = () => {
      const { handleDeleteItem, index } = this.props;
      handleDeleteItem(index);
    };
  }
  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleDeleteItem} className="TodoTtem">
        {content}
      </div>
    );
  }
}
//定义类型
TodoItem.proTypes = {
  content: PropTypes.string.isRequired,
  handleDeleteItem: PropTypes.func,
  index: PropTypes.number
};
//默认值
TodoItem.defaultProps = {
  content: "abc"
};
