const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  buildDir: '../functions/nuxt',
  build: {
    /*
    ** Run ESLINT on save
    */

    // babel: {
    //   "presets": [
    //     ["es2015", {"modules": false}],
    //     ["stage-2"]
    //   ],
    //   "comments": false
    // },
    babel: {
      presets: [
        'es2015',
        'stage-0',
      ],
      plugins: [
        ["transform-runtime", {
            "polyfill": true,
            "regenerator": true
        }],
      ]
    },
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
