import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Header from "./common/header/index";

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
