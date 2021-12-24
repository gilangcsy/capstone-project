import img from '../../../public/image/event3.jpg';

const lomba = (data) => `
<div class="event__content swiper-slide ">
<div class="event__img">
  <img src="${img}" alt="lomba card"/>
</div>
<div class="event__data">
  <div class="event__desc">
    <a href="#"><h2 class="event__title truncate__title">${data.title}</h2></a>
    <span class="event__subtitle truncate__desc"> ${data.category} </span>
  </div>
  <a href="#/detail/${data.id}" class="button__link button--flex">
  <i class="bx bx-right-arrow-circle button__icon-card"></i>
  </a>
</div>
</div>
`;

export default lomba;
