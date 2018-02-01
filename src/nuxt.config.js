module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nuxtjs SSR Firebase Functions',
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

// <script src="https://cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  css: [{
    src: '@/assets/styles/main.css',
    lang: 'css'
  }],
  /*
   ** Build configuration
   */
  buildDir: '../prod/server/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    babel: {
      presets: [
        'es2015',
        'stage-0'
      ],
      plugins: [
        ["transform-runtime", {
          "polyfill": true,
          "regenerator": true
        }],
      ]
    },
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
