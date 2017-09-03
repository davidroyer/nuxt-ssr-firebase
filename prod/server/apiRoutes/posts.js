var express = require('express')
var router = express.Router()
const Admin = require('firebase-admin');
const Posts = Admin.database().ref('/posts')

function slugify (title) {
  let slug = title.toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/^-+|-+$/g, ''); // remove leading, trailing -
  return slug
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
  return Admin.database().ref('/posts').child(key).set(post)
}

function addPost(data) {
  let {title} = data
  data['slug'] = slugify(title)
  Posts.push(data)
}

router.get('/', function (req, res) {
  res.send('THE API ROUTE');
})

router.get('/posts', function (req, res) {
  getPosts().then(posts => {
    res.status(200).json(posts);
  });
})

router.get('/posts/:slug', function (req, res) {
  getPost(req.params.slug).then(post => {
    res.status(200).json(post);
  });
})

router.delete('/posts/:key', function (req, res) {
  removePost(req.params.key).then(response => {
    res.status(200).json('Success');
  });
})

router.post('/posts/:key', function (req, res) {
  updatePost(req.params.key, req.body).then(response => {
    res.status(200).json('Success');
  });
})

router.post('/posts', function (req, res) {
  addPost(req.body)
  res.status(200).send('New Post Added');
})

module.exports = router
