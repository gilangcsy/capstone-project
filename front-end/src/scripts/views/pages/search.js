import ApiSource from '../../data/api-source';
import lomba from '../templates/lomba';

const Search = {
  async render() {
    return `
    <search-bar></search-bar>
        `;
  },
  // async afterRender() {
  //   const data = await ApiSource.getPost();
  //   const itemContainer = document.querySelector('.search__container');
  //   data.data.forEach((data) => {
  //     itemContainer.innerHTML += lomba(data);
  //   });

  //   const searchPost = document.getElementById('searchPost');
  //   const searchInput = await ApiSource.searchPost();

  //   searchPost.addEventListener('keyup', (e) => {
  //     const searchString = e.target.value;
  //     const filter = data.data.filter((data) => {
  //       return data.title.includes(searchString);
  //     });
  //     itemContainer.innerHTML = lomba(filter);
  //     console.log(filter);
  //   });
  // },

  async afterRender() {
    const searchIcon = document.querySelector('.search__icon');
    const search = document.querySelector('#searchPost');
    const itemContainer = document.querySelector('.search__container');
    let data = [];
    data = await ApiSource.getPost();
    data.data.forEach((data) => {
      itemContainer.innerHTML += lomba(data);
    });

    console.log(data);

    search.addEventListener('keyup', (e) => {
      const searchString = e.target.value;
      const filterString = data.data.filter((item) => {
        return item.title.includes(searchString);
      });
      itemContainer.innerHTML = lomba(filterString);
    });

    const displayPost = (posts) => {
      const htmlString = posts.map((post = { lomba }).join(''));
      itemContainer.innerHTML = htmlString;
    };
  },
};

export default Search;
