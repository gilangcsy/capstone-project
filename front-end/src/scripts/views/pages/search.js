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
    data.data.forEach((data) => {
      itemContainer.innerHTML += lomba(data);
    });

    // search future
    // let searchData = [];

    const searchPost = document.getElementById('searchPost');
    const searchData = await ApiSource.searchPost();
    console.log(searchData);

    searchPost.addEventListener('keyup', (e) => {
      const searchTitle = e.target.value;
      // ApiSource.searchPost(searchTitle);
    });
    // console.log(searchPost);
  },
};

export default Search;
