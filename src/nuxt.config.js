const path = require('path')
const {projectID} = require('../config.js')

module.exports = {
  head: {
    title: 'Nuxt Firebase SSR',
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
        type: 'text/css',
        aysnc: 'true',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  loading: {
    color: '#3B8070'
  },
  env: {
    // testUrl: process.env.NODE_ENV == 'development' ? 'http://localhost:3000/api' : 'https://nuxtssrfire.firebaseapp.com/api'
  },
  buildDir: '../prod/server/nuxt',
  build: {
    publicPath: '/assets/',
    vendor: ['vuetify', 'axios'],
    extractCSS: true,
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
          exclude: [
            /(node_modules)/,
            /(prod)/
          ]
        })
      }
    }
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['@nuxtjs/markdownit', { html: true, linkify: true, breaks: true, highlight: (code, lang) => {
        const Prism = require('prismjs')
        return Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
      } } ]
  ],
  axios: {
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : `https://${projectID}.firebaseapp.com/api`,
    browserBaseURL: '/api'
  },
  proxy: [
    ['/api', {
      target: `http://localhost:5000/${projectID}/us-central1/render`
    }]
  ],
  plugins: [
    '~/plugins/vuetify.js'
  ],
  css: [
    '~/assets/css/app.styl',
    '~/assets/css/main.scss',
    'prismjs/themes/prism.css'
  ],
}
