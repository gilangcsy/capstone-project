import heroImage from '../../public/image/hero.png';

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
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
      <a href="" class="button button--flex">
      Temukan <i class="bx bx-right-arrow-circle button__icon"></i
    ></a>
    </div>
    </div>
     </section>
        `;
  }
}

customElements.define('hero-bar', Hero);
