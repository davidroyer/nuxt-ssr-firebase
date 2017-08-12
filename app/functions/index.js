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

exports.render = functions.https.onRequest((req, res) => {

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
