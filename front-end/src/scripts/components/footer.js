class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer section">
    <div class="footer__container container grid">
      <div class="footer__content">
        <a href="#" class="footer__logo">Lombaku</a>
        <p class="footer__description">
          Lorem, ipsum dolor. <br />
          loren
        </p>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">Our Services</h3>
        <ul class="footer__links">
          <li><a href="#" class="footer__link">Pricing</a></li>
          <li><a href="#" class="footer__link">Discounts</a></li>
          <li><a href="#" class="footer__link">Report a bug</a></li>
          <li><a href="#" class="footer__link">Terms of Service</a></li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">Our Comapny</h3>
        <ul class="footer__links">
          <li><a href="#" class="footer__link">Blog</a></li>
          <li><a href="#" class="footer__link">Our Mission</a></li>
          <li><a href="#" class="footer__link">Get In touch</a></li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">Community</h3>
        <ul class="footer__links">
          <li><a href="#" class="footer__link">Support</a></li>
          <li><a href="#" class="footer__link">Questions</a></li>
          <li><a href="#" class="footer__link">Customer help</a></li>
        </ul>
      </div>

      <div class="footer__social">
        <a href="#" class="footer__social-link" target="_blank"
          ><i class="bx bxl-facebook"></i
        ></a>
        <a href="#" class="footer__social-link" target="_blank"
          ><i class="bx bxl-instagram"></i
        ></a>
        <a href="#" class="footer__social-link" target="_blank"
          ><i class="bx bxl-twitter"></i
        ></a>
      </div>
    </div>

    <p class="footer__copy">&#169; Lombaku. All right reserved</p>
  </footer>
        `;
  }
}

customElements.define('footer-bar', Footer);
