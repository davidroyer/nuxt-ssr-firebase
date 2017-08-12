<template>


    <v-toolbar dark class="primary">
      <v-toolbar-title class="white--text">Nuxt SSR Firebase</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click.native.stop="toggleDrawer">

        </v-toolbar-side-icon>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn nuxt flat
          v-for="item in menuItems"
          :key="item.route"
          :href="item.route">
          {{item.title}}
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>
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
      // alert('hi')
      this.$emit('drawerTogglerClicked')
    }
  }
}
</script>
