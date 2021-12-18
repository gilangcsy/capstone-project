import home from '../views/pages/home';
import search from '../views/pages/search';
import detail from '../views/pages/detail';

const routes = {
  '/': home,
  '/home': home,
  // '/user': user,
  '/search': search,
  '/detail/:id': detail,
};

export default routes;
