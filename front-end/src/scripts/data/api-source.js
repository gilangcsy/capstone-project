import API_ENDPOINT from '../global/endpoint';

class ApiLombaku {
  static async getPost() {
    const response = await fetch(API_ENDPOINT.POST);
    return response.json();
  }
  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
export default ApiLombaku;
