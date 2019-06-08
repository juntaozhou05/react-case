import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: []
};

//reducer可以接收state，但是绝不能修改reducer
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = Object.assign({}, state);
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = Object.assign({}, state);
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = Object.assign({}, state);
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = Object.assign({}, state);
    newState.list = action.data;
    return newState;
  }
  return state;
};
