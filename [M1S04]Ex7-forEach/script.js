let Reprovados = [];
let Aprovados = [];

let arrayAlunos = [
  {
    nome: "Carlos",
    media: 10,
  },
  {
    nome: "Julia",
    media: 8,
  },
  {
    nome: "Rayane",
    media: 6,
  },
  {
    nome: "Arthur",
    media: 5,
  },
];

arrayAlunos.forEach((item) => {
  if (item.media >= 7) {
    Aprovados.push(item);
  } else {
    Reprovados.push(item);
  }
});

if (Aprovados.length == arrayAlunos.length) {
  document.write("Parabéns a todos os alunos aprovados");
} else {
  document.write("<h1>Reprovados:</h1>");
  Reprovados.forEach((item) => {
    document.write(`<ul><li><h3>Aluno: ${item.nome}, Media: ${item.media}</h3></li></ul>`);
  });
}
