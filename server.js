import express from "express";
import path from "path";
import React from "react";
import { renderToString }  from "react-dom/server";
//import App from "./client/app.js";
import Routes from './src/Routes'
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
// import '@babel/polyfill';
import { assetsByChunkName } from './dist/stats.json';

function renderer(req, store, context) {
    const reactHtml = renderToString(     
        <StaticRouter location={req.path} >
            <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
    );
    return `<!DOCTYPE html>
    <html>
        <head>
            <title>Universal React server bundle</title>
            <link rel="stylesheet" href="${
                assetsByChunkName.main[0]
              }">
        </head>
        <body>
            <div id="root">${reactHtml}</div>
            <script src="${assetsByChunkName.main[1]}"></script>
        </body>
    </html>`;
    //res.send(htmlTemplate);
}

const app = express();

app.use(express.static('dist'));

//app.get("*", handleRender);
app.get('*', (req, res) => {
    console.log(req.params)
    const params = req.params[0].split('/');
    const id = params[2];
  
    const routes = matchRoutes(Routes, req.path);
  
    const promises = routes
      .map(({ route }) => {
        return route.loadData ? route.loadData(store, id) : null;
      })
      .map(promise => {
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
      const content = renderer(req);
  
      if (context.notFound) {
        res.status(404);
      }
  
      res.send(content);
    });
  });

app.listen(3000);
console.log("App is running on http://localhost:3000");
