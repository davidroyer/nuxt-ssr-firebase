<template>
  <v-layout>
    <v-dialog v-model="postEditorActive" hide-overlay fullscreen transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark class="secondary">
          <v-btn icon @click.native="closeEditor" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title v-if="post.key">Edit Post</v-toolbar-title>
          <v-toolbar-title v-else>New Post</v-toolbar-title>
          <v-spacer></v-spacer>
            <v-btn icon @click="deletePost(post)">
              <v-icon>delete</v-icon>
            </v-btn>
            <v-btn icon v-if="post.key" dark @click.native="updatePost">
              <v-icon>save</v-icon>
            </v-btn>
            <v-btn icon v-else="post.key" @click.native="addPost">
              <v-icon>save</v-icon>
            </v-btn>
        </v-toolbar>
        <v-flex class="postFieldsWrapper" :key="post.key">
          <v-subheader>Add New Post</v-subheader>
          <v-text-field
            name="post-title"
            label="Post Title"
            id="post-title"
            :value="post.title"
            @keyup.stop="updateField('title', $event.target.value)">
          </v-text-field>
          <v-text-field
            name="post-content"
            label="Post Content"
            id="post-content"
            :value="post.content"
            multi-line
            @keyup.stop="updateField('content', $event.target.value)">
          </v-text-field>

          <div v-if="post.image" class="imageWrapper">
            <img width="400px;" :src="post.image" alt="">
            <image-uploader>
              <template slot="text">Change Image</template>
            </image-uploader>
          </div>

          <image-uploader v-else>
            <template slot="text">Upload Image</template>
          </image-uploader>

        </v-flex>

      </v-card>

        <v-alert secondary icon="check_circle" :value="showingAlert" transition="scale-transition">
          Successful
        </v-alert>

    </v-dialog>
  </v-layout>
</template>

<script>
import ImageUploader from '@/components/ImageUploader'
export default {
  components: {
    ImageUploader
  },
  name: 'Post-Editor',
  props: [
    'postEditorActive'
  ],
  data () {
    return {
      post: this.$store.state.post
    };
  },
  computed: {
    showingAlert() {
      return this.$store.state.showingSuccessMessage
    },
    postTest () {
      return this.$store.state.post
    }
  },
  watch: {
    postEditorActive: function (newState) {
      if (newState === true) {
        this.post = this.$store.state.post
      }
    }
  },
  methods: {
    handleUpload(name, files) {
      let file = files[0]
      this.$store.dispatch('uploadPhoto', file)
    },
    updateField (field, value) {
      this.$store.commit('updateActivePost', {
      	[field]: value
      })
    },
    addPost() {
      this.$store.dispatch('addPost', this.post)
    },
    updatePost() {
      this.$store.dispatch('updatePost', this.post)
    },
    deletePost (key) {
      this.$store.dispatch('deletePost', this.post)
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

<style lang="scss">
.dialog {
  .toolbar__content {
    // background: white;s
    // color:
  }
}
.imageWrapper {
  position: relative;
    display: flex;
    width: 300px;
    flex-flow: row wrap;
    justify-content: center;
    height: auto;
    flex-grow: 0;
    max-width: 100%;
    align-items: center;
    align-content: center;

    img {
      max-width: 100%
    }
    .uploaderButton {
      @media (min-width: 760px) {
        position: absolute;
        bottom: 20px;
      }
    }
}
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
  display: flex;
  position: absolute !important;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  left: 20px;
  max-width: 100%;

  @media (min-width: 600px) {
    max-width: 400px;
  }
  &__icon {
    color: white !important;
    font-size: 1.5em !important;
  }
  div {
    flex: none;
  }
}

.dialog--fullscreen {
  overflow-y: scroll;
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
