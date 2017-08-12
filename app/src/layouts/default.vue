
<template>
  <v-app>
    <v-navigation-drawer
      class="pb-0"
      persistent
      absolute
      height="100%"
      clipped
      enable-resize-watcher
      v-model="drawer">
      <ul>
        <template v-for="item in menuItems">
          <li>
            <nuxt-link
              class="title"
              :key="item.route"
              :to="item.route">
              {{item.title}}
            </nuxt-link>
          </li>
        </template>
      </ul>

      <!-- <v-list-tile
      v-for="item in menuItems"
      :key="item.route"
      :href="item.route">
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.title }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile> -->
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
      drawer: false,
      menuItems: [
        { route: '/', title: 'Home'},
        { route: '/about', title: 'About'}
      ]
    }
  }
}
</script>
<style>
.navigation-drawer {
  background: #f5f5f5!important;
}
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
/*html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}*/
</style>
