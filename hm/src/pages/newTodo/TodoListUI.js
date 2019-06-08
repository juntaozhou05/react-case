import React, { Component } from "react";
import { Input, Button, List } from "antd";

const TodoListUI = props => {
  return (
    <div style={{ margin: "10px" }}>
      <Input
        placeholder="Basic usage"
        value={props.inputValue}
        style={{ width: "300px", marginRight: "10px" }}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>
        submit
      </Button>
      <List
        style={{ marginTop: "10px", width: "300px" }}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={index => {
              props.handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;

// export default class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ margin: "10px" }}>
//         <Input
//           placeholder="Basic usage"
//           value={this.props.inputValue}
//           style={{ width: "300px", marginRight: "10px" }}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>
//           submit
//         </Button>
//         <List
//           style={{ marginTop: "10px", width: "300px" }}
//           header={<div>Header</div>}
//           footer={<div>Footer</div>}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={index => {
//                 this.props.handleItemDelete(index);
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }
