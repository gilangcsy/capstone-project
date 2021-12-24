import CONFIG from './config';

const API_ENDPOINT = {
  POST: `${CONFIG.BASE_URL}posts`,
  DETAIL: (id) => `${CONFIG.BASE_URL}posts?id=${id}`,
  SEARCH: (title) => `${CONFIG.BASE_URL}posts?title=${title}`,
  REGISTER: `${CONFIG.BASE_URL}users/`,
  LOGIN: `${CONFIG.BASE_URL}auth`,
};

export default API_ENDPOINT;
