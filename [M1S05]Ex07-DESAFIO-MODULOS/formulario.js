import imprimeDadosDeUsuario from "./usuario.js";

let botao;
botao = document.getElementById("botao");

botao.addEventListener("click", recebeClickDoBotao);

function recebeClickDoBotao() {
  let campoNome, campoImg, campoDescricao;
  campoNome = document.getElementById("input-nome").value;
  campoImg = document.getElementById("input-imagem").value;
  campoDescricao = document.getElementById("descricao").value;
  imprimeDadosDeUsuario(campoNome, campoImg, campoDescricao);
}
