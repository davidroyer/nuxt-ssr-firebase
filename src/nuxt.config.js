module.exports = {
  debug: true,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nuxtjs SSR on Firebase Functions',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.muicss.com/mui-0.9.35/css/mui.min.css'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },

  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],

  /*
   ** Global CSS
   */
  css: ['~/assets/styles/main.css'],
  buildDir: './../prod/server/nuxt',
  build: {
    publicPath: '/assets/',
    cache: true,
    babel: {
      presets: [
        [
          'babel-preset-vue-app',
          {
            targets: process.server ?
              {
                node: '6.14.0'
              } :
              {
                ie: 9,
                uglify: true
              }
          }
        ]
      ]
    },
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (process.browser) {
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
