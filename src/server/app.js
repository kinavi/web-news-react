import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import fs from 'fs'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import api from './news-api'
import App from '../components/App'
import storeFactory from '../store/storeFactory'
import initialState from '../../data/initialState.json'

import favicon from 'serve-favicon'



//const staticCSS = fs.readFileSync(path.join(__dirname, '../../dist/assets/bundle.css')) <style>${staticCSS}</style>
const fileAssets = express.static(path.join(__dirname, '../../dist/'))
const imageFileAssets = express.static(path.join(__dirname, '../../uploads/'))

const serverStore = storeFactory(true, initialState)

serverStore.subscribe(() =>
    fs.writeFile(
        path.join(__dirname, '../../data/initialState.json'),
        JSON.stringify(serverStore.getState()),
        error => (error) ? console.log("Error saving state!", error) : null
    )
)

const buildHTMLPage = ({html, state, css}) => `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
        <meta charset="utf-8">
        <title>Web News</title>
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(state)}
        </script>
        <script src="/index_bundle.js"></script>
        <p>Server edit</p>
    </body>
</html>
`

const renderComponentsToHTML = ({url, store}) =>
    ({
        state: store.getState(),
        html: renderToString(
            <Provider store={store}>
                <StaticRouter location={url} context={{}}>
                    <App />
                </StaticRouter>
            </Provider>
        )
    })

const makeClientStoreFrom = store => url =>
    ({
        url,
        store: storeFactory(false, store.getState())
    })

const htmlResponse = compose(
    buildHTMLPage,
    renderComponentsToHTML,
    makeClientStoreFrom(serverStore)
)

const respond = ({url}, res) =>
    res.status(200).send(
      htmlResponse(url)
    )

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

const addStoreToRequestPipeline = (req, res, next) => {
    req.store = serverStore
    next()
}

export default express()
    .use(bodyParser.json())
    .use(favicon(path.join(__dirname, 'favicon.png')))
    .use(logger)
    .use(fileAssets)
    .use(imageFileAssets)
    .use(addStoreToRequestPipeline)
    .use('/api', api)
    .use(respond)
