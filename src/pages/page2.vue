<template>
  <section class="container">
    <div>
      <h1 class="mui--text-display1">Page 2</h1>
      <h2 class="headline">Rendered From:<span class="render-result">{{renderSource}}</span></h2>
      <button
        id="reload-btn"
        class="mui-btn mui-btn--primary"
        @click="reloadPage">
        Reload Page
      </button>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData () {
    return {
      renderSource: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  methods: {
    reloadPage () {
      window.location.reload()
    }
  }
}
</script>
