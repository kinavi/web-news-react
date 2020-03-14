import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

// import 'bootstrap/dist/css/bootstrap.min.css';
import storeFactory from './store/index';
import './styles/App.css';
import __INITIAL_STATE__ from '../data/initialState.json';

// const store = storeFactory(false, __INITIAL_STATE__);
// ---
const store = storeFactory(false, window.__PRELOADED_STATE__);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div className='app' >{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'),
);

