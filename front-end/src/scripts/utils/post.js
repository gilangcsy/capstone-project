import ApiSource from '../data/api-source';

function post() {
  const userId = {
    userId: 'USR-9bac3yu48',
  };
  const form = document.querySelector('.post__content');
  const buttonAdd = document.getElementById('add-post');
  buttonAdd.addEventListener('click', function (e) {
    // e.preventDefault();
    // const formData = new FormData(form);
    // const formDataSerialized = Object.fromEntries(formData);
    // const data = { ...formDataSerialized, ...userId };
    // console.log(data);
    // ApiSource.addPost(data);
    try {
      e.preventDefault();
      const formData = new FormData(form);
      const formDataSerialized = Object.fromEntries(formData);
      const data = { ...formDataSerialized, ...userId };
      console.log(data);
      ApiSource.addPost(data);
    } catch (error) {
      console.log(error);
    }
  });
}

export default post;
