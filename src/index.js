import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import { App_R } from './components/Redux/Reducers/App_R'

import { HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import AddNewLayer from './components/React/cms/AddNewPage/AddNewLayer'
import ListNews from './components/React/cms/ListNews/ListNews'

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

// export const Home = () =>
//     <div className="home">
//         <h1>[Company Website]</h1>
//         <nav>
//             <Link to="about">[About]</Link>
//             <Link to="events">[Events]</Link>
//             <Link to="products">[Products]</Link>
//             <Link to="contact">[Contact Us]</Link>
//         </nav>
//     </div>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>

// const selectedStyle = {
//         backgroundColor: "white",
//         color: "slategray"
//     }

// export const MainMenu = () =>
//     <nav className="main-menu">
//         <NavLink to="/">
//             <div>HomeIcon</div>
//         </NavLink>
//         <NavLink to="/about" activeStyle={selectedStyle}>
//             [About]
//         </NavLink>
//         <NavLink to="/events" activeStyle={selectedStyle}>
//             [Events]
//         </NavLink>
//         <NavLink to="/products" activeStyle={selectedStyle}>
//             [Products]
//         </NavLink>
//         <NavLink to="/contact" activeStyle={selectedStyle}>
//             [Contact Us]
//         </NavLink>
//     </nav>

// const PageTemplate = ({children}) =>
//     <div className="page">
//         <MainMenu />
//         {children}
//     </div>

// export const Events = () =>
//     <PageTemplate>
//         <section className="events">
//             <h1>[Event Calendar]</h1>
//         </section>
//     </PageTemplate>

// export const About = () =>
//     <PageTemplate>
//         <section className="events">
//             <h1>[About the Company]</h1>
//         </section>
//     </PageTemplate>

// export const Products = () =>
//     <PageTemplate>
//         <section className="products">
//             <h1>[Products Catalog]</h1>
//         </section>
//     </PageTemplate>
    
// export const Contact = () =>
//     <PageTemplate>
//         <section className="contact">
//             <h1>[Contact Us]</h1>
//         </section>
//     </PageTemplate>

ReactDOM.render(
    <HashRouter>
        {/* <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/events" component={Events} />
                <Route path="/products" component={Products} />
                <Route path="/contact" component={Contact} />
                <Route component={Whoops404} />
            </Switch>
        </div> */}
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


          