<template>
  <v-layout justify-space-between>
    <v-btn id="addPost" right top dark fab fixed class="pink" @click.stop="openPostEditor">
      <v-icon>add</v-icon>
    </v-btn>
    <v-flex lg5 class="adminPosts">

      <v-subheader>Blog Posts</v-subheader>

      <transition name="slide-fade" appear>
        <ul  class="posts">
          <template  v-for="(post, key) in posts">
            <li :key="key">
              <span class="postTitle" v-text="post.title"></span>
              <div class="postButtonGroup">
                <edit :postKey="key" :post="post"></edit>
                <v-btn outline fab small class="secondary--text" @click="deletePost(key)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </div>
            </li>
          </template>
        </ul>
      </transition>
    </v-flex>

    <post-editor @closeEditor="postEditorIsActive = false" :postEditorActive="postEditorIsActive"></post-editor>

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
    let { data } = await app.$axios.get('/posts')
    return {
      posts: data,
      postEditorIsActive: false,
      post: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    openPostEditor() {
      this.postEditorIsActive = true
    },
    deletePost (key) {
      this.$axios.delete(`/posts/${key}`)
        .then((response) => {
          console.log(this.posts);
          console.log('Post Deleted', response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
