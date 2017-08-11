const app = require('express')()
const {Nuxt, Builder} = require('nuxt')
const functions = require("firebase-functions")
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

let config = {
  dev: false,
  buildDir: 'nuxt'
}
// const nuxt = new Nuxt(con)


// var value = 10;
// var promiseForValue = Promise.resolve(value);
// Give nuxt middleware to express
// app.use(await nuxt.render)
// Start nuxt.js
function start () {
  // Import and Set Nuxt.js options
  config.dev = !(process.env.NODE_ENV === 'production')
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  // Add nuxt.js middleware
  app.use(nuxt.render)
  // Listen to the server
  // app.listen(process.env.PORT, process.env.HOST)
  console.log(`Server listening on http://${process.env.HOST}:${process.env.PORT}`) // eslint-disable-line no-console
}

// app.get('*', (req, res) => {
//   nuxt.render(req, res)
// })

start()
// function handle(req, res) {
//   nuxt.render(req, res)
// }
//
// //
// nuxt.build()
// .then(() => {
//   nuxt.render(req, res)
// })
// return nuxt.render(req, res)

exports.nuxt = functions.https.onRequest(app)
// exports.nuxt = functions.https.onRequest(app)
