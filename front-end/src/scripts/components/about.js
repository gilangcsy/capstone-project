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
        `;
  }
}

customElements.define('about-bar', About);
