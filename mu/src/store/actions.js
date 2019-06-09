import {
  CHNAGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from "./actionTypes";

export const changeInput = value => ({
  type: CHNAGE_INPUT_VALUE,
  value
});
export const addTodo = () => ({
  type: ADD_TODO_ITEM
});
export const deleteTodo = index => ({
  type: DELETE_TODO_ITEM,
  index
});
