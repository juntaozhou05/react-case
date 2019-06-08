import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actions";
import axios from "axios";
import "../mock/mock";
import store from "./index";

function* getInitList() {
  try {
    const res = yield axios.get("/data", { dataType: "json" });
    const action = initListAction(res.data.data);
    yield put(action);
  } catch (e) {
    console.log("失败");
  }
}

function* mySages() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySages;
