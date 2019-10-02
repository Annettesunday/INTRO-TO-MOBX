import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ItemStore from "./store/ItemStore";
import { Provider } from "mobx-react";

const itemStore = new ItemStore();

ReactDOM.render(
  <Provider store={itemStore}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
