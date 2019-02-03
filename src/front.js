// @Author: Joni Tuhkanen
import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/app/app_container.jsx";
import Styles from "./styles/global.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.getElementById("root")
);
