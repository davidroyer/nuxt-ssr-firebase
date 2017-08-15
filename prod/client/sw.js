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
    "url": "/assets/0.nuxt.bundle.699c93682ec1802ae495.js",
    "revision": "5bce649ac3f77090a893a9f8b7eb0a17"
  },
  {
    "url": "/assets/1.nuxt.bundle.f797570262a385165ca9.js",
    "revision": "100011168978c9e3dc87b1292579272b"
  },
  {
    "url": "/assets/2.nuxt.bundle.cdc03454cf72cde68e92.js",
    "revision": "184929af2c59ff08eaa7b96b544b1354"
  },
  {
    "url": "/assets/common.4ac6b577b13549d1074d.css",
    "revision": "c96dfcdea2ac66f3b1c36039287745d7"
  },
  {
    "url": "/assets/manifest.224a500d8a4ea3b8da47.js",
    "revision": "37788f6748165874986fc5b9c9ebedae"
  },
  {
    "url": "/assets/nuxt.bundle.4ac6b577b13549d1074d.js",
    "revision": "caf90c73b18085facf749638833fd3bc"
  },
  {
    "url": "/assets/vendor.bundle.337fc34c53eaca0d640a.js",
    "revision": "ca53c0912e874a7db508c9dc20914a5e"
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
