const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */

  head: {
    title: 'Nuxt Firebase SSR',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic' },
      { rel: 'stylesheet', href: 'https://cdn.rawgit.com/necolas/normalize.css/master/normalize.css' },
      { rel: 'stylesheet', href: 'https://cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css' }
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
  // publicPath: '/'
  build: {
    /*
    ** Run ESLINT on save
    */
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
