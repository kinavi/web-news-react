import App from './App'
import ListNews from './pages/ListNews'
import News from './pages/News'
import CMS from './pages/CMS'

export default [
    {
      ...App,
      routes: [
        {
          ...ListNews,
          path: "/",
          exact: true
        },
        {
          ...CMS,
          path: "/cms",
        }
      ]
    }
];