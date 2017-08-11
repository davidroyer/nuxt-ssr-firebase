"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _nuxt = require("nuxt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var functions = require("firebase-functions");


var app = (0, _express2.default)();

var config = {
  dev: false,
  buildDir: 'nuxt'
};

var nuxt = new _nuxt.Nuxt(config);

app.use((0, _cors2.default)({ origin: true }));
// app.use(nuxt.render);

app.get("/", function (request, response) {
  console.log(nuxt);
  return nuxt.renderRoute('/')
  .then(function ({ html, error }) {
    // You can check error to know if your app displayed the error page for this route
    // Useful to set the correct status code if an error appended:
    if (error) {
      return response.status(error.statusCode || 500).send(html)
    }
    response.status(200).send(html)
  })
  .catch(function (error) {
    // And error appended while rendering the route
  })
  // response.send('You are on the home page!');
});

app.get("/fake", function (request, response) {
  nuxt.renderRoute('/')
  .then(function ({ html, error }) {
    // You can check error to know if your app displayed the error page for this route
    // Useful to set the correct status code if an error appended:
    if (error) {
      return response.status(error.statusCode || 500).send(html)
    }
    response.status(200).send(html)
  })
  .catch(function (error) {
    // And error appended while rendering the route
  })
});

app.get("/test", function (request, response) {
  console.log(nuxt);
  nuxt.renderRoute('/')
  .then(function ({ html, error }) {
    // You can check error to know if your app displayed the error page for this route
    // Useful to set the correct status code if an error appended:
    if (error) {
      return response.status(error.statusCode || 500).send(html)
    }
    response.status(200).send('Worked!!!')
  })
  .catch(function (error) {
    // And error appended while rendering the route
  })
});

app.get("*", function (request, response) {
  console.log(request);
  response.status(200).send("Hello from Express on Firebase with CORS! No trailing slash required!");
});

exports.nuxt = functions.https.onRequest(app)

// exports.nuxt = functions.https.onRequest(function (request, response) {
//   return app(request, response);
// });
