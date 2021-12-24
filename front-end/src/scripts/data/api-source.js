import API_ENDPOINT from '../global/endpoint';

class ApiLombaku {
  static async getPost() {
    const response = await fetch(API_ENDPOINT.POST);
    return response.json();
  }
  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    console.log(response);
    return response.json();
  }
  static async searchPost(title) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(title));
      const responseJson = await response.json();
      console.log(response);
      showResponseMessage(responseJson.message);
    } catch (error) {
      showResponseMessage(error);
    }
    return response.json();
  }

  static async addPost(data) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data),
      };
      console.log(data);
      const response = await fetch(API_ENDPOINT.POST, options);
      console.log(response);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      window.location.replace('http://localhost:8080/#/search');
    } catch (error) {
      showResponseMessage(error);
    }
  }
  static async login(user) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user),
      };
      const response = await fetch(API_ENDPOINT.LOGIN, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      // window.location.replace('http://localhost:8080/');
      seasonnMenu();
      closeModal();
    } catch (eror) {
      showResponseMessage(eror);
    }
  }
  static async register(user) {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      const response = await fetch(API_ENDPOINT.REGISTER, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      // window.location.replace('http://localhost:8080/');
    } catch (error) {
      showResponseMessage(error);
    }
  }
}
const showResponseMessage = (message = 'Check your internet connection') => {
  alert(message);
  // window.location.replace('http://localhost:8080/');
};
const seasonnMenu = () => {
  const menuLogin = document.querySelector('.menu__login');
  const menuUser = document.querySelector('.menu__user');
  const loginMobile = document.querySelector('.login__icon');
  menuLogin.classList.add('hide__menu');
  menuUser.classList.add('show__menu');
  loginMobile.classList.add('hide__menu');
};

const closeModal = () => {
  const modalRegister = document.querySelector('#modal-1');
  const modalLogin = document.querySelector('#modal-2');
  modalRegister.classList.remove('is-open');
  modalLogin.classList.remove('is-open');
};
export default ApiLombaku;
