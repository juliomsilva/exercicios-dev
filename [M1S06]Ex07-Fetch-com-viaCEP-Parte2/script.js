let logradouro = document.getElementById("logradouro");
let complemento = document.getElementById("complemento");
let bairro = document.getElementById("bairro");
let localidade = document.getElementById("localidade");
let inputBusca = document.getElementById("inputBusca");

async function viaCEP() {
  cep = inputBusca.value;
  if (inputBusca.value == "") {
    inputBusca.style.borderColor = "red";
    window.alert("O cep não pode estar vazio, por favor preencha");
  } else if (cep.length != 8) {
    window.alert("O cep deve conter 8 caracteres");
  } else {
    inputBusca.style.borderColor = "grey";

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
}
