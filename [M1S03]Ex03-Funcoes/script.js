// 3 - Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares.
// Em seguida imprima na tela uma string informando a quantidade de valores informados, os ímpares e os pares
// (ex: A quantidade informada foi _____, a de valores pares foi ___, e a de valores ímpares foi __)

function receberImprimir(array = []) {
  let Pares = 0;
  let Impares = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      Pares++;
    } else {
      Impares++;
    }
  }
  window.alert(`A quantidade informada foi de: ${array.length} itens, Contendo: ${Pares} pares, e ${Impares} ímpares`);
}

receberImprimir([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
