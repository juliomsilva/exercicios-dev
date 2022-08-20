let nome = window.prompt("Digite o seu nome:");
let sobrenome = window.prompt("Digite o seu sobrenome:");
let idade = parseInt(window.prompt("Digite a sua idade: "));

document.write(`Eu, ${nome} ${sobrenome} possuo ${idade} anos, e nasci em ${2022 - idade}`);
