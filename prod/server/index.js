const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { Nuxt } = require('nuxt')
const app = require('express')()
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

app.use(handleRequest)

exports.render = functions.https.onRequest(app)

// exports.render = functions.https.onRequest((req, res) => {
//   res.set('Cache-Control', 'public, max-age=300, s-maxage=300');
//   handleRequest(req, res)
// })
