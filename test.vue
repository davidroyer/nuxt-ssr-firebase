
<template>
  <v-app>
    <v-navigation-drawer
      class="pb-0"
      persistent
      absolute
      height="100%"
      clipped
      enable-resize-watcher
      v-model="leftDrawer"
      >
      <v-list>
        <v-list-tile
          router
          v-for="(item, i) in menuItem"
          :key="i"
          :to="item.route"
        >
          <v-list-tile-action>
            <!-- <v-icon v-html="item.icon"></v-icon> -->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <toolbar @drawerTogglerClicked="drawer = !drawer"></toolbar>
    <main>
      <v-container fluid>
        <nuxt></nuxt>
      </v-container>
    </main>
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
      leftDrawer: false,
      menuItems: [
        { route: '/', title: 'Home'},
        { route: '/about', title: 'About'}
      ]
    }
  }
}
</script>
<style>
  /*.navigation-drawer {
    background: #f5f5f5!important;
  }*/
  ul {
    list-style-type: none;
  }
  li {
    margin: 1em 0em;
  }

  a {
    text-decoration: none;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity .5s
  }
  .page-enter, .page-leave-active {
    opacity: 0
  }
</style>
