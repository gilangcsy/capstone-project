import home from '../views/pages/home';
import search from '../views/pages/search';
import detail from '../views/pages/detail';
import post from '../views/pages/post';

const routes = {
  '/': home,
  '/home': home,
  // '/user': user,
  '/search': search,
  '/detail/:id': detail,
  '/post': post,
};

export default routes;
