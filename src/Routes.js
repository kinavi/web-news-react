import App from './App';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import CmsPage from './pages/CmsPage';
import NoMatch from './pages/NoMatch';

export default [
  {
    ...App,
    routes: [
      {
        ...MainPage,
        path: '/',
        exact: true,
      },
      {
        ...CmsPage,
        path: '/cms',
      },
      {
        ...NewsPage,
        path: '/news/:id',
      },
      {
        ...NoMatch,
        path: '*',

      },

    ],
  },
];
