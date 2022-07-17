var informarParImpar = function (num1) {
  var resultado;
  if (num1 % 2 == 0) {
    resultado = `O número ${num1} é Par`;
  } else if (num1 % 2 == 1) {
    resultado = `O número ${num1} é impar`;
  } else {
    resultado = "inválido";
  }

  return resultado;
};
verificar = window.prompt("Digite um número para que eu verifique se é par ou impar");
document.write(informarParImpar(verificar));
