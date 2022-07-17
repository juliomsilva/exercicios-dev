function receberImprimir(array = []) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log(`Foram encontrados ${array.length} elementos dentro da array`);
}

receberImprimir(["Olá", "Bem", "Vindo", "Ao", "Meu", "Exercicio"]);
