import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { getUser, getUsers } from "./state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App function={{ key_getUser: getUser, key_getUsers: getUsers }} />
  </BrowserRouter>
);