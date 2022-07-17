let inserirPresente = document.getElementById("botao");
inserirPresente.addEventListener("click", function () {
  let lista = document.getElementById("listapresentes");
  let li = document.createElement("li");

  adicionarLista = document.getElementById("inserirItem");
  li.appendChild(document.createTextNode(adicionarLista.value));
  lista.appendChild(li);
  document.getElementById("inserirItem").value = "";
});
