import profil from '../../public/image/man.jpg';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav container">
      <a href="#" class="nav__logo">Lombaku.</a>
      <div class="nav__menu" id="nav__menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#" class="nav__link">
              <i class="bx bx-home-alt nav__icon"></i>
              <span class="nav__name">Home</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="#event" class="nav__link">
              <i class="bx bx-book-content nav__icon"></i>
              <span class="nav__name">event</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">
              <i class="bx bx-user nav__icon"></i>
              <span class="nav__name">About</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">
              <i class="bx bx-message-square-dots nav__icon"></i>
              <span class="nav__name">Contact Us</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="menu__user">
        <a href="#/post">
          <div class="menu__user__wrapper">
            <img class="img__user" src="${profil}" alt="" />
            <p>Ayub</p>
          </div>
        </a>
      </div>

      <div class="menu__login">
        <button class="login__btn" id="login-btn" data-micromodal-trigger="modal-2">Masuk</button>
        <button
          class="register__btn register-btn"
          id="register-btn"
          data-micromodal-trigger="modal-1"
        >
          Daftar
        </button>
      </div>
      <i class="bx bxs-arrow-from-left login__icon" id="register-btn"></i>
    </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
