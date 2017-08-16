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
    "url": "/assets/0.nuxt.bundle.44f2da4b7d8f8b9fd7ec.js",
    "revision": "840c09131c38452a351bf4eb358e2d7c"
  },
  {
    "url": "/assets/1.nuxt.bundle.ed39cfbe4229c007c65e.js",
    "revision": "f9ec58f488f5d56a04cf70ce53fc819a"
  },
  {
    "url": "/assets/2.nuxt.bundle.cdc03454cf72cde68e92.js",
    "revision": "184929af2c59ff08eaa7b96b544b1354"
  },
  {
    "url": "/assets/common.873682bcf8e453348f8e.css",
    "revision": "446de663809ecbf5fb9760501769af5c"
  },
  {
    "url": "/assets/manifest.cbea6f1fe32887b9393f.js",
    "revision": "040763e215839ac9a3817806f2c19876"
  },
  {
    "url": "/assets/nuxt.bundle.873682bcf8e453348f8e.js",
    "revision": "8acdc3a222ca1bb2b2b01284a3a679df"
  },
  {
    "url": "/assets/vendor.bundle.5e4c1bf3b35d974bf9c7.js",
    "revision": "72678c2b97d6f31b790958d9548f96c9"
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
