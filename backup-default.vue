<template>
  <v-app dark toolbar>
    <toolbar></toolbar>
    <main>
      <v-container fluid>
        <nuxt />
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
    return {}
  }
}
</script>

<style>
h6 {
  color: white;
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
