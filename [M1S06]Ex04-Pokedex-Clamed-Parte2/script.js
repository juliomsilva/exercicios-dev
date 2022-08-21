function buscarPokemon() {
  let pokeInput = document.getElementById("pokeInput").value;
  let nomePokemon = document.getElementById("nomePokemon");
  let alturaPokemon = document.getElementById("alturaPokemon");
  let pesoPokemon = document.getElementById("pesoPokemon");

  let buscarPokemon = pokeInput.toLowerCase();
  const myRequest = new XMLHttpRequest();
  myRequest.responseType = "json";
  myRequest.open("GET", `https://pokeapi.co/api/v2/pokemon/${buscarPokemon}`);

  myRequest.onload = () => {
    let habi = document.getElementById("habi");
    let habilidades = myRequest.response.abilities;
    let ul = document.getElementById("ul");
    ul.innerHTML = "";
    habi.innerHTML = "Habilidades";
    habilidades.forEach((item) => {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(item.ability.name));
      ul.appendChild(li);
    });
    pokeimg = document.getElementById("pokemon");
    let sprites = myRequest.response.sprites;
    let imgpokemon = sprites.front_default;
    pokeimg.setAttribute("src", imgpokemon);
    nomePokemon.innerHTML = `Nome: ${myRequest.response.name}`;
    alturaPokemon.innerHTML = `Altura: ${myRequest.response.height}`;
    pesoPokemon.innerHTML = `Peso: ${myRequest.response.weight}`;
  };

  myRequest.send();
}
