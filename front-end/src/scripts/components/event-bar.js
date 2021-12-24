class Event extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="section container mySwiper" id="event">
    <h2 class="section__title title__lomba">Lomba & Event Populer</h2>
    <div class="swiper">
      <div class="event__container grid swiper-wrapper">
      </div>
    </div>
  </section>
          `;
  }
}

customElements.define('event-bar', Event);
