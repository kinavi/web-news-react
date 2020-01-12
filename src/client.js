import React from "react";
import ReactDOM from "react-dom";
import App from "./old/components/App.js";
import Routes from './Routes';
import { Provider } from 'react-redux'
import { BrowserRouter, StaticRouter, HashRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import storeFactory from './store/index'

import { renderRoutes } from 'react-router-config';
//---
import MyEditor from './components/MyEditor'
import AddNews from './components/Forms/AddNewsForm'
import ListNewsCms from './components/ListNewsCms'
import __INITIAL_STATE__ from '../data/initialState.json'

//import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import ListNews from './pages/ListNews'
const store = storeFactory(false, __INITIAL_STATE__)
//---
//const store = storeFactory(false, window.__PRELOADED_STATE__)

function RouteWithSubRoutes(route){
  return (
    <Route 
      path={route.path}
      render={props=>(
        <route.component {...props} routes={route.routes}/>
      )}
    />
  )
}

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          {/* <Switch>
            {Routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}
          </Switch> */}
        {/* <ListNewsCms/> */}
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
  );


//   <div>
//   <nav>
//     <ul>
//       <li>
//         <Link to='/'>Новости</Link>
//       </li>
//       <li>
//         <Link to='/cms'>CMS</Link>
//       </li>
//       {/* <li>
//         <Link to='/cms/add'></Link>
//       </li> */}
//     </ul>
//   </nav>
// </div>



// 

// //import { createStore } from 'redux'

// //import { App_R } from './components/redux/Reducers/App_R'

// import { HashRouter, Route, Switch, Link, NavLink, BrowserRouter  } from 'react-router-dom'

// import { matchRoutes, renderRoutes } from "react-router-config";


// import 'bootstrap/dist/css/bootstrap.min.css';

// //

// import storeFactory from './old/store/storeFactory'

// // const __INITIAL_STATE__ = {
// //     ListNews:[
// //         {
// //             id:1,
// //             title:"Новость №1",
// //             description:"Вообще, сам вопрос несложен. Нет ничего хитрого, чтобы расположить один блок, поверх другого. Но всё-таки, есть и в этом вопросе несколько моментов, достойных обсуждения. Я думаю найдутся люди, кому это будет интересно.Идея состоит в том, чтобы просто накладывать некоторый текст на изображение. Текст представлен в виде блоков переменной длины, предполагается что он будет расположен с левой стороны, с ровной заливкой вокруг текста. Например, как на этом изображении:"
// //         },{
// //             id:2,
// //             title:"awe",
// //             description:"awe"
// //         }
// //     ]
// // }

// const store = storeFactory(false, window.__INITIAL_STATE__)

// window.React = React
// window.store = store

// console.log('rendered from here...')


// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>
//     </Provider>
//     , 
//     document.getElementById("react-container")
// );


          