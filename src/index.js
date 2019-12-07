import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import { App_R } from './components/Redux/Reducers/App_R'

import { HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import AddNewLayer from './components/React/cms/AddNewPage/AddNewLayer'
import ListNews from './components/React/cms/ListNews/ListNews'


import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    News:[
        {
            id:1,
            title:"Новость №1",
            description:"Что-то случилось в Артемовске"
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
                <Route exact path="/add" component={AddNewLayer} />
                <Route path="/list" component={ListNews} />
                <Route component={Whoops404} />
            </Switch>
        </Provider>
    </HashRouter>
    , 
    document.getElementById("root")
);


          