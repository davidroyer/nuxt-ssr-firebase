<template>
  <v-app dark toolbar>

  <toolbar></toolbar>
    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
    <v-navigation-drawer
      class="pb-0"
      persistent
      absolute
      height="100%"
      clipped
      enable-resize-watcher
      v-model="$store.state.leftDrawerVisible"
      >
      <div v-for="item in menuItems">
        <v-btn
          flat
          nuxt
          :key="item.route"
          :to="item.route">
          {{item.title}}
        </v-btn>
      </div>
      <div>
        <v-btn
          flat
          nuxt
          to="/">
          Home
        </v-btn>
      </div>
      <div>
        <v-btn
          flat
          nuxt
          to="/about">
          About
        </v-btn>
      </div>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'

  export default {
    components: {
      Toolbar
    },
    data () {
      return {
        clipped: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/about' }
        ],
        menuItems: [
          { route: '/', title: 'Home'},
          { route: '/about', title: 'About'}
        ],
        miniVariant: false,
        right: true,
        rightDrawer: true,
        title: 'Vuetify.js'
      }
    }
  }
</script>

<style>
h6 {
  color: white;
}
@media (min-width: 1254px) {
  main {
    padding-left: 300px;
  }
}
.page-enter-active, .page-leave-active {
  transition: opacity .35s ease;
}
.page-enter, .page-leave-active {
  opacity: 0
}
aside btn {
  display: block;
}
</style>
