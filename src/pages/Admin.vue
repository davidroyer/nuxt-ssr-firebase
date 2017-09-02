<template>
  <v-layout justify-space-between>
    <v-flex lg5>
      <v-subheader>Blog Posts</v-subheader>
      <ul class="posts">
        <template v-for="(post, key) in posts">
          <li :key="key">{{post.title}}
            <v-btn icon class="primary--text">
              <v-icon>edit</v-icon>
            </v-btn>
          </li>
        </template>
      </ul>
      <!-- <v-btn small primary dark>Edit</v-btn> -->
    </v-flex>
    <v-flex lg7 class="post-new">
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
      <v-btn @click="addPost" class="secondary f-right text-xs-right">Save Post</v-btn>
    </v-flex>
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
  </v-layout>
</template>

<script>
export default {
  async asyncData ({app}) {
    let { data } = await app.$axios.get('/posts')
    return {
      posts: data
    }
  },

  data() {
    return {
      post: {
        title: '',
        content: ''
      },
      showNotification: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 1500,
      text: 'New Post Added'
    }
  },
  methods: {
    addPost() {
      this.$axios.post('/posts', this.post)
        .then((response) => {
          this.showNotification = true;
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
  max-width: 260px;
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
</style>
