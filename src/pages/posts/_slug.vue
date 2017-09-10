<template>
  <div class="">
      <h1 class="postTitle "v-text="post.title"></h1>
      <div class="postContent" v-html="post.content"></div>
      <p><nuxt-link to="/blog">Back to Blog</nuxt-link></p>
  </div>
</template>

<script>

export default {
  async fetch ({ store, params, app }) {
    const data = await app.$axios.$get(`posts/${params.slug}`)
    store.commit('setCurrentPost', data)
  },
  computed: {
    post () {
      return this.$store.state.currentPost
    }
  },
  head () {
    return {
      title: this.post.title
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  &Title {
    @media (min-width: 601px) {
      font-size: 67.2px;
    }
  }
}
</style>
