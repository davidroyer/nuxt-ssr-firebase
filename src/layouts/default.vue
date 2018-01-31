<template>
  <div>
    <header class="mui-appbar mui--z1">
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/page2">Page 2</nuxt-link>
        <nuxt-link to="/page3">Page 3</nuxt-link>
      </nav>
    </header>
    <div id="content-wrapper" class="mui--text-center">
      <nuxt class="mui-container"/>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      reloadPage () {
        console.log();
        window.location.reload()
      }
    }
  }
</script>
