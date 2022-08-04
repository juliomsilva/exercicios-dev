let pesquisar = document.querySelector("button");
pesquisar.addEventListener("click", function () {
  let inputPesquisar = document.querySelector(".input__search").value;
  inputPesquisar = inputPesquisar.toLowerCase();
  const myRequest = new XMLHttpRequest();
  myRequest.responseType = "json";
  myRequest.open("GET", `https://pokeapi.co/api/v2/pokemon/${inputPesquisar}`);
  myRequest.send();
  myRequest.onload = () => {
    let imgpoke = document.querySelector(".pokemonimage");
    let sprites = myRequest.response.sprites;
    let imgpokemon = sprites.front_default;
    imgpoke.setAttribute("src", imgpokemon);
    let idPokemon = document.querySelector(".pokemonnumber");
    idPokemon.innerHTML = myRequest.response.id;
    let namePokemon = document.querySelector(".pokemonname");
    namePokemon.innerHTML = myRequest.response.name;
    let tipoPokemon = document.getElementById("pokemontype");
    let pokeType = myRequest.response.types;
    tipoPokemon.innerHTML = "";
    pokeType.forEach((item) => {
      tipoPokemon.innerHTML += `<p>${item.type.name}</p>`;
    });

    let pesoPokemon = document.getElementById("weight");
    pesoPokemon.innerHTML = myRequest.response.weight;
    let pokeAbility = myRequest.response.abilities;
    let ul = document.getElementById("ability");
    ul.innerHTML = "";
    pokeAbility.forEach((item) => {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(item.ability.name));
      ul.appendChild(li);
    });
  };
});
