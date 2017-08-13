const path = require('path')

module.exports = {
  head: {
    title: 'Nuxt Firebase SSR',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,300italic,400,500,700,700italic|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.rawgit.com/necolas/normalize.css/master/normalize.css' },
      { rel: 'stylesheet', href: '  https://unpkg.com/vuetify/dist/vuetify.min.css' }
    ]
  },
  loading: { color: '#3B8070' },
  buildDir: '../functions/nuxt',
  build: {
    vendor: ['vuetify'],
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
    }
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  plugins: ['~/plugins/vuetify.js'],
  css: ['vuetify/dist/vuetify.min.css']
}
