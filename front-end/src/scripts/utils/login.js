import ApiSource from '../data/api-source';

function login() {
  document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.querySelector('.form__login');
    const loginBtn = document.querySelector('#button-login');
    loginBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const form = new FormData(formLogin);
      const formData = Object.fromEntries(form);
      ApiSource.login(formData);
    });
  });
}

export default login;
