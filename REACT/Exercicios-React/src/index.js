import React from "react";
import ReactDOM from "react-dom/client";
import Titulo from "./[M1S08]Ex03-Componentes/Titulo";
import Texto from "./[M1S08]Ex03-Componentes/Texto.js";
import "./style.css";
import Soma from "./[M1S08]Ex05-Props/Soma";
import Botao from "./[M1S08]Ex06-Props/Botao";
import PostInstagram from "./[M1S08]Ex07/PostInstagram";
import ListaContatos from "./[M1S08]Ex08-ListadeContatos/ListaContatos";
import Produtos from "./[M1S08]Ex09-ListadeProdutos/Produtos";
import RenderCond from "./[M1S08]Ex10-RenderizacaoCondicional/RenderCond";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RenderCond />
    {/* <Produtos /> */}
    {/* <ListaContatos /> */}
    {/* <PostInstagram /> */}

    {/* <Titulo />
    <Texto />
    <Soma n1={2} n2={2} />
    <Botao bgcolor="blue" fontcolor="white" /> */}
  </React.StrictMode>
);
