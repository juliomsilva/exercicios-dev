class Serie {
  Nome;
  Lancamento;
  Temporadas;
  constructor(Nome, Lancamento, Temporadas) {
    this.Nome = Nome;
    this.Lancamento = Lancamento;
    this.Temporadas = Temporadas;
  }
}
let ano, nome;

for (let i = 1; i <= 4; i++) {
  let Nome = window.prompt(`Digite o nome da ${i} serie`);
  let Lancamento = parseInt(window.prompt("Digite o ano em que a série lançou:"));
  let Temporadas = parseInt(window.prompt("Quantas temporadas a serie tem?: "));

  let serie = new Serie(Nome, Lancamento, Temporadas);
  if (i == 1) {
    ano = serie.Lancamento;
    nome = serie.Nome;
  } else if (serie.Lancamento < ano) {
    ano = serie.Lancamento;
    nome = serie.nome;
  }
}
let hNome = document.getElementById("Nome");
let hAno = document.getElementById("Ano");

hNome.innerHTML = nome;
hAno.innerHTML = ano;
