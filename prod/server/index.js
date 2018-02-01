const functions = require('firebase-functions');
const { Nuxt } = require('nuxt')
const express = require('express');

const app = express();

const config = {
  // debug: true,
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/assets/'
  }
}
const nuxt = new Nuxt(config);

app.use(nuxt.render);
exports.nuxtssr = functions.https.onRequest(app);
