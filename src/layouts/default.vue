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
      <v-toolbar-title v-text="headerTitle"></v-toolbar-title>
    </v-toolbar>

    <main>
      <v-container>
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
        { icon: 'layers', title: 'About', to: '/about' },
        { icon: 'person', title: 'Admin', to: '/admin' },
        { icon: 'person', title: 'Admin Async', to: '/adminasync' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'NuxtSSRFire'
    }
  },
  mounted () {
    this.$vuetify.load(() => this.isMounted = true)
  },
  computed: {
    headerTitle: function() {
      let combinedTitle = `${this.title} - ${this.$route.name}`
      return this.$route.name === 'index' ? '' : this.$route.name
    }
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
.layout {
  /*padding: 1em 0;*/
}
.cotainer {

}
html {
  font-size: 16px;
}
.list__tile__action .icon {
  font-size: 28px;
}
@media (max-width: 700px) {
  .container > .layout {
    flex-direction: column;
  }
}
@media (max-width: 1023px) {
  .container {
    min-width: 100% !important;
    max-width: 100% !important;
  }
}

.navigation-drawer {
  z-index: 9999 !important;
}
.navigation-drawer li {
  margin: 1em 0;
}

.navigation-drawer li:fist-child {
  margin-top: .5em;
}

.navigation-drawer .list__tile__title {
  font-size: 1.3em;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
.slide-fade-enter-active {
  transition: all .35s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-30px);
  opacity: 0;
}


.slideup-fade-enter-active {
  transition: all .35s ease;
}
.slideup-fade-enter, .slideup-fade-leave-to
/* .slideup-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-30px);
  opacity: 0;
}
.toolbar--fixed {
  /*z-index: 0;*/
}
</style>
