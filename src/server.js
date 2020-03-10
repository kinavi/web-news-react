import express from 'express';
// import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
// import App from "./client/app.js";
import Routes from './Routes';
import {StaticRouter} from 'react-router-dom';
import {matchRoutes, renderRoutes} from 'react-router-config';
// import '@babel/polyfill';
import {assetsByChunkName} from '../stats.json';
import {Provider} from 'react-redux';

import initialState from '../data/initialState.json';
// import favicon from 'serve-favicon';
import storeFactory from './store/index';

import serialize from 'serialize-javascript';

import api from './news-api';

import fs from 'fs';
import bodyParser from 'body-parser';

// import favicon from 'serve-favicon'
// import FlagFavi from './favicon.png'

const serverStore = storeFactory(true, initialState);

const imageFileAssets = express.static('uploads');

serverStore.subscribe(() =>
  fs.writeFile(
      // path.format(initialState),
      // initialState,
      './data/initialState.json',
      // path.join(__dirname, '../data/initialState.json'),
      // Сейчас файл не переписывается, надо поменять путь
      JSON.stringify(serverStore.getState()),
      (error) => (error) ? console.log('Error saving state!', error) : null,
  ),
);

const renderer = (req, serverStore, context) =>{
  const reactHtml = renderToString(
      <Provider store={serverStore}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>,
  );
  return `<!DOCTYPE html>
    <html>
        <head>
            <title>Universal React server bundle</title>
            <link rel="stylesheet" href="${assetsByChunkName.main[0]}">
        </head>
        <body>

            <div id="root">${reactHtml}</div>
            <script>
            window.__PRELOADED_STATE__ = 
              ${serialize(serverStore.getState()).replace(/</g, '\\u003c')}
            </script>
            <script src="${assetsByChunkName.main[1]}"></script>
        </body>
    </html>`;
};

const app = express();


const addStoreToRequestPipeline = (req, res, next) => {
  req.store = serverStore;
  next();
};
app.use(bodyParser.json());
app.use('/', express.static('public'));
app.use('/edit', express.static('public'));
app.use('/news', express.static('public'));
app.use('/cms/add', express.static('public'));
app.use(imageFileAssets);
app.use('/edit', imageFileAssets);
app.use('/news', imageFileAssets);
app.use(addStoreToRequestPipeline);
// app.use(favicon(`./${FlagFavi}`))//FlagFavi))
app.use('/api', api);

// app.get("*", handleRender);
app.get('*', (req, res) => {
  const params = req.params[0].split('/');
  const id = params[2];
  const routes = matchRoutes(Routes, req.path);

  const promises = routes
      .map(({route}) => {
        return route.loadData ? route.loadData(store, id) : null;
      })
      .map((promise) => {
        if (promise) {
          // eslint-disable-next-line no-unused-vars
          return new Promise((resolve, reject) => {
            promise.then(resolve).catch(resolve);
          });
        }
        return null;
      });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, serverStore, context);
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});


app.listen(3000);
console.log('App is running on http://localhost:3000');
