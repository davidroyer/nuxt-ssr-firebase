<template>
  <v-app light toolbar footer>
    <template v-if="isMounted">
      <v-navigation-drawer
        persistent
        enable-resize-watcher
        v-model="drawer">
        <v-list>
          <v-list-tile
            router
            nuxt
            v-for="(navItem, index) in navItems"
            :key="index"
            :to="navItem.to">
            <v-list-tile-action>
              <v-icon v-html="navItem.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="navItem.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </template>

    <v-toolbar fixed class="indigo" dark>
      <v-btn icon @click.native.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
    <v-footer class="indigo">
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      isMounted: false,
      clipped: false,
      drawer: false,
      fixed: false,
      navItems: [
        { icon: 'home', title: 'Welcome', to: '/' },
        { icon: 'layers', title: 'About', to: '/about' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'NuxtSSRFire'
    }
  },
  mounted () {
    this.$vuetify.load(() => this.isMounted = true)
  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .35s ease;
}
.page-enter, .page-leave-active {
  opacity: 0
}
</style>
