import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import { App_R } from './components/Redux/Reducers/App_R'

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
// store.dispatch({
//     type: 'LOAD_LIST',
//     value: initialState.News
// })


console.dir(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
);


          