import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./components/store/store";

const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <Provider store={store}>
    <App />
  </Provider>
);
