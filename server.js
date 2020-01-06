import express from "express";
import path from "path";
import React from "react";
import { renderToString }  from "react-dom/server";
//import App from "./client/app.js";
import Routes from './src/Routes'
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
// import '@babel/polyfill';
import TEST from './test'

function handleRender(req, res) {
    const reactHtml = renderToString(     
        <StaticRouter location={req.path} >
            <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
    );
    const htmlTemplate = `<!DOCTYPE html>
    <html>
        <head>
            <title>Universal React server bundle</title>
        </head>
        <body>
            <div id="root">${reactHtml}</div>
            <script src="public/client.bundle.js"></script>
        </body>
    </html>`;
    res.send(htmlTemplate);
}

const app = express();

app.use("/public", express.static("./public"));

app.get("*", handleRender);
app.listen(3000);
console.log("App is running on http://localhost:3000");
