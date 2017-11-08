<template>
  <v-layout>
    <v-flex lg8>
    <p>I plan on continuing to work on this project, especially if there is interest from others in its development. Please let me know your thoughts, questions, and ideas!</p>
    <div v-if="content" v-html="content"></div>
    </v-flex>
  </v-layout>
</template>

<script>
  import hello from '~/md/hello.md'
  console.log(hello);
  export default {
    computed: {
      content () {
        return hello
      }
    }
  }
</script>
