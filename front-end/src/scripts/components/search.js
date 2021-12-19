class Search extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="section container search" id="search">
    <div class="search__input">
    <div class="search_box">
      <div class="search_field">
        <input type="text" class="input" placeholder="Search" id="searchPost">
        <i class='bx bx-search-alt search__icon'></i>
      </div>
      <div class="dropdown">
      <div class="default_option">All</div>  
        <ul>
          <li>All</li>
          <li>Lomba</li>
          <li>Event</li>
        </ul>
      </div>
    </div>
    </div>

    <div class="search__container grid">
    </div>
    </section>
        `;
  }
}

customElements.define('search-bar', Search);

//searchPost - searchbar
//.search__container - charactter
