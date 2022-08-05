let arrayPositivos = [];

let filtrarPositivos = (array = []) => {
  for (const numero of array) {
    if (numero >= 0) {
      arrayPositivos.push(numero);
    }
  }
  return arrayPositivos;
};
document.write(filtrarPositivos([-1, -2, 3, 4, 10])); // Será mostrado apenas 3, 4, 10
