import Dogs from './pages/Dogs';
import Favorites from './pages/Favs';
import Home from './pages/Home';

export default [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    path: '/dogs/:dog',
    component: Dogs
  }
  // {
  //   path: '/favorites',
  //   component: Favorites
  // }
];
