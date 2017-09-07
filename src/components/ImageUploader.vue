<template>
  <v-btn
    class="uploaderButton blue-grey white--text">
    <slot name="text"></slot>
    <input type="file" id="imageUpload" name="imageUpload" multiple @change="handleUpload($event.target.name, $event.target.files)" accept="image/*" class="input-file">
    <v-icon right dark>cloud_upload</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    handleUpload(name, files) {
      let file = files[0]
      this.$store.dispatch('uploadPhoto', file)
    }
  },
  data () {
    return {
      keyForPost: ''
    }
  }
}
</script>

<style lang="scss">
  .uploaderButton {
    overflow: hidden;
    .btn__content {
      height: inherit;
    }
    input#imageUpload {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
      cursor: pointer;
      max-width: 100%;
    }
  }

</style>
