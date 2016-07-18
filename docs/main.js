import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import configRouter from './routes'
import * as hsComponents from './components'

import App from './app.vue'


Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  //history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

configRouter(router)

//组件
Object.keys(hsComponents).forEach((component) => {
  Vue.component(component, hsComponents[component])
})


router.start(App, '#app')
