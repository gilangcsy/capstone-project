import 'regenerator-runtime';
import MicroModal from 'micromodal';
import mixitup from 'mixitup';
import './components/app-bar';
// import './components/hero-bar';
import './components/modal';
// import './components/event-bar';
// import './components/about';
// import './components/contact';
import './components/footer';
import '../styles/main.css';
import App from './views/app';
// import register from '../scripts/utils/register';

// MicroModal.init();

// const mixer = mixitup('.event__container', {
//   selectors: {
//     target: '.event__content',
//   },
//   animation: {
//     duration: 400,
//   },
// });
// add navbar shadow when scroll

function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// add button scroll up
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// singgle app
const app = new App({
  buttonLogin: document.querySelector('#login-btn'),
  buttonRegister: document.querySelector('.register-btn'),
  buttonCloseRegister: document.querySelector('#close-btn-register'),
  buttonCloseLogin: document.querySelector('#close-btn-login'),
  modalRegister: document.querySelector('#modal-1'),
  modalLogin: document.querySelector('#modal-2'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});