import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import configRouter from './routes'

import App from './app.vue'

//require('./assets/docs.css')



Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  //history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

configRouter(router)

//组件
import menu from './components/menu.vue'
Vue.component('menu', menu)


router.start(App, '#app')
