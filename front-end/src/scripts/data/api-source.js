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
    // const response = await fetch(API_ENDPOINT.SEARCH(title));
    // return response.json();
    try {
      const options = {
        method: 'POST',
        body: title,
      };
      const response = await fetch(API_ENDPOINT.SEARCH(title), options);
      return response.json();
    } catch (error) {
      showResponseMessage(error);
    }
  }

  static async addPost(data) {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(data),
      };
      const response = await fetch(API_ENDPOINT.POST, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
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
      console.log(responseJson);
      showResponseMessage(responseJson.message);
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
  window.location.replace('http://localhost:8080/');
};
export default ApiLombaku;
