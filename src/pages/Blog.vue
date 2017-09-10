<template>

  <div>
    <h1 class="display-1">Blog</h1>
    <ul>
      <li v-for="post in posts">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
