let logradouro = document.getElementById("logradouro");
let complemento = document.getElementById("complemento");
let bairro = document.getElementById("bairro");
let localidade = document.getElementById("localidade");
let inputBusca = document.getElementById("inputBusca");

async function viaCEP() {
  cep = inputBusca.value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      return response.json();
    })
    .then((cep) => {
      logradouro.innerHTML = `Logradouro: ${cep.logradouro}`;
      complemento.innerHTML = `Complemento: ${cep.complemento}`;
      bairro.innerHTML = `Bairro: ${cep.bairro}`;
      localidade.innerHTML = `Localidade / UF: ${cep.localidade} / ${cep.uf}`;
    });
}
