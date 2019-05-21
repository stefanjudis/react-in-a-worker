import Dogs from './pages/Dogs';
import Home from './pages/Home';

export default [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    path: '/dogs/',
    component: Dogs
  }
];
