let addMessage = document.getElementById("add-message");
addMessage.addEventListener("click", function () {
  var aparecermsg = document.getElementById("texto").value;
  if (aparecermsg == "") {
    window.alert("Por gentileza, adicione um texto");
  } else {
    var mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = aparecermsg;
    document.getElementById("texto").value = "";
  }
});

let saveMessage = document.getElementById("save-message");
saveMessage.addEventListener("click", function () {
  var mensagem = document.getElementById("mensagem").textContent;
  if (mensagem == "") {
    window.alert("Não foi detectado nenhum texto para salvar");
  } else {
    localStorage.setItem("nome", JSON.stringify(mensagem));
  }
});

let showMessage = document.getElementById("show-message");
showMessage.addEventListener("click", function () {
  var mensagem = JSON.parse(localStorage.getItem("nome"));
  if (localStorage.getItem("nome") == null) {
    window.alert("Não há nada salvo");
  } else {
    var mostrarmsg = document.getElementById("mensagem");
    mostrarmsg.innerHTML = mensagem;
  }
});
