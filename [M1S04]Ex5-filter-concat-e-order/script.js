let array1 = [1, 3, 4, 5, 3, 7];
let array2 = [1, 2, 6, 4, 8, 5];

arrayNovo = array1.concat(array2);

document.write(arrayNovo);

arrayFiltrado = arrayNovo.filter((item, index) => arrayNovo.indexOf(item) == index);

arrayFiltrado.sort();

document.write(`<br/><br/> ${arrayFiltrado}`);
