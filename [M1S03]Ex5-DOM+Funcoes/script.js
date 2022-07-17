function criarTexto() {
  let inserirTexto = document.getElementById("TextoAqui");
  let qtdFrases = Number(window.prompt("Quantas frases deseja inserir:"));
  for (let i = 1; i <= qtdFrases; i++) {
    let pedirTexto = window.prompt(`Digite a frase N° ${i}: `);
    inserirTexto.innerHTML += pedirTexto + " ";
  }
}
criarTexto();
