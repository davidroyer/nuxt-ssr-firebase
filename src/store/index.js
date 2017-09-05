import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      leftDrawerVisible: true,
      post: {
        title: '',
        content: ''
      },
      posts: [],
      postEditorIsActive: false,
      showingSuccessMessage: false,
    },

    mutations: {
      toggleMenuState (state) {
        state.leftDrawerVisible = !state.leftDrawerVisible
      },
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setEditorState(state, newState) {
        state.postEditorIsActive = newState
      },
      setMessageState(state, newState) {
        state.showingSuccessMessage = newState
      },
      removePost(state, key) {
        console.log(key);
        let posts = state.posts
        // post[key] = null
        state.posts.$remove(key)
      }
    },
    actions: {
      async nuxtServerInit ({ commit }, { app }) {
        const data = await app.$axios.$get('posts')
        commit('setPosts', data)
      },

      async getPosts ({commit}) {
        const data = await this.$axios.$get(`posts`)
        commit('setPosts', data)
      },

      addPost ({commit, dispatch}, post) {
        return new Promise((resolve, reject) => {
          this.$axios.post('/posts', post)
            .then((response) => {
              commit('setMessageState', true)
              dispatch('getPosts')
                setTimeout(() => {
                  commit('setMessageState', false)
                  commit('setEditorState', false)
              }, 1500);
            })
            .catch((error) => {
              console.log(error);
            });
          resolve()
        })
      },
      deletePost ({commit, dispatch}, key) {
        this.$axios.delete(`/posts/${key}`)
          .then((response) => {
            dispatch('getPosts')
            console.log('Post Deleted', response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  })
}

export default createStore
