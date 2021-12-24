import ApiSource from '../../data/api-source';
import lomba from '../templates/lomba';
import API_ENDPOINT from '../../global/endpoint';

const Search = {
  async render() {
    return `
    <search-bar></search-bar>
        `;
  },
  async afterRender() {
    const searchIcon = document.querySelector('.search__icon');

    const itemContainer = document.querySelector('.search__container');
    const data = await ApiSource.getPost();
    const displayPost = () => {
      data.data.forEach((data) => {
        itemContainer.innerHTML += lomba(data);
      });
    };

    searchIcon.addEventListener('click', () => {
      const search = document.querySelector('#searchPost');
      console.log(search.value);
      fetch(API_ENDPOINT.SEARCH + search.value)
        .then((response) => response.json())
        .then((response) => {
          const posts = response.data;
          let post = '';
          posts.forEach((p) => (post += lomba(p)));
          itemContainer.innerHTML = post;
        });
    });

    displayPost();
  },
};

export default Search;
