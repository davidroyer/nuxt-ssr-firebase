const keyFilename="./serviceAccountKey.json"; //replace this with api key file
const projectId = "nuxtssrfire" //replace with your project id
const bucketName = `${projectId}.appspot.com`;

const functions = require("firebase-functions");
const Admin = require('firebase-admin');
Admin.initializeApp(functions.config().firebase);
// const mime = require('mime');
const gcs = require('@google-cloud/storage')({
    projectId,
    keyFilename
});
const { Nuxt } = require('nuxt')
const app = require('express')()
const cors = require('cors')
const API_Routes = require('./apiRoutes')
require('es6-promise/auto');
const fileUpload = require('express-fileupload');
const bucket = gcs.bucket(bucketName);


// const filePath = `./package.json`;
// const uploadTo = `subfolder/package.json`;
// const fileMime = mime.lookup(filePath);






let config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/assets/'
  }
}
const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=150, s-maxage=150');
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

app.use(cors({ origin: true }))
// app.use(fileUpload());
app.get("/testing", (req, res) => {
  res.status(200).json('Success');
});
app.use('/api', API_Routes)
app.use(handleRequest)

exports.render = functions.https.onRequest(app)
