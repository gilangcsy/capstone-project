class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="contact section container" id="contact">
    <div class="contact__container grid">
      <div class="contact__content">
        <h2 class="section__title contact__title">Hubungi Kami</h2>
        <p>
          hubungi kami jika kamu punya kendala dalam mencari lomba, syarat dan keritik kami tampung juga loh.
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
          Location: <span class="contact__information">Jakarta</span>
        </li>
      </div>

      <div class="contact__content">
        <a href="mailto: lombaku@gmail.com" class="button">Hubungi Kami</a>
      </div>
    </div>
  </section>
        `;
  }
}

customElements.define('contact-bar', Contact);
