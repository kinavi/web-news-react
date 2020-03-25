import React from 'react';
import {StaticRouter} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import {matchRoutes, renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';

import express from 'express';
import '@babel/polyfill';
import serialize from 'serialize-javascript';

import {mongoose} from './mongoose';

import Routes from '../Routes';
import storeFactory from '../store/index';
import {assetsByChunkName} from '../../stats.json';
import api from './routes/api/news-api';

const cookieParser = require('cookie-parser');

// #region auth
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
require('./passport');

// Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';
// #endregion

const serverStore = storeFactory(true);

const imageFileAssets = express.static('uploads');

const app = express();


const url = 'mongodb://localhost:27017/web-news-react';

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
app.use(cors())
    .use(require('morgan')('dev'))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use(session({
      secret: 'soo-zero',
      cookie: {maxAge: 60000},
      resave: false,
      saveUninitialized: false,
    }))
    .use(cookieParser())
    .use('/', express.static('public'))
    .use('/edit', express.static('public'))
    .use('/news', express.static('public'))
    .use('/cms', express.static('public'))
    .use('/cms/add', express.static('public'))
    .use(imageFileAssets)
    .use('/news', imageFileAssets)
    .use(addStoreToRequestPipeline)
    .use('/api', api)
    // .use(require('./routes'))
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

if (!isProduction) {
  app.use(errorHandler());
}

// Error handlers & middlewares
if (!isProduction) {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
      app.listen(3000, ()=>{
        console.log('Сервер ожидает подключения - http://localhost:3000/');
      });
    })
    .catch((err)=>{
      console.log(err);
    });

mongoose.set('debug', true);
