import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _753ad66d = () => import('../../../src/pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _6615c8f0 = () => import('../../../src/pages/About.vue' /* webpackChunkName: "pages/About" */).then(m => m.default || m)
const _1e1c4a4a = () => import('../../../src/pages/Admin.vue' /* webpackChunkName: "pages/Admin" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _753ad66d,
			name: "index"
		},
		{
			path: "/About",
			component: _6615c8f0,
			name: "About"
		},
		{
			path: "/Admin",
			component: _1e1c4a4a,
			name: "Admin"
		}
    ],
    fallback: false
  })
}
