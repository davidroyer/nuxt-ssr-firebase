const functions = require("firebase-functions")
const admin = require('firebase-admin');

const { Nuxt } = require('nuxt')
const app = require('express')()
const cors = require('cors')
// const server = require('http').createServer(app)
const port = process.env.PORT || 3000
admin.initializeApp(functions.config().firebase);
let config = {
  dev: false,
  buildDir: 'nuxt'
}

const nuxt = new Nuxt(config)

app.use(cors({ origin: true }))
// app.use(nuxt.render)

app.get('/', (request, response) => {
  // app.use(nuxt.render)
  nuxt.render(request,response)
  // nuxt.renderRoute('/')
  // .then(function ({ html, error }) {
  //   // You can check error to know if your app displayed the error page for this route
  //   // Useful to set the correct status code if an error appended:
  //   console.log(html);
  //   if (error) {
  //     return response.status(error.statusCode || 500).send(html)
  //   }
  //   response.status(200).send(html)
  // })
  // .catch(function (error) {
  //   // And error appended while rendering the route
  // })

})

app.get('/about', (request, response) => {
  // app.use(nuxt.render)
    return nuxt.render(request,response)
  // nuxt.renderRoute('/about')
  // .then(function ({ html, error }) {
  //   // You can check error to know if your app displayed the error page for this route
  //   // Useful to set the correct status code if an error appended:
  //   console.log(html);
  //   if (error) {
  //     return response.status(error.statusCode || 500).send(html)
  //   }
  //   response.status(200).send(html)
  // })
  // .catch(function (error) {
  //   // And error appended while rendering the route
  // })
})

app.get("*", (request, response) => {
  response.send("Hello from Express on Firebase with CORS! No trailing slash required!")
})


exports.nuxt = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}` // prepend '/' to keep query params if any
  }
  return app(request, response)
})
// var handle = nuxt.render()
//
// exports.nuxt = functions.https.onRequest((request, response) => {
//   // app.use(nuxt.render)
//   nuxt.renderRoute('/')
//   .then(function ({ html, error }) {
//     // You can check error to know if your app displayed the error page for this route
//     // Useful to set the correct status code if an error appended:
//     console.log(html);
//     if (error) {
//       return response.status(error.statusCode || 500).send(html)
//     }
//     response.status(200).send('Worked!!!')
//   })
//   .catch(function (error) {
//     // And error appended while rendering the route
//   })
//
// })
