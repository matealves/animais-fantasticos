import ScrollSuave from "./modules/ScrollSuave.js";
import Accordion from "./modules/Accordion.js";
import TabNav from "./modules/Tabnav.js";
import Modal from "./modules/Modal.js";
import Tooltip from "./modules/Tooltip.js";
import initDropdownMenu from "./modules/DropdownMenu.js";
import initMenuMobile from "./modules/MenuMobile.js";
import initFuncionamento from "./modules/Funcionamento.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import ScrollAnima from "./modules/ScrollAnima.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();

fetchAnimais("../../animaisapi.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
