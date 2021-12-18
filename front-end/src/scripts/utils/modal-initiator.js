const ModalInitiator = {
  init({
    buttonLogin,
    buttonRegister,
    buttonCloseRegister,
    buttonCloseLogin,
    modalRegister,
    modalLogin,
  }) {
    buttonRegister.addEventListener('click', (event) => {
      this._toggleDrawerRegister(event, modalRegister);
    });
    buttonLogin.addEventListener('click', (event) => {
      this._toggleDrawerLogin(event, modalLogin);
    });
    buttonCloseRegister.addEventListener('click', (event) => {
      this._closeDrawerRegister(event, modalRegister);
    });
    buttonCloseLogin.addEventListener('click', (event) => {
      this._closeDrawerLogin(event, modalLogin);
    });
  },

  _toggleDrawerRegister(event, modalRegister) {
    event.preventDefault();
    event.stopPropagation();
    modalRegister.classList.toggle('is-open');
  },

  _toggleDrawerLogin(event, modalLogin) {
    event.preventDefault();
    event.stopPropagation();
    modalLogin.classList.toggle('is-open');
  },

  _closeDrawerRegister(event, modalRegister) {
    event.preventDefault();
    event.stopPropagation();
    modalRegister.classList.remove('is-open');
  },

  _closeDrawerLogin(event, modalLogin) {
    event.preventDefault();
    event.stopPropagation();
    modalLogin.classList.remove('is-open');
  },
};

export default ModalInitiator;
