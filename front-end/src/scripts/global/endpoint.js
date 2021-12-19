import CONFIG from './config';

const API_ENDPOINT = {
  POST: `${CONFIG.BASE_URL}posts`,
  DETAIL: (id) => `${CONFIG.BASE_URL}posts?id=${id}`,
  SEARCH: (title) => `${CONFIG.BASE_URL}posts?title=${title}`,
};

export default API_ENDPOINT;
