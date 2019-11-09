import Vue from 'vue'
import Router from 'vue-router'
import None from '../components/None.vue'
import Basic from '../components/Basic.vue'
import EvolutionChain from '../components/EvolutionChain.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'None',
      component: None
    }, {
      path: '/pokemon',
      name: 'Basic',
      component: Basic
    }, {
      path: '/evolution',
      name: 'EvolutionChain',
      component: EvolutionChain
    }
  ]
})
