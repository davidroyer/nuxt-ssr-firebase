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
    "url": "/assets/app.e7f78a63b03ef8beee22.js",
    "revision": "fb53e9445ef2fc1428af577a84bc1192"
  },
  {
    "url": "/assets/common.94bcc32b9dbf7bb21e009fcad05060bc.css",
    "revision": "bb6ee0a0caf9d1cdb6b844d77c09e31c"
  },
  {
    "url": "/assets/common.f03fc83b0370b4f5c262.js",
    "revision": "735682f36436d3a53d24801d002f3d9a"
  },
  {
    "url": "/assets/layouts/default.fa89462ac537131991c5.js",
    "revision": "abce69be9fdffffef1074b165947a4cf"
  },
  {
    "url": "/assets/manifest.ad63f6a86dac537e73e9.js",
    "revision": "31caa84b4a22163e96489ba26c041558"
  },
  {
    "url": "/assets/pages/About.fed67c0ad5c05c5b5dbd.js",
    "revision": "b345f1e74c641bff8a4fb01ef2dcddf2"
  },
  {
    "url": "/assets/pages/Admin.7a05b6626ba30c67ce24.js",
    "revision": "93e8133ad5bdad7930596be393cc87ac"
  },
  {
    "url": "/assets/pages/index.345ab8caeac79008ae3e.js",
    "revision": "7d1223fe2e7882676c24f05944dda25c"
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
