import heroImage1 from '../../public/image/hero2.png';
import heroImage2 from '../../public/image/hero3.png';

class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="section container" id="about">
      <div class="about__container grid about__top">
        <div class="about__data">
          <h2 class="about__title section__title ">
          Cari Lomba 
          sesuai dengan passionmu
          </h2>
          <p class="about__description">
          kamu bingung cari lomba dengan berbagai informasi yang ada di luar sana?, cari aja di website ini, siapa tau kamu menemukan lomba yang kamu cari loh.
          </p>
        </div>
        <img src="${heroImage1}" class="about__img home__img" alt="hero about" />
      </div>

      <div class="about__container grid">
        <div class="about__data">
          <h2 class="about__title section__title ">
            Lagi cari event?
          </h2>
          <p class="about__description">
          kamu bisa cari event sesuai dengan passion kamu juga disini, kamu bisa menghubungi orang yang membuat event tersebut pada posternya.
          </p>
        </div>
        <img src="${heroImage2}" class="about__img__bot home__img" alt="hero about" />
      </div>
    </section>
        `;
  }
}

customElements.define('about-bar', About);
