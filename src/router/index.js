import Vue from 'vue'
import Router from 'vue-router'
import home from 'src/router/home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //  首页
    home
  ]
})
