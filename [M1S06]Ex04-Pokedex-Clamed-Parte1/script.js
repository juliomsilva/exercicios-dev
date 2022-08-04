const myRequest = new XMLHttpRequest();
myRequest.responseType = "json";
myRequest.open("GET", `https://pokeapi.co/api/v2/pokemon/pikachu`);

myRequest.onload = () => {
  pokeimg = document.getElementById("pokemon");
  let sprites = myRequest.response.sprites;
  let imgpokemon = sprites.front_default;
  pokeimg.setAttribute("src", imgpokemon);
  console.log(`Nome: ${myRequest.response.name}`);
  console.log(`Altura: ${myRequest.response.height}`);
  console.log(`Peso: ${myRequest.response.weight}`);
};

myRequest.send();
