import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/styles.scss'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(BootstrapVue)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
