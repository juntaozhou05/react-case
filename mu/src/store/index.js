import { createStore } from "redux";
import reducer from "./reduer";

const store = createStore(reducer);

export default store;
