import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST
} from "./actionTypes";
import axios from "axios";
import "../mock/mock";
import store from "../store/index";

export const getInputChange = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
export const addTodoItem = () => ({
  type: ADD_TODO_ITEM
});
export const deleteTodoItem = index => ({
  type: DELETE_TODO_ITEM,
  index
});
export const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data
});
export const getInitCreator = data => ({
  type: GET_INIT_LIST,
  data
});

// export const getTodoList = () => {
//   return () => {
//     axios.get("/data", { dataType: "json" }).then(res => {
//       const data = res.data;
//       const action = initListAction(data.data);
//       store.dispatch(action);
//     });
//   };
// };
