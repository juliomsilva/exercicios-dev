let botao = document.getElementById("botao");

function capturarClick() {
  window.alert("O botão acabou de ser clicado");
}

botao.addEventListener("click", capturarClick);
