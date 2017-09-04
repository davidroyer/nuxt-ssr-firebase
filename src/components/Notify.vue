<template>
  <v-snackbar
    :timeout="timeout"
    :top="y === 'top'"
    :bottom="y === 'bottom'"
    :right="x === 'right'"
    :left="x === 'left'"
    :multi-line="mode === 'multi-line'"
    :vertical="mode === 'vertical'"
    v-model="showNotification"
  >
    {{ text }}
    <v-btn flat class="pink--text" @click.native="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  return {
    showNotification: false,
    y: 'top',
    x: null,
    mode: '',
    timeout: 1500,
    text: 'New Post Added'
  }
}
</script>

<style lang="css">
</style>
