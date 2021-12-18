import img1 from '../../public/image/event1.jpg';

class Event extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="section container" id="event">
    <h2 class="section__title title__lomba">Lomba & Event Populer</h2>

    <div class="event__nav">
      <span class="event__item" data-filter=".lomba">Lomba</span>
      <span class="event__item" data-filter=".event">Event</span>
    </div>
    <div class="event__container grid">
    </div>
  </section>
          `;
  }
}

customElements.define('event-bar', Event);
