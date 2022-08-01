let media = (array) => {
  return array.reduce((soma, posAtual) => soma + posAtual, 0) / array.length;
};

console.log(media([1, 2, 3, 4, 5, 6]));
