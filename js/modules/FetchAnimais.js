import AnimaNumeros from "./AnimaNumeros.js";

export default function criarAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  // cria div com informações do total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animationNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo JSON
  // e cria cada animal utilizando createAnimal

  async function criarAnimais() {
    try {
      // Espera resposta e transforma em JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      // Após transformação de json, ativa as funções
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animationNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
