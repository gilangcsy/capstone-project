import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import ModalInitiator from '../utils/modal-initiator';

// components
import '../components/hero-bar';
import '../components/event-bar';
import '../components/about';
import '../components/contact';
import '../components/search';

class App {
  constructor({
    buttonLogin,
    buttonRegister,
    buttonCloseRegister,
    buttonCloseLogin,
    modalRegister,
    modalLogin,
    content,
  }) {
    this._buttonLogin = buttonLogin;
    this._buttonCloseRegister = buttonCloseRegister;
    this._buttonCloseLogin = buttonCloseLogin;
    this._buttonRegister = buttonRegister;
    this._modalRegister = modalRegister;
    this._modalLogin = modalLogin;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    ModalInitiator.init({
      buttonLogin: this._buttonLogin,
      buttonRegister: this._buttonRegister,
      buttonCloseRegister: this._buttonCloseRegister,
      buttonCloseLogin: this._buttonCloseLogin,
      modalRegister: this._modalRegister,
      modalLogin: this._modalLogin,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
