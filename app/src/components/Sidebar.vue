<template>
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
        Home</v-btn>
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
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        { route: '/', title: 'Home'},
        { route: '/about', title: 'About'}
      ]
    }
  },
  methods: {
    toggleDrawer() {
      console.log('hi')
      this.$emit('drawerTogglerClicked')
    }
  }
}  
</script>

<style>

</style>
