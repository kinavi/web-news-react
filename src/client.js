import React from "react";
import ReactDOM from "react-dom";
import Routes from './Routes';
import { Provider } from 'react-redux'
import { BrowserRouter, StaticRouter, HashRouter, Route, Switch } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';
import storeFactory from './store/index'
import './styles/App.css'
import { renderRoutes } from 'react-router-config';
//---
import MyEditor from './components/EditNewsEditor'
import AddNews from './components/Forms/AddNewsForm'
import ListNewsCms from './components/ListNewsCms'
import __INITIAL_STATE__ from '../data/initialState.json'

import ListNews from './pages/ListNews'
const store = storeFactory(false, __INITIAL_STATE__)
//---
//const store = storeFactory(false, window.__PRELOADED_STATE__)



//---
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
  );

