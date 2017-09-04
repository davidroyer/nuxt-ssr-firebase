<template>
  <v-dialog fullscreen hide-overlay persistent lazy transition="dialog-bottom-transition" v-model="editDialogVisibility" >
    <v-btn outline class="secondary--text" fab small slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card @keyup.esc="editDialogVisibility = false" >
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Post</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="post.title"
                required></v-text-field>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="post.content"
                required></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn
                flat
                class="blue--text darken-1"
                @click="editDialogVisibility = false">Close</v-btn>
              <v-btn flat class="blue--text darken-1" @click="onSaveChanges">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
      <v-alert secondary :value="showingAlert" transition="scale-transition">
        Post Updated!
      </v-alert>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['postKey', 'post'],
    data () {
      return {
        editDialogVisibility: false,
        editedTitle: this.post.title,
        editedContent: this.post.content,
        showingAlert: false
      }
    },
    methods: {
      onSaveChanges () {
        let vm = this
        let key = vm.postKey
        let updatedPost = vm.post
        // console.log(key, updatePost);
        if (updatedPost.title.trim() === '' || updatedPost.content.trim() === '') {
          return
        }
        vm.$axios.post(`/posts/${key}`, updatedPost)
          .then((response) => {
            // vm.showNotification = true;
            // vm.clearPost()
            vm.showingAlert = true
            setTimeout(() => {
              console.log('ran');
              vm.showingAlert = false
              vm.editDialogVisibility = false
            }, 2000);

          })
          .catch((error) => {
            console.log(error);
          });
      },
      addPost() {
        this.$axios.post('/posts', this.post)
          .then((response) => {
            // this.showNotification = true;
            this.clearPost()
          })
          .catch((error) => {
            console.log(error);
          });
      },
      clearPost() {
        var post = this.post
        for (var key in post) {
          post[key] = ''
        }
        console.log(post);
      },
    }
  }
</script>
<style>
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
