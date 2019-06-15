import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header/index";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={Detail} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
