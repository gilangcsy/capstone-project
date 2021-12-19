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
    const response = await fetch(API_ENDPOINT.SEARCH(title));
    return response.json();
  }
}
export default ApiLombaku;
