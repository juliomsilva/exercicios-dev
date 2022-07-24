var arrayNomes = ["Janete", "Rodrigo", "Sheila", "Jonas"];

var lista = document.getElementById("lista");
lista.innerHTML = arrayNomes;

let botao = document.getElementById("btn-remover");
botao.addEventListener("click", function () {
  nomeRemover = document.getElementById("input-remover").value;

  removerNome(nomeRemover);
});

function removerNome(nome) {
  let indice = arrayNomes.indexOf(nome);
  if (indice != -1) {
    arrayNomes.splice(indice, 1);
  }
  console.log(arrayNomes);
  lista.innerHTML = arrayNomes;
}
