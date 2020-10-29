import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import mongoose from 'mongoose'
import { StaticRouter } from 'react-router-dom'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import store from '@/core/store'
import { Provider } from 'react-redux'
import { ServerStyleSheet } from 'styled-components'
import todosRoutes from '@/routes/todos'

import Html from '@/view/Html'
import App from '@/view/App'

import config from '../configs/webpack.build.js'

const compiler = webpack(config)

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname)))

app.use(todosRoutes)

app.use(
  webpackDevMiddleware(compiler, {
    serverSideRender: true,
    index: false,
  })
)

app.get('*', async (req, res) => {
  const scripts = ['vendor.js', 'main.js']

  const sheet = new ServerStyleSheet()

  const initialState = { initialText: 'BACKEND STATE' }

  const appMarkup = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>
      </Provider>
    )
  )

  const style = sheet.getStyleTags()

  const html = ReactDOMServer.renderToStaticMarkup(
    <Html initialState={initialState} body={appMarkup} scripts={scripts} style={style} />
  )

  res.send(`<!doctype html>${html}`)
})

async function start() {
  try {
    await mongoose.connect('mongodb+srv://alex:UZ6bKJA43mP7oC7Y@cluster0.ei1hd.mongodb.net/todos', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Listening on port ${PORT}`)
    })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}

start()
