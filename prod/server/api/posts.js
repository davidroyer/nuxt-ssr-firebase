const projectId = "nuxtssrfire" //replace with your project id
const gcs = require('@google-cloud/storage')();
const BucketName = `${projectId}.appspot.com`;
var multer  = require('multer')
var express = require('express')
var router = express.Router()
const Admin = require('firebase-admin');
const Posts = Admin.database().ref('/posts')
const PostList = Admin.database().ref('/postlist')
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

function handlePostUpdates(key, post) {
  var updates = {};
  updates[`/posts/${key}`] = post;
  updates[`/postlist/${post.slug}`] = post;
  return updates
}

function handleRemovePost(key, post) {
  var updates = {};
  console.log('REMOVE', post);
  updates[`/posts/${key}`] = null;
  updates[`/postlist/${post.slug}`] = null;
  return updates
}

function getPublicUrl (filename) {
  return `https://storage.googleapis.com/${BucketName}/${filename}`;
}

function getPosts() {
  return Posts.once('value').then(snapshot => snapshot.val());
}

function getPost(slug) {
  let Post = Admin.database().ref('/posts').orderByChild('slug').equalTo(slug)

  return Post.once('value')
  .then((snapshot) => {
    var postData = snapshot.val()
    var keys = Object.keys(postData)
    return postData[keys[0]]
  });
}

function removePost(key, post) {
  let postUpdates = handleRemovePost(key, post)
  return Admin.database().ref().update(postUpdates);
}

function updatePost(key, post) {
  let postUpdates = handlePostUpdates(key, post)
  return Admin.database().ref().update(postUpdates);
}

function handleUpload() {
  let sampleFile = req.files.sampleFile;
  console.log(sampleFile);
}

function addPost(postData) {
  let postKey = Posts.push().key
  postData['slug'] = slugify(postData.title)
  postData['key'] = postKey
  return Admin.database().ref().update(handlePostUpdates(postKey, postData));
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
  console.log('BODY', req.body);
  removePost(req.params.key, req.body).then(response => {
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
