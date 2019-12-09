import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import { App_R } from './components/Redux/Reducers/App_R'

import { HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import AddNewsPage from './components/React/cms/AddNewPage/AddNewsPage'
import ListNews from './components/React/cms/ListNews/ListNews'


import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    ListNews:[
        {
            id:1,
            title:"Новость №1",
            description:"Вообще, сам вопрос несложен. Нет ничего хитрого, чтобы расположить один блок, поверх другого. Но всё-таки, есть и в этом вопросе несколько моментов, достойных обсуждения. Я думаю найдутся люди, кому это будет интересно.Идея состоит в том, чтобы просто накладывать некоторый текст на изображение. Текст представлен в виде блоков переменной длины, предполагается что он будет расположен с левой стороны, с ровной заливкой вокруг текста. Например, как на этом изображении:"
        },{
            id:2,
            title:"awe",
            description:"awe"
        }
    ]
}

const store = createStore(
    App_R,
    initialState
)

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            {/* <App/> */}
            <Switch>
                <Route exact path="/add" component={AddNewsPage} />
                <Route path="/list" component={ListNews} />
                <Route component={Whoops404} />
            </Switch>
        </Provider>
    </HashRouter>
    , 
    document.getElementById("root")
);


          