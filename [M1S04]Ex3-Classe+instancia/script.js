class Pessoa {
  nome;
  idade;
  cpf;
  anoAniversario;

  constructor(nome, idade, cpf, anoAniversario) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.anoAniversario = anoAniversario;
  }
  podeDirigir() {
    if (this.idade >= 18) {
      document.write(`<h1>O cidadão: ${this.nome} tem ${this.idade} anos então está apto para dirigir</h1>`);
    } else {
      document.write(`<h1>O cidadão: ${this.nome} tem ${this.idade} anos então não está apto para dirigir</h1>`);
    }
  }
}
const Cidadao = new Pessoa("Julio", 26, "803.120.144.85", 1996);

Cidadao.podeDirigir();
