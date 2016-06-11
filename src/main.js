import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import {configRouter} from './route-config.js'

Vue.use(Vuex)

Vue.use(VueRouter)

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})
// configure router
configRouter(router)

router.start(App, '#app')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
