import App from './App'
import ListNews from './pages/ListNews'
import News from './pages/News'
import CMS from './pages/CMS'
import AddNew from './pages/AddNews' 
import EditNews from './pages/EditNews'

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
          // routes:[
          //   {
          //     component:EditNews,
          //     path:"/cms/add"
          //   }
          // ]
        },
        {
          ...AddNew,
          path:"/add"
        },
        
      ]
    }
];