const functions = require("firebase-functions");
const Admin = require('firebase-admin');
Admin.initializeApp(functions.config().firebase);
const { Nuxt } = require('nuxt')
const app = require('express')()
const cors = require('cors')
const API_Routes = require('./apiRoutes')
require('es6-promise/auto');


let config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/assets/'
  }
}
const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=300');
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

app.use(cors({ origin: true }))
app.use('/api', API_Routes)
app.use(handleRequest)

exports.render = functions.https.onRequest(app)

// exports.render = functions.https.onRequest((req, res) => {
//   res.set('Cache-Control', 'public, max-age=300, s-maxage=300');
//   handleRequest(req, res)
// })
