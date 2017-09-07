const projectId = "nuxtssrfire" //replace with your project id
const gcs = require('@google-cloud/storage')();
const BucketName = `${projectId}.appspot.com`;
var multer  = require('multer')
var express = require('express')
var router = express.Router()
const Admin = require('firebase-admin');
const Posts = Admin.database().ref('/posts')
const fileUpload = require('express-fileupload');
const bucket = gcs.bucket(BucketName);

var storage = multer.memoryStorage()
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb
  },
  dest: 'images'
})

function slugify(title) {
  let slug = title.toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/^-+|-+$/g, ''); // remove leading, trailing -
  return slug
}

function getPublicUrl (filename) {
  return `https://storage.googleapis.com/${BucketName}/${filename}`;
}

function getPosts() {
  return Posts.once('value').then(snapshot => snapshot.val());
}

function getPost(slug) {
  let Post = Admin.database().ref('/posts').orderByChild('slug').equalTo(slug)
  return Post.once('value').then(snapshot => snapshot.val());
}

function removePost(key) {
  return Admin.database().ref('/posts').child(key).remove()
  // return Post.once('value').then(snapshot => snapshot.val());
}

function updatePost(key, post) {
  return Admin.database().ref('/posts').child(key).update(post)
}

function handleUpload() {
  let sampleFile = req.files.sampleFile;
  console.log(sampleFile);
}

function addPost(data) {
  let { title } = data
  let postKey = Posts.push().key

  data['slug'] = slugify(title)
  data['key'] = postKey
  return Posts.child(postKey).update(data)
}

router.get('/', function(req, res) {
  res.send('THE API ROUTE');
})

router.get('/posts', function(req, res) {
  getPosts().then(posts => {
    res.status(200).json(posts);
  });
})

router.get('/posts/:slug', function(req, res) {
  getPost(req.params.slug).then(post => {
    res.status(200).json(post);
  });
})

router.delete('/posts/:key', function(req, res) {
  removePost(req.params.key).then(response => {
    res.status(200).json('Success');
  });
})

router.post('/posts/:key', function(req, res) {
  updatePost(req.params.key, req.body).then(response => {
    res.status(200).json('Success');
  });
})

router.post('/posts', function(req, res) {
  addPost(req.body).then(response => {
    res.status(200).json(response);
  });
})

router.post('/upload',  upload.single("imageUpload"), function(req, res, next) {
  // Create a new blob in the bucket and upload the file data.
  const blob = bucket.file(req.file.originalname);
  console.log(blob);
  // Make sure to set the contentType metadata for the browser to be able
  // to render the image instead of downloading the file (default behavior)
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  blobStream.on("error", err => {
    next(err);
    return;
  });

  blobStream.on("finish", () => {
    // The public URL can be used to directly access the file via HTTP.
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

    // Make the image public to the web (since we'll be displaying it in browser)
    blob.makePublic().then(() => {
      res.status(200).json({
        "imageUrl": publicUrl
      });
      // res.status(200).send(`Success!\n Image uploaded to ${publicUrl}`);
    });
  });

  blobStream.end(req.file.buffer);
});

module.exports = router
