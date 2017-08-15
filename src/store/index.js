import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      leftDrawerVisible: true
    },

    mutations: {
      toggleMenuState (state) {
        state.leftDrawerVisible = !state.leftDrawerVisible
      }
    },
    actions: {
      async nuxtServerInit ({commit}, {store, isClient, isServer, route, params}) {
      }
    }
  })
}

export default createStore
