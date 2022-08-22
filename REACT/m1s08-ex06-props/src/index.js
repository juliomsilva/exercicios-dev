import React from "react";
import ReactDOM from "react-dom/client";
import Botao from "./Botao";

import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Botao bgcolor="blue" fontcolor="white" />
  </React.StrictMode>
);
