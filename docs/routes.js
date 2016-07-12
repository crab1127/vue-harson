import {nav, components} from './navConfig'

export default function(router) {
  let routesMap = {
    '/': {
      name: 'home',
      component: function(resolve) {
        require(['./views/home.vue'], resolve)
      }
    }
  }
  nav.map(nav =>{
    console.log(2222, nav)
    routesMap['/'+nav.name] = {
      name: nav.name,
      component(resolve) {
        require([`./views/blog.vue`], resolve)
      }
    }
  })

  components.map(nav => nav.list.map(page => {
    routesMap[`/component/${page.name}`] = {
      name: page.name,
      component(resolve) {
        require([`./views/${page.name}.vue`], resolve)
      }
    }
  }))
  router.map(routesMap)
  router.redirect({
    '/components': '/component/modal',
    '/about': '/'
  })
}