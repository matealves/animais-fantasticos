import ScrollSuave from "./modules/ScrollSuave.js";
import Accordion from "./modules/Accordion.js";
import TabNav from "./modules/Tabnav.js";
import Modal from "./modules/Modal.js";
import Tooltip from "./modules/Tooltip.js";
import initDropdownMenu from "./modules/DropdownMenu.js";
import initMenuMobile from "./modules/MenuMobile.js";
import initFuncionamento from "./modules/Funcionamento.js";
import initFetchAnimais from "./modules/FetchAnimais.js";
import initFetchBitcoin from "./modules/FetchBitcoin.js";
import initAnimacaoScroll from "./modules/ScrollAnimacao.js";

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

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init()

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
