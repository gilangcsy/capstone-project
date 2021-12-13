import heroImage from '../../../public/image/hero.png';
import img1 from '../../../public/image/event1.jpg';
import img2 from '../../../public/image/event2.jpg';
import img3 from '../../../public/image/event3.jpg';
import heroImage1 from '../../../public/image/hero2.png';
import heroImage2 from '../../../public/image/hero3.png';

const Home = {
  async render() {
    return `
    <section class="home" id="home">
    <div class="home__container container grid">
    <img
      src="${heroImage}"
      class="home__img"
      alt="hero image"
    />
    <div class="home__data">
      <h1 class="home__title">Bingung Cari Informasi Lomba?</h1>
      <h2 class="home__sub-title">Cari Disini Aja !</h2>
      <p class="home__description">
        Dapatkan informasi seputar dunia Lomba secara terupdate dari kami
        melalui web Lombaku.
      </p>
      <a href="#/search" class="button button--flex">
      Temukan <i class="bx bx-right-arrow-circle button__icon"></i
    ></a>
    </div>
    </div>
     </section>


     <section class="section container" id="event">
      <h2 class="section__title title__lomba">Lomba & Event Populer</h2>

      <div class="event__nav">
        <span class="event__item" data-filter="all">All</span>
        <span class="event__item" data-filter=".lomba">Lomba</span>
        <span class="event__item" data-filter=".event">Event</span>
      </div>

      <div class="event__container grid">
      <div class="event__content mix lomba">
      <a href=""
        ><img src="${img1}" alt="lomba card" class="event__img"
      /></a>
      <div class="event__data">
        <span class="event__subtitle"> lomba </span>
        <a href="#"
          ><h2 class="event__title">
            ini adalah bagian deskripsi lomba/event
          </h2></a
        >
        <a href="#" class="button button__link">View Detail</a>
      </div>
    </div>

        <div class="event__content mix lomba">
          <a href=""
            ><img src="${img2}" alt="lomba card" class="event__img"
          /></a>
          <div class="event__data">
            <span class="event__subtitle"> lomba </span>
            <a href="#"
              ><h2 class="event__title">
                ini adalah bagian deskripsi lomba/event
              </h2></a
            >
            <a href="#" class="button button__link">View Detail</a>
          </div>
        </div>

        <div class="event__content mix lomba">
          <a href=""
            ><img src="${img3}" alt="lomba card" class="event__img"
          /></a>
          <div class="event__data">
            <span class="event__subtitle"> lomba </span>
            <a href="#"
              ><h2 class="event__title">
                ini adalah bagian deskripsi lomba/event
              </h2></a
            >
            <a href="#" class="button button__link">View Detail</a>
          </div>
        </div>

        <div class="event__content mix event">
        <a href=""
          ><img src="${img1}" alt="lomba card" class="event__img"
        /></a>
        <div class="event__data">
          <span class="event__subtitle"> lomba </span>
          <a href="#"
            ><h2 class="event__title">
              ini adalah bagian deskripsi lomba/event
            </h2></a
          >
          <a href="#" class="button button__link">View Detail</a>
        </div>
      </div>

      <div class="event__content mix event">
        <a href=""
          ><img src="${img2}" alt="lomba card" class="event__img"
        /></a>
        <div class="event__data">
          <span class="event__subtitle"> lomba </span>
          <a href="#"
            ><h2 class="event__title">
              ini adalah bagian deskripsi lomba/event
            </h2></a
          >
          <a href="#" class="button button__link">View Detail</a>
        </div>
      </div>

      <div class="event__content mix event">
        <a href=""
          ><img src="${img3}" alt="lomba card" class="event__img"
        /></a>
        <div class="event__data">
          <span class="event__subtitle"> lomba </span>
          <a href="#"
            ><h2 class="event__title">
              ini adalah bagian deskripsi lomba/event
            </h2></a
          >
          <a href="#" class="button button__link">View Detail</a>
        </div>
      </div>
      </div>
    </section>


    <section class="section container" id="about">
    <div class="about__container grid about__top">
      <div class="about__data">
        <h2 class="about__title section__title ">
          Temukan Lomba & event <br />
          Sesuai dengan Passionmu
        </h2>
        <p class="about__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nisi corrupti asperiores saepe eos. Cum unde quisquam totam fugiat
          aperiam!
        </p>
      </div>
      <img src="${heroImage1}" class="about__img home__img" alt="hero about" />
    </div>

    <div class="about__container grid">
      <div class="about__data">
        <h2 class="about__title section__title ">
          Temukan Lomba & event <br />
          Sesuai dengan Passionmu
        </h2>
        <p class="about__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nisi corrupti asperiores saepe eos. Cum unde quisquam totam fugiat
          aperiam!
        </p>
      </div>
      <img src="${heroImage2}" class="about__img__bot home__img" alt="hero about" />
    </div>
  </section>

  <section class="contact section container" id="contact">
    <div class="contact__container grid">
      <div class="contact__content">
        <h2 class="section__title contact__title">Hubungi Kami</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          odit blanditiis libero. Voluptatum, quod ullam!
        </p>
      </div>

      <div class="contact__content grid">
        <li class="contact__address">
          telp: <span class="contact__information">0812 - 3456 - 7890</span>
        </li>
        <li class="contact__address">
          Email:
          <span class="contact__information">lombaku@dicoding.com</span>
        </li>
        <li class="contact__address">
          Location: <span class="contact__information">Indonesia</span>
        </li>
      </div>

      <div class="contact__content">
        <a href="#" class="button">Hubungi Kami</a>
      </div>
    </div>
  </section>
      `;
  },

  async afterRender() {
    // const data = await RestaurantDbSource.getRestaurantList();
    // const restaurantsContainer = document.querySelector('#list-restaurants');
    // data.restaurants.forEach((restaurant) => {
    //   restaurantsContainer.innerHTML += restoTemplate(restaurant);
    // });
  },
};

export default Home;
