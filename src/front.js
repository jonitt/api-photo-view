// @Author: Joni Tuhkanen
import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/app_container.jsx";
import Styles from "./styles/style.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.getElementById("root")
);
