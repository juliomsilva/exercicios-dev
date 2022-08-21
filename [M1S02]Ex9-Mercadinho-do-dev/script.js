var produtos = ["Hortifruti", "Laticinios", "Carnes", "Peixes", "Aves", "Finaliza Pedido"];
var qtd = [0, 0, 0, 0, 0];
var finalizarCompra = false;
var opcao = "";

while (finalizarCompra == false) {
  opcao = window.prompt("Bem vindo ao nosso mercado, utilize as seguintes opções:\n(1)-Hortifruti\n(2)-Laticínios\n(3)-Carnes\n(4)-Peixes\n(5)-Aves\n(6)-Fechar Pedido");

  if (parseInt(opcao) < 1 || parseInt(opcao) > 6) {
    opcao = window.prompt("Por gentileza utilize de 1 a 5 para escolher os corredores e 6 para finalizar a venda");
  } else {
    switch (opcao) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
        var i = parseInt(opcao) - 1;
        var qt = 0;
        qt = window.prompt("Quantos " + produtos[i] + " você deseja adicionar a sacola?");
        qtd[i] = qtd[i] + parseInt(qt);
        break;
      case "6":
        window.alert("Compra Finalizada");
        finalizarCompra = true;
        break;
    }
  }
}
document.write(`<h3>Itens na Sacola</h3>`);

for (i = 0; i <= qtd.length - 1; i++) {
  document.write(`<p>${produtos[i]} - ${qtd[i]} produtos</p>`);
}
const qtdMax = Math.max.apply(0, qtd);
const prodMax = qtd.indexOf(qtdMax);
document.write(`<h4>A compra de ${produtos[prodMax]} está em maior quantidade com ${qtdMax} itens</h4>`);
