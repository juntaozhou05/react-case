import "antd/dist/antd.css";
import React, { Component } from "react";
import { Input, Button, List, Typography } from "antd";
import store from "../../store/index";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.stata = store.getState();
    console.log(this.stata);
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Input
          placeholder="Basic usage"
          value={this.stata.inputValue}
          style={{ width: "300px", marginRight: "10px" }}
        />
        <Button type="primary">submit</Button>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.stata.list}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;
