import React from "react";
import { connect } from "react-redux";
import { changeInput, addTodo, deleteTodo } from "../store/actions";

const TodoList = props => {
  const { inputValue, list, handleChange, handleClick, handleDelete } = props;
  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleClick}>sumit</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleDelete(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChange(e) {
      const action = changeInput(e.target.value);
      dispatch(action);
    },
    handleClick() {
      const action = addTodo();
      dispatch(action);
    },
    handleDelete(index) {
      const action = deleteTodo(index);
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
