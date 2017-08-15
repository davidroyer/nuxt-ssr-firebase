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
    "url": "/_nuxt/0.nuxt.bundle.36cadd970a01491116e2.js",
    "revision": "9d03ed3565007b1b9ac3f83ece78c3e0"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.e82a3a58ead900bcb634.js",
    "revision": "7195e2b498d733d437a2f1c0b0a2d33d"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.9ba89164468b0f341299.js",
    "revision": "9c1aac68b43c8f3b8807b21f4c65e2b4"
  },
  {
    "url": "/_nuxt/manifest.2e1a30a4ea570add1021.js",
    "revision": "5812a17215e2481ed236fd1b0301e13b"
  },
  {
    "url": "/_nuxt/nuxt.bundle.c1ec58aa505d70dffe1c.js",
    "revision": "c896488c96f649da5a57e0506d42fa8a"
  },
  {
    "url": "/_nuxt/vendor.bundle.fab648070d01d7237134.js",
    "revision": "2b05f6e65e293f6161803215d5a6ab4f"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "firebase-functions-nuxt-example_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
