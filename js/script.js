import ScrollSuave from "./modules/ScrollSuave.js";
import Accordion from "./modules/Accordion.js";
import TabNav from "./modules/Tabnav.js";
import Modal from "./modules/Modal.js";
import Tooltip from "./modules/Tooltip.js";
import DropdownMenu from "./modules/DropdownMenu.js";
import MenuMobile from "./modules/MenuMobile.js";
import Funcionamento from "./modules/Funcionamento.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import ScrollAnima from "./modules/ScrollAnima.js";

import { SlideNav } from "./modules/Slide.js";

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
// scrollAnima.stop();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

fetchAnimais("./animaisapi.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

// Slide config
const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();

slide.addControl(".custom-controls");
