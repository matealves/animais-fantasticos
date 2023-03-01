import debounce from "./debounce.js";
export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    // bind para referenciar objeto como this da callback
    // debounce evita que a função seja ativada milhares de vezes
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Pega a distância de cada item em relação ao topo
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distância em cada objeto
  // em ralação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // Parar animação
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
