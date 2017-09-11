const ProjectID = 'nuxtssrfire'
const bucketName = `${ProjectID}.appspot.com`;
const functions = require("firebase-functions");
const Admin = require('firebase-admin');
Admin.initializeApp(functions.config().firebase);
const app = require('express')()
const cors = require('cors')
const { Nuxt } = require('nuxt')
const Api = require('./api')
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
  res.set('Cache-Control', 'public, max-age=150, s-maxage=150');
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

app.use(cors({ origin: true }))
app.use('/api', Api)
app.use(handleRequest)

exports.render = functions.https.onRequest(app)
