<template>
  <v-layout justify-space-between>
    <v-btn id="addPost" right top dark fab fixed class="pink" @click.stop="openPostEditor">
      <v-icon>add</v-icon>
    </v-btn>
    <v-flex lg5 class="adminPosts">

      <v-subheader>Blog Posts</v-subheader>
      <ul class="posts">
        <template v-for="(post, key) in posts">
          <li :key="key">{{post.title}}
            <edit :postKey="key" :post="post"></edit>
            <!-- <v-btn icon class="primary--text">
              <v-icon>edit</v-icon>
            </v-btn> -->
          </li>
        </template>
      </ul>
    </v-flex>

    <post-editor @closeEditor="postEditorIsActive = false" :postEditorActive="postEditorIsActive"></post-editor>
    <!-- <v-layout>
      <v-dialog v-model="postEditorActive" fullscreen transition="dialog-bottom-transition" :overlay=false>
        <v-card>
          <v-toolbar dark class="primary">
            <v-btn icon @click.native="postEditorActive = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click.native="postEditorActive = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <v-subheader>User Controls</v-subheader>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Content filtering</v-list-tile-title>
                <v-list-tile-sub-title>Set the content filtering level to restrict appts that can be downloaded</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Password</v-list-tile-title>
                <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-subheader>General</v-subheader>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Notifications</v-list-tile-title>
                <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Sound</v-list-tile-title>
                <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-dialog>
    </v-layout> -->
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
import PostEditor from '@/components/PostEditor'
import Edit from '@/components/Edit'
export default {
  components: {
    PostEditor,
    Edit
  },
  async asyncData ({app}) {
    let { data } = await app.$axios.get('/posts')
    return {
      posts: data
    }
  },

  data() {
    return {
      postEditorIsActive: false,
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
    openPostEditor() {
      this.postEditorIsActive = true
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
  right: 8px;
  top: 50px;
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
