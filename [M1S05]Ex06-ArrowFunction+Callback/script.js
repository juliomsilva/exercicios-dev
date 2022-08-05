let mostrarTabuada = (numero) => {
  return criarTabuada * numero;
};

let criarTabuada = (numero) => {
  for (let i = 0; i <= 10; i++) {
    document.write(`<p>${numero} x ${i} = ${numero * i}</p>`);
  }
};

mostrarTabuada(criarTabuada(3));
