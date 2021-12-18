import UrlParser from '../../routes/url-parser';
import ApiSource from '../../data/api-source';
import postDetail from '../templates/detail';

const Detail = {
  async render() {
    return `
    <section class="section container detail" id="detail">
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await ApiSource.getDetail(url.id);
    // const detail = data;
    const detailContainer = document.querySelector('.detail');
    detailContainer.innerHTML = postDetail(data);
  },
};

export default Detail;
