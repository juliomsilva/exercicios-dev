// Crie 2 funções, ambas recebem um número e retorna true ou false:

// - a primeira verifica se é par;
// - a segunda verifica se é ímpar.

// Em seguida crie uma função que recebe como parâmetros: um array de números e uma função callback. Essa função principal deverá ser capaz de filtrar os números e retornar um array de números filtrados (independente de qual seja a função callback).

// Dica: o filtro poderá ser de números ímpares ou pares.
let arrayPar = [];
let arrayImpar = [];
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verificarPar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
function verificarImpar(numero) {
  if (numero % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

let filtrarArray = array.filter((numero) => {
  if (verificarPar(numero) == true) {
    return arrayPar.push(numero);
  } else {
    return arrayImpar.push(numero);
  }
});
document.write(`<p>Numeros pares: ${arrayPar}</p>`);
document.write(`Numeros Impares: ${arrayImpar}`);
