import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      leftDrawerVisible: true,
      post: {
        key: '',
        title: '',
        content: '',
        image: ''
      },
      posts: [],
      currentPost: null,
      postEditorIsActive: false,
      showingSuccessMessage: false,
    },

    mutations: {
      toggleMenuState (state) {
        state.leftDrawerVisible = !state.leftDrawerVisible
      },
      updateActivePost: function (state, post) {
        Object.assign(state.post, post);
      },
      setPost: (state, post) => {
        state.post = post
      },
      setCurrentPost: (state, post) => {
        console.log('setCurrentPost', post);
        state.currentPost = post
      },
      setPosts: (state, posts) => {
        state.posts = posts
      },
      resetPost: (state, posts) => {
        state.post = {
          key: '',
          title: '',
          content: '',
          image: ''
        }
      },
      setEditorState(state, newState) {
        state.postEditorIsActive = newState
      },
      setMessageState(state, newState) {
        state.showingSuccessMessage = newState
      }
    },
    getters: {
      // getPostBySlug: (state, getters) => (slug) => {
      //   return state.posts.find(post => post.slug === slug)
      // }
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

      async getPost ({commit}, slug) {
        const data = await this.$axios.$get(`/posts/${slug}`)
        console.log('STORE', data);
        commit('setCurrentPost', data)
      },

      addPost ({commit, dispatch}, post) {
        console.log('STORE: ', post);
        return new Promise((resolve, reject) => {
          this.$axios.post('/posts', post)
            .then((response) => {
              dispatch('getPosts')
              commit('setMessageState', true)
              commit('resetPost')
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

      deletePost ({commit, dispatch}, post) {
        this.$axios.delete(`/posts/${post.key}`, post)
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
      },

      updatePost ({commit, dispatch}, post) {
        this.$axios.post(`/posts/${post.key}`, post)
          .then((response) => {
            commit('setMessageState', true)
            // dispatch('getPosts')
            commit('resetPost')
              setTimeout(() => {
                commit('setMessageState', false)
                commit('setEditorState', false)
            }, 1500);
          })
          .catch((error) => {
            console.log(error);
          });
      },

      uploadPhoto ({commit}, file) {
        var formData = new FormData();
        formData.append('imageUpload', file)

        this.$axios.post('/upload', formData)
          .then(({data}) => {
            commit('updateActivePost', {
            	['image']: data.imageUrl
            })
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  })
}

export default createStore
