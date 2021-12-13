import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  //   constructor() {}
  constructor({ content }) {
    // this._buttonMenu = buttonMenu;
    // this._buttonClose = buttonClose;
    // this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      //   buttonMenu: this._buttonMenu,
      //   buttonClose: this._buttonClose,
      //   drawer: this._drawer,
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
