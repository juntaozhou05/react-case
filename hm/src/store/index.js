import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
