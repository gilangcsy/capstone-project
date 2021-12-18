import img from '../../../public/image/event3.jpg';

const detail = (data) => `
    <div class="detail__container grid">
    <div class="detail__data">
    <h2 class="detail__title">${data.title}</h2>
    <p class="detail__user"> By Ayub Maulana</p>
    <p class="detail__description">
    ${data.description}
    </p>
    <span class="detail__category">${data.category}</span>
    </div>
    <img src="${img}" class="detail__img" alt="img detail" />
    </div>
`;

export default detail;
