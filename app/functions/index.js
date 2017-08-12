const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { Nuxt } = require('nuxt')
const fs = require('fs');
const path = require('path');

require('es6-promise/auto');

let config = {
  dev: false,
  buildDir: 'nuxt',
  // build: {  publicPath: 'http://localhost:5000'},


}
const nuxt = new Nuxt(config)

// console.log(htmlTemplate);

exports.render = functions.https.onRequest((req, res) => {

  // req.url = req.url || '/'
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  return new Promise((resolve, reject) => {
    // ctx.res.on('close', resolve)
    // ctx.res.on('finish', resolve)
    nuxt.render(req, res, promise => {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject)
    })
  })



})
