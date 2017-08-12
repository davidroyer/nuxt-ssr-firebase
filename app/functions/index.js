const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { Nuxt } = require('nuxt')
const fs = require('fs');
const path = require('path');
require('es6-promise/auto');

let config = {
  dev: false,
  buildDir: 'nuxt',
}
const nuxt = new Nuxt(config)

// const handleRequest = (req, res) => {}
function handleRequest(req, res) {
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

exports.render = functions.https.onRequest((req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  handleRequest(req, res)
})
