class Search extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="section contianer" id="search">
    <h2>Tes Search</h2>
     </section>
        `;
  }
}

customElements.define('search-bar', Search);
