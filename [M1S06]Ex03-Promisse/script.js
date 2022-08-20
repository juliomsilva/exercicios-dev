function verificarPar(num) {
  if (num % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

let Promisse = new Promise((resolve, reject) => {
  let pedirNum = verificarPar(parseInt(window.prompt("Digite um número inteiro para que eu verifique se é par ou impar: ")));
  if (pedirNum == "Par") {
    resolve("Numero informado é par");
  } else {
    reject("Deu ruim, o numero informado é impar");
  }
});

Promisse.then((resolve) => {
  document.write(resolve);
}).catch((err) => {
  document.write(err);
});
