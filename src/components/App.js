import React from "react";
import '../styles/App.css';
//import { Form } from './react/Form/Form'
//import ListNews from './React/List/ListNews'
//import { connect } from 'react-redux'
//import { LoadNews } from './redux/Actions/List/LoadNews'
//import AddNewLayer from './react/cms/AddNewPage/AddNewsLayer'
//import ListNewsPage from './react/cms/ListNews/ListNewsPage'
import { HashRouter, Route, Switch, Link, NavLink, BrowserRouter  } from 'react-router-dom'

import AddNewsPage from './react/cms/AddNewPage/AddNewsPage'
import ListNewsPage from './react/cms/ListNews/ListNewsPage'

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>

const App = () =>
    <Switch>
        <Route path="/cms" component={AddNewsPage} />
        <Route path="/" component={ListNewsPage} />
        <Route component={Whoops404} />
    </Switch>

export default App