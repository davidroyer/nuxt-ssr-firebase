const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { Nuxt } = require('nuxt')
const fs = require('fs');
const path = require('path');

require('es6-promise/auto');

let config = {
  dev: false,
  buildDir: 'nuxt',
  build: {},

}
const nuxt = new Nuxt(config)
const htmlTemplate = fs.readFileSync(path.resolve(__dirname, './nuxt/views/app.template.html'), 'utf-8')
// console.log(htmlTemplate);

// admin.initializeApp(functions.config().firebase)
//
// const htmlTemplate = fs.readFileSync(path.resolve(__dirname, '.  req.url = req.url || '/'/nuxt/dist/index.spa.html'), 'utf-8')
//
// const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
// let bundleRenderer = createBundleRenderer(require('./nuxt/dist/server-bundle.json'), {
//     template: htmlTemplate,
// })

exports.render = functions.https.onRequest((req, res) => {

  req.url = req.url || '/'
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  return new Promise((resolve, reject) => {
    // ctx.res.on('close', resolve)
    // ctx.res.on('finish', resolve)
    nuxt.render(req, res, promise => {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject)
    })
  })


    // nuxt.renderRoute('/').then(function ({ html, error }) {
    //
    // if (error) {
    //   res.status(error.statusCode || 500).send(html)
    // }
    //   res.status(200).send(html)
    // }).catch(function (error) {
    //   console.log(error)
    //   res.end()
    // })



})
