import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import { App_R } from './components/redux/Reducers/App_R'

import { HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import AddNewsPage from './components/react/cms/AddNewPage/AddNewsPage'
import ListNewsPage from './components/react/cms/ListNews/ListNewsPage'

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom'

import storeFactory from './store/storeFactory'

// const __INITIAL_STATE__ = {
//     ListNews:[
//         {
//             id:1,
//             title:"Новость №1",
//             description:"Вообще, сам вопрос несложен. Нет ничего хитрого, чтобы расположить один блок, поверх другого. Но всё-таки, есть и в этом вопросе несколько моментов, достойных обсуждения. Я думаю найдутся люди, кому это будет интересно.Идея состоит в том, чтобы просто накладывать некоторый текст на изображение. Текст представлен в виде блоков переменной длины, предполагается что он будет расположен с левой стороны, с ровной заливкой вокруг текста. Например, как на этом изображении:"
//         },{
//             id:2,
//             title:"awe",
//             description:"awe"
//         }
//     ]
// }

const store = storeFactory(false, window.__INITIAL_STATE__)

window.React = React
window.store = store

// const store = createStore(
//     App_R,
//     initialState
// )
console.log('rendered from here...')

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <App/> */}
            <Switch>
                <Route exact path="/add" component={AddNewsPage} />
                <Route path="/" component={ListNewsPage} />
                <Route component={Whoops404} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById("react-container")
);


          