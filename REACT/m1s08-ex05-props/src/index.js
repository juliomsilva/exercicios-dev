import React from "react";
import ReactDOM from "react-dom/client";
import Soma from "./Soma";

import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Soma n1={2} n2={2} />
  </React.StrictMode>
);
