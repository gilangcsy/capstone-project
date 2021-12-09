import 'regenerator-runtime';
import MicroModal from 'micromodal';
import mixitup from 'mixitup';
import './components/app-bar';
import './components/hero-bar';
import './components/modal';
import './components/event-bar';
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/modal.css';
import '../styles/event.css';
import register from '../scripts/utils/register';

MicroModal.init();

const mixer = mixitup('.event__container', {
  selectors: {
    target: '.event__content',
  },
  animation: {
    duration: 400,
  },
});
