class Modal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <!-- Register Modal -->

    <div class="container micromodal-slide" id="modal-1"  data-micromodal-close>
    <div class="modal__bg" tabindex="1">
      <div class="modal__content" role="dialog" aria-labelledby="modal-1-title" >
        <div id="close-btn" class="close__modal" tabindex="-1" data-micromodal-close>
          <i class="bx bx-x-circle"></i>
        </div>
        <div id="modal-1-title" tabindex="-1">
        <h2 class="modal__title">Daftar</h2>
        <p>Sudah punya Akun ? <a href="#">masuk disini.</a></p>
        </div>
        <form action="#" id="modal-1-content">
          <div class="user__details">
            <div class="input__box">
              <span class="details">Nama Lengkap</span>
              <input type="text" id="nama" placeholder="Masukkan Nama Lengkap" required />
            </div>
            <div class="input__box">
              <span class="details">Email</span>
              <input type="email" id="email" placeholder="Masukkan Email" required />
            </div>
            <div class="input__box">
              <span class="details">Alamat</span>
              <input type="text" id="alamat" placeholder="Masukkan alamat" required />
            </div>
            <div class="input__box">
              <span class="details">Tanggal Lahir</span>
              <input
                type="date"
                id="tanggal"
                placeholder="Masukkan Tanggal Lahir"
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Tempat Lahir</span>
              <input type="text" id="lahir" placeholder="Masukkan Tempat Lahir" required />
            </div>
            <div class="input__box">
              <span class="details">Kampus</span>
              <input type="text" id="kampus" placeholder="Masukkan Asal Kampus" required />
            </div>
            <div class="input__box">
            <span class="details">Password</span>
            <input type="password" id="password" placeholder="Masukkan password" required />
          </div>
          <div class="input__box">
            <span class="details">Konfirmasi Password</span>
            <input
              type="password"
              id="confpassword"
              placeholder="Masukkan konfirmasi password"
              required
            />
          </div>
          <div class="gender__details">
          <span class="gender__title">Jenis Kelamin</span>
          <div class="category">
            <label class="man__label" 
              >Laki-Laki
              <input type="radio" name="gender" />
              <span class="checkmark"></span>
            </label>
            <label
              >Perempuan
              <input type="radio" name="gender" value="" checked="checked" />
              <span class="checkmark"></span>
            </label>
          </div>
          </div>
          </div>
          <button class="button" id="add-user">Daftar</button>
        </form>
      </div>
    </div>
</div>

<!-- Login Modal -->

<div class="container micromodal-slide" id="modal-2" data-micromodal-close>
<div class="modal__bg" tabindex="1">
  <div
    class="modal__content"
    role="dialog"
    aria-labelledby="modal-1-title"
  >
    <div
      id="close-btn"
      class="close__modal"
      tabindex="-1"
      data-micromodal-close
    >
      <i class="bx bx-x-circle"></i>
    </div>
    <div id="modal-1-title" tabindex="-1">
      <h2 class="modal__title">Login</h2>
      <p>Belum punya Akun ? <a href="#">Daftar disini.</a></p>
    </div>
    <form action="#" id="modal-2-content">
      <div class="user__details__login">
        <div class="input__box__login">
          <span class="details">Email</span>
          <input type="email" placeholder="Masukkan Email" required />
        </div>
        <div class="input__box__login">
          <span class="details">Password</span>
          <input
            type="password"
            placeholder="Masukkan password"
            required
          />
        </div>
      </div>
      <a href="" class="button">Login</a>
    </form>
  </div>
</div>
</div>
          `;
  }
}

customElements.define('modal-bar', Modal);
