const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { Nuxt } = require('nuxt')
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
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

exports.render = functions.https.onRequest((req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=300');
  handleRequest(req, res)
})
