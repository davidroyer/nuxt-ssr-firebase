<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
import NuxtLoading from './components/nuxt-loading.vue'

import '../../../src/assets/css/app.styl'


let layouts = {

  "_default": () => import('../../../src/layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

export default {
  head: {"title":"Nuxt Firebase SSR","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"},{"name":"mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"default"},{"name":"theme-color","content":"#3B8070"},{"property":"og:type","content":"website"},{"property":"og:title","content":"firebase-functions-nuxt-example"},{"property":"og:description","content":"Host Next.js SSR app on Firebase Cloud Functions with Firebase Hosting redirects."}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"},{"rel":"stylesheet","type":"text/css","href":"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"},{"rel":"manifest","href":"/assets/manifest.431f607e.json"},{"rel":"shortcut icon","href":"/assets/icons/icon_16.d00bMwo0t0c.png"},{"rel":"apple-touch-icon","href":"/assets/icons/icon_152.d00bMwo0t0c.png"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  
  mounted () {
    this.$loading = this.$refs.loading
    this.$nuxt.$loading = this.$loading
  },
  
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        return layouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

