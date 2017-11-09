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
    "url": "/assets/app.ad2ad359e58ba6b9cd84.js",
    "revision": "2537d63be17fb2bb886b6909d8746283"
  },
  {
    "url": "/assets/common.cf4b735fa9a6d4362890e2cfe1a7b7ae.css",
    "revision": "0ea02849c6b8ee9e7823fe4d44a1df6e"
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
    "url": "/assets/manifest.f4669ef67f45fcf122e6.js",
    "revision": "fb02a4b1890ac22b7b9f23eb058d75d4"
  },
  {
    "url": "/assets/pages/about.6800da1d1cab2111fa79.js",
    "revision": "4b69e66c46b4787b0551463e0d63065d"
  },
  {
    "url": "/assets/pages/Admin.25156c1d44077006cdcb.js",
    "revision": "db3afafb826fc6887abd7f303aa54ad5"
  },
  {
    "url": "/assets/pages/Blog.959b7f731172a46e7a1a.js",
    "revision": "64f31b92623e69efa50055210ef0ad61"
  },
  {
    "url": "/assets/pages/index.61b39e97fa95812b1fe8.js",
    "revision": "11ccf8b381cca1b060ce8831f1849d8e"
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
