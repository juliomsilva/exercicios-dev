class Filme {
  nome;
  anoDeLancamento;
  diretor;
}

Filme.nome = "Os vingadores";
Filme.anoDeLancamento = "2012";
Filme.diretor = "Joss Whedon";

document.write(`<p>${Filme.nome}</p>`);
document.write(`<p>${Filme.anoDeLancamento}</p>`);
document.write(`<p>${Filme.diretor}</p>`);
