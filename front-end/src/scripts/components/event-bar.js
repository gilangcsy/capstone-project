import img1 from '../../public/image/event1.jpg';
import img2 from '../../public/image/event2.jpg';
import img3 from '../../public/image/event3.jpg';

class Event extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
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
          `;
  }
}

customElements.define('event-bar', Event);
