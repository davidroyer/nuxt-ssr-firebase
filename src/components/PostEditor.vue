<template>
  <v-layout>
    <v-dialog v-model="postEditorActive" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-card>
        <v-toolbar dark class="secondary">
          <v-btn icon @click.native="closeEditor" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>New Post</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="addPost">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-flex class="postFieldsWrapper">
          <v-subheader>Add New Post</v-subheader>
          <v-text-field
            name="post-title"
            label="Post Title"
            id="post-title"
            v-model="post.title">
          </v-text-field>
          <v-text-field
            name="post-content"
            label="Post Content"
            id="post-content"
            v-model="post.content"
            multi-line>
          </v-text-field>
          <!-- <v-btn @click="addPost" class="secondary f-right text-xs-right">Save Post</v-btn> -->
        </v-flex>
        <v-alert secondary :value="showingAlert" transition="scale-transition">
          Post Updated!
        </v-alert>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'Post-Editor',
  props: [
    'postEditorActive'
  ],
  data() {
    return {
      post: {
        title: '',
        content: ''
      }
    }
  },
  computed: {
    showingAlert() {
      return this.$store.state.showingSuccessMessage
    }
  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', this.post).then(() => {
        this.clearPost()
      })
    },
    clearPost() {
      setTimeout(() => {
        var post = this.post
        for (var key in post) {
          post[key] = ''
        }
      }, 3500);
    },
    closeEditor() {
      this.$emit('closeEditor')
    }
  }
}
</script>

<style lang="css">
.dialog__content {
  /*z-index: 9999;*/
}
.postFieldsWrapper {
  padding: 1em;
}
.alert {
  max-width: 500px;
text-align: center;
font-size: 1.1em;
display: block;
}
@media (min-width: 1024px) {
  .dialog--fullscreen {
    left: 300px;
    top: 0;
    box-shadow: none;
    right: 0;
    width: calc(100% - 300px);
  }
  .dialog__content {
    left: 300px;
  }
}
.card__title {
  font-size: 1.25em;
  font-weight: 500;
}
</style>
