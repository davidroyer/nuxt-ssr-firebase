importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/assets/app.15f4d526b5b69ded9af3.js",
    "revision": "a30b61a64d394d5f24be2b859bf768a8"
  },
  {
    "url": "/assets/common.94bcc32b9dbf7bb21e009fcad05060bc.css",
    "revision": "bb6ee0a0caf9d1cdb6b844d77c09e31c"
  },
  {
    "url": "/assets/common.fd79a99c74969b85974c.js",
    "revision": "d82fbb8be8d192d7edcfcbbc55560c93"
  },
  {
    "url": "/assets/layouts/default.4bc03a583c378e154dd4.js",
    "revision": "f0ee40f792ee23924ddef19ae8ea9d7e"
  },
  {
    "url": "/assets/manifest.dbc701b05d3bc4108685.js",
    "revision": "2fcedc883b683a99a9027cb318501334"
  },
  {
    "url": "/assets/pages/About.7b5c44b5a4f4d411c948.js",
    "revision": "643fc812dac766cc1fa274a019789a9c"
  },
  {
    "url": "/assets/pages/Admin.a7a02b6b46fcb33bf90f.js",
    "revision": "0b65e2550e1301d33ee0b6198efaf391"
  },
  {
    "url": "/assets/pages/Blog.c7a34143ab4dabcb2447.js",
    "revision": "ae0cd88f99d57c284e0e797d4beb7723"
  },
  {
    "url": "/assets/pages/index.7746e1c5fbac8f0bfe38.js",
    "revision": "328023e7b239fe8848ec2a07a657dd2d"
  },
  {
    "url": "/assets/pages/posts/_slug.e872a13215d269e33ba9.js",
    "revision": "2fe2596b1a6abdd2866b8dd3adc6512f"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "firebase-functions-nuxt-example_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/assets/**', workboxSW.strategies.cacheFirst({}), 'GET');
