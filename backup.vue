
<template>
  <div class="wrapper">
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
    <nuxt></nuxt>
  </div>
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
</style>
