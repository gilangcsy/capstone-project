class Modal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container micromodal-slide" id="modal-1"  data-micromodal-close>
    <div class="modal__bg" tabindex="1">
      <div class="modal__content" role="dialog" aria-labelledby="modal-1-title" >
        <div id="close-btn" class="close__modal" tabindex="-1" data-micromodal-close>
          <i class="bx bx-x-circle"></i>
        </div>
        <div class="modal__title" id="modal-1-title" tabindex="-1">Daftar</div>
        <form action="#" id="modal-1-content">
          <div class="user__details">
            <div class="input__box">
              <span class="details">Nama Lengkap</span>
              <input type="text" placeholder="Masukkan Nama Lengkap" required />
            </div>
            <div class="input__box">
              <span class="details">Email</span>
              <input type="email" placeholder="Masukkan Email" required />
            </div>
            <div class="input__box">
              <span class="details">Alamat</span>
              <input type="text" placeholder="Masukkan alamat" required />
            </div>
            <div class="input__box">
              <span class="details">Tanggal Lahir</span>
              <input
                type="text"
                placeholder="Masukkan Tanggal Lahir"
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Tempat Lahir</span>
              <input type="text" placeholder="Masukkan Tempat Lahir" required />
            </div>
            <div class="input__box">
              <span class="details">Kampus</span>
              <input type="text" placeholder="Masukkan Asal Kampus" required />
            </div>
          </div>
          <div class="gender__details">
            <span class="gender__title">Gender</span>
            <div class="category">
              <label for="">
                <span class="dot one"></span>
                <span class="gender">Laki-laki</span>
              </label>
              <label for="">
                <span class="dot one"></span>
                <span class="gender">Perempuan</span>
              </label>
            </div>
          </div>
          <a href="" class="button"> daftar</a>
        </form>
      </div>
    </div>
</div>
          `;
  }
}

customElements.define('modal-bar', Modal);
