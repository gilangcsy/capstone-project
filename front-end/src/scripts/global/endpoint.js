import CONFIG from './config';

const API_ENDPOINT = {
  POST: `${CONFIG.BASE_URL}posts`,
  DETAIL: (id) => `${CONFIG.BASE_URL}posts?${id}=1`,
};

export default API_ENDPOINT;
