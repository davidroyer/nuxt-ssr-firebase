<template>
  <v-layout justify-space-between>
    <transition name="slideup-fade" appear>
      <v-btn v-if="showPosts" id="addPost" right top dark fab fixed class="pink" @click.stop="openPostEditor">
        <v-icon>add</v-icon>
      </v-btn>
    </transition>
    <v-flex lg5 class="adminPosts">
      <v-subheader>Blog Posts</v-subheader>
      <transition name="slide-fade">
        <transition-group v-if="showPosts" name="list-complete" tag="ul" class="posts">
          <li
            v-for="(post, key) in Posts"
            :key="key"
            class="list-complete-item"
          >
            <span class="postTitle" v-text="post.title"></span>
            <div class="postButtonGroup">
              <edit :postKey="key" :post="post"></edit>
              <v-btn outline fab small class="secondary--text" @click="deletePost(key)">
                <v-icon>delete</v-icon>
              </v-btn>
            </div>
          </li>
        </transition-group>
      </transition>
    </v-flex>

    <post-editor @closeEditor="$store.commit('setEditorState', false)" :postEditorActive="editorIsActive"></post-editor>
  </v-layout>
</template>

<script>
import PostEditor from '@/components/PostEditor'
import Edit from '@/components/Edit'
export default {
  components: {
    PostEditor,
    Edit
  },
  async asyncData ({app, env}) {
    return {
      baseURL: env.baseURL,
      posts: {},
      postEditorIsActive: false,
      showPosts: false,
      post: {
        title: '',
        content: ''
      }
    }
  },
  computed: {
    editorIsActive () {
      return this.$store.state.postEditorIsActive
    },
    Posts () {
      return this.$store.state.posts
    }
  },
  methods: {
    openPostEditor() {
      this.$store.commit('setEditorState', true)
    },
    getPosts () {
      this.$axios.get('/posts')
        .then(({data}) => {
          this.posts = data
          this.showPosts = true
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletePost (key) {
      this.$store.dispatch('deletePost', key)

      // this.$axios.delete(`/posts/${key}`)
      //   .then((response) => {
      //     console.log(this.posts);
      //     console.log('Post Deleted', response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>

<style lang="css">

.f-right {
  float: right;
}

.posts {
  padding-left: 12px;
}
.posts li {
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(204, 204, 204, 0.8);
  margin: 1em 0;
}
.posts li:first-child {
  margin-top: 0;
}

.subheader {
  padding-left: 0;
font-size: 1em;
font-weight: 600;
}

.post-new {
  margin-top: 3em;
}

.postTitle {
  flex: 0 1 55%;
}

.postButtonGroup {
  flex: 0 1 115px;
    margin-left: auto;
    align-self: flex-end;
    display: block;
    text-align: right;
}
@media (min-width: 701px) {
  .post-new {
    margin-top: 0;
  }
}
#addPost {
  z-index: 999;
  right: 25px;
  top: 35px;
}

.adminPosts {
  position: relative;
}
.dialog__content {
  padding: 0 1em;
  z-index: 9999;
}
.layout {
  position: relative;
}

</style>
