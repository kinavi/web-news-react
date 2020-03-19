import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Routes from './Routes';
import {StaticRouter} from 'react-router-dom';
import {matchRoutes, renderRoutes} from 'react-router-config';
import '@babel/polyfill';
import {assetsByChunkName} from '../stats.json';
import {Provider} from 'react-redux';

import initialState from '../data/initialState.json';
import storeFactory from './store/index';

import serialize from 'serialize-javascript';

import api from './news-api';

// import fs from 'fs';

import bodyParser from 'body-parser';

import {mongoose, News} from './mongoose';

const serverStore = storeFactory(true);

const imageFileAssets = express.static('uploads');

const app = express();

const url = 'mongodb://localhost:27017/web-news-react';

// #region FileWrited
// serverStore.subscribe(() =>
//   fs.writeFile(
//       './data/initialState.json',
//       JSON.stringify(serverStore.getState()),
//       (error) => (error) ? console.log('Error saving state!', error) : null,
//   ),
// );
// #endregion

const renderer = (req, serverStore, context) =>{
  const reactHtml = renderToString(
      <Provider store={serverStore}>
        <StaticRouter location={req.path} context={context}>
          <div className='app' >{renderRoutes(Routes)}</div>
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

const addStoreToRequestPipeline = async (req, res, next) => {
  // const news = await News.find({});
  // console.log('news - ', news);
  // const serverStore = storeFactory(true, {News: news});
  req.store = serverStore;
  next();
};

app.use(bodyParser.json())
    .use('/', express.static('public'))
    .use('/edit', express.static('public'))
    .use('/news', express.static('public'))
    .use('/cms', express.static('public'))
    .use('/cms/add', express.static('public'))
    .use(imageFileAssets)
    .use('/news', imageFileAssets)
    .use(addStoreToRequestPipeline)
    .use('/api', api)
    .get('*', (req, res) => {
      const params = req.params[0].split('/');
      const id = params[2];
      const routes = matchRoutes(Routes, req.path);

      const promises = routes
          .map(({route}) => {
            return route.loadData ? route.loadData(serverStore) : null;
          })
          .map((promise) => {
            if (promise) {
              return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
              });
            }
            return null;
          });

      Promise.all(promises).then( () => {
        const context = {};

        const content = renderer(req, req.store, context);
        if (context.notFound) {
          res.status(404);
        }

        res.send(content);
      });
    });
// .listen(3000);
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
      app.listen(3000, ()=>{
        console.log('Сервер ожидает подключения - http://localhost:3000/');
      });
    })
    .catch((err)=>{
      console.log(err);
    });
