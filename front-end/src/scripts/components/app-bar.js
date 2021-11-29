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
              <a href="#home" class="nav__link">
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
        <img src="${profil}" class="nav__img" alt="profil" />
      </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
