import App from './App';
import ListNews from './pages/ListNews';
import News from './pages/News';
import CMS from './pages/CMS';
import AddNew from './pages/AddNews';
import EditNews from './pages/EditNews';
import NoMatch from './pages/NoMatch';

export default [
  {
    ...App,
    routes: [
      {
        ...ListNews,
        path: '/',
        exact: true,
      },
      {
        ...CMS,
        path: '/cms',
        routes: [
          {
            ...AddNew,
            path: '/cms/add',
          },
          {
            ...EditNews,
            path: '/cms/edit/:id',
          },
        ],
      },
      // {
      //   ...AddNew,
      //   path:"/add"
      // },
      {
        ...EditNews,
        path: '/edit/:id',
      },
      {
        ...News,
        path: '/news/:id',
      },
      {
        ...NoMatch,
        path: '*',

      },

    ],
  },
];
