<template>
  <header class="mui-appbar mui--z1">
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/page2">Page 2</nuxt-link>
      <nuxt-link to="/page3">Page 3</nuxt-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style lang="css">
  footer {
    box-sizing: border-box;
    background-color: #eee;
    border-top: 1px solid #e0e0e0;
    padding: .5em 0;
    display: flex;
    align-items: center;
  }

  .footer-flex-item {
    margin: .5em;
  }
</style>
