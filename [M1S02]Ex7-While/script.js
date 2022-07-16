var contador = 1,
  votos,
  pessoas = 0;

while (contador <= 4) {
  votos = window.prompt(`Usuário ${contador}, classifique Stranger Things: (Use apenas Ruim, Bom ou Excelente`).toLowerCase();

  switch (votos) {
    case "ruim":
      contador++;
      pessoas++;

      break;

    case "bom":
      contador++;
      break;

    case "excelente":
      contador++;
      break;

    default:
      window.alert("Utilize apenas Ruim, Bom ou Excelente");
      break;
  }
}
console.log(`Votos com a classificação ruim: ${pessoas}`);
