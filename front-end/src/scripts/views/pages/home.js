import ApiSource from '../../data/api-source';
import lomba from '../templates/lomba';

const Home = {
  async render() {
    return `
    <hero-bar></hero-bar>
    <event-bar></event-bar>
    <about-bar></about-bar>
    <contact-bar></contact-bar>
      `;
  },

  async afterRender() {
    const data = await ApiSource.getPost();
    const itemContainer = document.querySelector('.event__container');
    data.data.forEach((item) => {
      itemContainer.innerHTML += lomba(item);
    });
  },
};

export default Home;
