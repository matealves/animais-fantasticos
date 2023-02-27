export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    this.options = options || {
      behavior: "smooth",
      block: "start",
    };
    // definir o objeto como this
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
