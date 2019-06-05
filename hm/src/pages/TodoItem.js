import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../mock/mock";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDeleteItem = () => {
      const { handleDeleteItem, index } = this.props;
      handleDeleteItem(index);
    };
  }
  //一个组件要从父组件接收参数
  //如果这个组件第一次存在于父组件中，不会执行
  //如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  //性能优化
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  //请求数据
  componentDidMount() {
    axios.get("/data", { dataType: "json" }).then(res => {
      console.log("res", res);
    });
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
