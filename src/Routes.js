import App from './App'
import ListNews from './pages/ListNews'
import News from './pages/News'
import CMS from './pages/CMS'
import AddNew from './pages/AddNews' 
import EditNews from './pages/EditNews'
import NoMatch from './pages/NoMatch'

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
        {
          ...EditNews,
          path:"/edit/:id"
        },
        {
          ...News,
          path:"/news/:id"
        },
        {
          ...NoMatch,
          path:'*'
          
        }
        
      ]
    }
];