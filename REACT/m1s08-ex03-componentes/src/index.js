import React from "react";
import ReactDOM from "react-dom/client";
import Titulo from "./Titulo.js";
import Texto from "./Texto.js";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Titulo />
    <Texto />
  </React.StrictMode>
);
