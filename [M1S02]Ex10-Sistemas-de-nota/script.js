// Pensando em um sistema de notas online, crie um código que irá capturar o nome do aluno e a nota de 4 unidades usando o prompt dentro de uma laço while, a ideia é que a cada valor digitado seja puxado para um array com o método push. Após isso, crie um laço “for” que irá calcular a soma de todos os itens do array para ser calculada sua média. Ao final de tudo, deverá ser apresentado em tela o nome do aluno, sua média e se o aluno foi aprovado ou não, para esse último tópico considere a média para aprovação maior ou igual a 7.

let notaAluno = [];
let contador = 1;
let soma = 0;
let nomeAluno = window.prompt("Digite o nome do aluno");

while (notaAluno.length <= 3) {
  notaAluno.push(parseFloat(window.prompt(`Digite a nota N°${contador} do aluno ${nomeAluno}`)));
  contador++;
}

for (let i = 0; i < notaAluno.length; i++) {
  soma += notaAluno[i];
}
let media = soma / 4;

if (media >= 7) {
  window.alert(`O aluno ${nomeAluno} ficou com media final ${media} e foi aprovado!!`);
} else {
  window.alert(`O aluno ${nomeAluno} ficou com media final ${media} e foi reprovado!!`);
}

//Usando Reduce para fazer a Soma do Array
// media =
//   notaAluno.reduce(function (soma, notaAtual) {
//     soma += notaAtual;
//     return soma;
//   }, 0) / 4;
