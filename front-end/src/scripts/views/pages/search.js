import ApiSource from '../../data/api-source';
import lomba from '../templates/lomba';

const Search = {
  async render() {
    return `
    <search-bar></search-bar>
        `;
  },
  async afterRender() {
    const data = await ApiSource.getPost();
    const itemContainer = document.querySelector('.search__container');
    data.data.forEach((item) => {
      itemContainer.innerHTML += lomba(item);
    });
  },
};

export default Search;
