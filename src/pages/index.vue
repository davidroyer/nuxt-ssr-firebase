<template>

  <div>
    <h1 class="display-1">Getting Started</h1>
    <steps></steps>
  </div>
</template>

<script>
import Steps from '@/components/Steps'

export default {
  components: {
    Steps
  },
  data() {
    return {
      isMounted: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
